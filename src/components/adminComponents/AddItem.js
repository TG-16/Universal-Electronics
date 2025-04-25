import { useState } from "react";
import { Input, Button } from "../Components";
import "./addItemStyle.css";

function AddItem() {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQty, setItemQty] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [itemImage, setItemImage] = useState(null);

  const handleAddItem = async () => {
    if (!itemName || !itemPrice || !itemQty || !itemDesc || !itemImage) {
      alert("Please fill out all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", itemName);
    formData.append("price", itemPrice);
    formData.append("stock", itemQty);
    formData.append("description", itemDesc);
    formData.append("image", itemImage);
    console.log(formData);

    try {
      const response = await fetch("http://localhost:5000/api/admin/addProduct", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert("Item added successfully!");
        // Clear form
        setItemName("");
        setItemPrice("");
        setItemQty("");
        setItemDesc("");
        setItemImage(null);
        document.getElementById("item-image").value = ""; // reset file input
      } else {
        alert(data.error || "Failed to add item.");
      }
    } catch (error) {
      console.error("Error adding item:", error);
      alert("An error occurred while adding the item.");
    }
  };

  return (
    <div className="add-item">
      <div className="add-item-form">
        <label htmlFor="item-name">Item Name:</label>
        <Input
          type="text"
          id="item-name"
        //   placeholder="Enter item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />

        <label htmlFor="item-price">Item Price:</label>
        <Input
          type="number"
          id="item-price"
        //   placeholder="Enter item price"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />

        <label htmlFor="item-qty">Item qty:</label>
        <Input
          type="number"
          id="item-qty"
        //   placeholder="Enter item qty"
          value={itemQty}
          onChange={(e) => setItemQty(e.target.value)}
        />

        <label htmlFor="item-description">Item Description:</label>
        <textarea
          id="item-description"
          rows={6}
          cols={50}
          placeholder="Enter item description"
          value={itemDesc}
          onChange={(e) => setItemDesc(e.target.value)}
        ></textarea>

        <label htmlFor="item-image">Upload Image:</label>
        <Input
          type="file"
          id="item-image"
          accept="image/*"
          onChange={(e) => setItemImage(e.target.files[0])}
        />

        <Button text="Add Item" onClick={handleAddItem} />
      </div>
    </div>
  );
}

export default AddItem;
