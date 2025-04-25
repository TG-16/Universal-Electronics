import { Button } from "./Components";
import "./productCard.css";

const addToCart = () => {
  console.log("Add to cart clicked");
  // Add your logic to add the product to the cart here
};


function ProductCard({ product, showDetails, setCart }) {
  return (
    <div className="product-card" onClick={() => {console.log("product card clicked"); showDetails(product)}} style={(product.stock <= 0) ?  {pointerEvents: "none", opacity: 0.5} : {}}>
      <img src={`http://localhost:5000${product.image}`} alt={product.name}/>
      {console.log(product.image)}
      <h2>{product.name}</h2>
      <p>{product.price} ETB</p>
      {/* <Button text="Buy" onClick={e => {e.stopPropagation();  setCart(cart => [...cart, product]);}}/> */}
      {product.stock <= 0 ? (
    <p style={{ color: "#D32F2F", fontWeight: "bold" }}>Out of Stock</p>) :
      (<Button
        text="Buy"
        onClick={e => {
          e.stopPropagation();
          setCart(prevCart => {
        const existingProductIndex = prevCart.findIndex(item => item._id === product._id);
        
        if (existingProductIndex !== -1) {
          // Product exists – return a new cart with updated quantity
          return prevCart.map((item, index) => 
            index === existingProductIndex 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          );
        } else {
          // Product doesn't exist – add it with quantity 1
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
      
        }}
/>)}

    </div>
  );
}

export default ProductCard;