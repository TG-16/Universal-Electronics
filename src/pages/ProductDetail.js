import { Button } from "../components/Components";

function ProductDetail ({product})
{
    return (
        <div>
            <div className="product-detail">
                <img src={product.image} alt={product.name} />
                <h1>{product.name}</h1>
                <p>{product.price} ETB</p>
                <p>{product.availableStock}</p>
                <p>{product.description}</p>
                <Button text="Home" />
                <Button text="Buy" />
            </div>
        </div>
    );
}

export default ProductDetail;