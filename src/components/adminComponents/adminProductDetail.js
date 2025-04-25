import { useState , useEffect} from "react";
import { Button, Input } from "../Components";
import "./adminProductDetailStyle.css";

function AdminProductDetail({ product, onProductDeleted, onProductUpdated }) {

  
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
  });
  
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        price: product.price || "",
        stock: product.stock || "",
        description: product.description || "",
      });
    }
  }, [product]);
  

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/updateproduct/${product._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Product updated successfully");
        console.log(data);
        onProductUpdated && onProductUpdated(data); // optional callback
      } else {
        alert(data.error || "Failed to update");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating product");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/api/admin/deleteProduct/${product._id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.ok) {
        alert("Product deleted");
        onProductDeleted && onProductDeleted(product._id); // optional callback
      } else {
        alert(data.error || "Failed to delete");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting product");
    }
  };

  return (
    <div className="adminProductDetail">
      <div className="firstRow">
      <img src={`http://localhost:5000${product.image || "/default.png"}`} alt={product.name || "Product"} />

        <div>
          <span>Name: </span>
          <Input type="text" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} />
          <span>Unit Price: </span>
          <Input type="number" value={formData.price} onChange={(e) => handleChange("price", e.target.value)} />
          <span>Available in stock: </span>
          <Input type="number" value={formData.stock} onChange={(e) => handleChange("stock", e.target.value)} />
        </div>
      </div>

      <textarea
        className="description"
        value={formData.description}
        rows={7}
        cols={70}
        onChange={(e) => handleChange("description", e.target.value)}
      />

      <div className="detailButtons">
        <Button classname="deleteButton" text="Delete" onClick={handleDelete} />
        <Button text="Save" onClick={handleSave} />
      </div>
    </div>
  );
}

export default AdminProductDetail;
