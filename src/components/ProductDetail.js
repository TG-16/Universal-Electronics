import { Button, Topic } from "./Components";
import "./productDetailStyle.css";

function ProductDetail ({product})
{
    return (
            <div className="product-detail">
                <img src="pro-400.png" alt={product.name} />
                <Topic text={product.name} />
                <p>{product.price} ETB</p>
                <p>Available {product.availableStock}</p>
                <p>{product.description}</p>
                <div className="detailButtons">
                    <Button classname="homeButton" text="Home" />
                    <Button text="Buy" />
                </div>
            </div>
    );
}

export default ProductDetail;