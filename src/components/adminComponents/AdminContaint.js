import { Button, Topic } from "../Components";
import pro from "../../assets/pro-400.png"
import "./adminContaintStyle.css";
import AdminProductDetail from "./adminProductDetail";
import AddItem from "./AddItem";
import { useState , useEffect} from "react";


function AdminContaint ({activeComponent, setActiveComponent}) 
{
    

    const product ={
        name: "Pro 400",
        qty: 10,
        price: 40000,
        status: "pending",
        avaialble: 20,
        description: "Descriptio: panel=> 10w battery => 7.5Ah lamp => 1 other => This is the description of this solar about this solar a brief explanation"
    }
    const buyer = "Gebeyaw Mekonnen"

    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [description, setDescription] = useState({});

     useEffect(() => {
        fetch("http://localhost:5000/api/admin/productList")
          .then((response) => response.json())
          .then((data) => {
            setProducts(data);
          })
          .catch((error) => {
            console.error("Error fetching products:", error);
          });

    fetch("http://localhost:5000/api/admin/orderList")
          .then((response) => response.json())
          .then((data) => {
            setOrders(data);
          })
          .catch((error) => {
            console.error("Error fetching products:", error);
          });
    
        // fetch("http://localhost:5000/check-login", {
        //   method: "GET",
        //   credentials: "include",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     setIsLoggedIn(data.message === "Authorized");
        //   })
        //   .catch((error) => {
        //     console.error("Error fetching login status:", error);
        //   });
      }, [activeComponent]);

      console.log(orders);

      const handleProductDetail = (product) => {
        setActiveComponent("Product Detail");
        setDescription(product);
      }
    
    return (
        <div className="adminContaint">
            
            {//i have to decied how to render it
            activeComponent === "Orders" && (orders.length === 0 ? <Topic text="No orders available"  /> : 

             <table className="orderTable">
                <thead>
                <tr>
                    <th colSpan={2}>Product</th>
                    <th>Buyer</th>
                    <th>qty</th>
                    <th>price</th>
                    <th>status</th>
                </tr>
                </thead>
                
                <tbody>
                {orders.map((order, index) => (
                    order.products.map((product1, index) => (
                    <tr key={index} >
                        <td><img src={`http://localhost:5000${product1.product.image}`} alt={product1.name}/></td>
                        <td>{product1.product.name}</td>
                        <td>{order.user.name}</td>
                        <td>{product1.quantity}</td>
                        <td>{product1.product.price}</td>
                        <td><Button text={order.status} classname={order.status} /></td>
                    </tr>
                    ))
                ))}
                </tbody>

                </table>)}

            { activeComponent === "Products" && (products.length === 0 ? <Topic text="No orders available"  /> :
            <table className="orderTable">
                <thead>
                <tr>
                    <th colSpan={2}>Product</th>
                    <th>Available stock</th>
                    <th>Unit price</th>
                </tr>
                </thead>

                <tbody>
                {products.map((product, index) => (
                    <tr key={index} onClick={() => handleProductDetail(product)}>
                        <td><img src={`http://localhost:5000${product.image}`} alt={product.name}/></td>
                        <td>{product.name}</td>
                        <td>{product.stock}</td>
                        <td>{product.price}</td>
                    </tr>
                ))}
                </tbody>

            </table>)}

            {activeComponent === "Product Detail" && <AdminProductDetail product={description} onProductDeleted={(deletedId) => {
setProducts(products.filter(p => p._id !== deletedId));
  }}   onProductUpdated={(updatedProduct) => {
    setProducts(products.map(p =>
      p._id === updatedProduct._id ? updatedProduct : p
    ));
  }}/>}

            {activeComponent === "Add Item" && <AddItem />}
        </div>
    );
}

export default  AdminContaint;