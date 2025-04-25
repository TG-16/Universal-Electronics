import { Button, Topic } from "./Components";
import "./cartStyle.css";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart, onRemove, setActiveComponent }) {
  // 🧮 Calculate subtotal
  const subtotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  // 💸 Calculate tax (15%)
  const tax = subtotal * 0.15;

  // 🧾 Calculate grand total
  const grandTotal = subtotal + tax;
  const navigate = useNavigate();

  const goHome = () => {
    setActiveComponent("home");
  }

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
  
    // You must get the logged-in user's ID (e.g., from localStorage or context)
    // const userId = localStorage.getItem("userId"); // <-- Update if you store it differently
    let userId = "";
    await fetch("http://localhost:5000/find-userId", {
                method: "GET",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
              })    
            .then((response) => response.json())
            .then((data) => {
                if(data.userId !== null){
                    userId = data.userId;
                }
                // else{
                //   console.log(data.userId);
                //   userId = data.userId;
                // }
            })
            .catch((error) => {
                console.error("Error fetching userId status:", error);
            });
    console.log(userId);
    if (!userId) {
      alert("You must be logged in to checkout.");
      return navigate("/login");
    }
    // const userId = "680aae1ef40bf93ef666380a"; // Replace with actual user ID from your auth context or state
  
    // Prepare the products list
    const products = cart.map(product => ({
      productId: product._id,
      quantity: product.quantity
    }));
  
    try {
      const response = await fetch("http://localhost:5000/api/users/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ userId, products }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("✅ Checkout successful!");
        setActiveComponent("home");
        setCart([]); 
      } else {
        alert(`❌ Checkout failed: ${data.error}`);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("⚠️ Something went wrong during checkout.");
    }
  };
  

  return (
    <div className="cart">
      <Topic text="Your Cart" />
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th colSpan={2}>Item</th>
            <th>qty</th>
            <th colSpan={2}>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => (
            <tr key={index}>
              <td><img src="pro-400.png" alt={product.name} /></td>
              <td className="productName">{product.name}</td>
              <td>{product.quantity.toLocaleString()}</td>
              <td>{(product.price * product.quantity).toLocaleString()}</td>
              <td><Button classname="cancle" text="X" onClick={(() => onRemove(product._id))}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="subTotal">
        <p>Subtotal: ETB {subtotal.toLocaleString()}</p>
        <p>Tax(15%): ETB {tax.toLocaleString()}</p>
        <p className="totalPrice">Grand Total: ETB {grandTotal.toLocaleString()}</p>
      </div>

      <div className="detailButtons">
        <Button classname="homeButton" text="Home" onClick={goHome}/>
        <Button text="Check out" onClick={handleCheckout}/>
      </div>
    </div>
  );
}

export default Cart;
