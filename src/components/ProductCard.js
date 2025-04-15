import { Button } from "./Components";
import "./productCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src="pro-400.png" alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price} ETB</p>
      <Button text="Buy" />
    </div>
  );
}

export default ProductCard;