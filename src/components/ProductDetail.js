import { Button, Topic } from "./Components";
import "./productDetailStyle.css";

function ProductDetail ({product ,setCart, setActiveComponent})
{
    const goHome = () => {
        setActiveComponent("home");
    }

    return (
            <div className="product-detail">
                <img src={`http://localhost:5000${product.image}`} alt={product.name}/>
                <Topic text={product.name} />
                <p>{product.price} ETB</p>
                <p>Available {product.stock}</p>
                <p>{product.description}</p>
                <div className="detailButtons">
                    <Button classname="homeButton" text="Home" onClick={goHome}/>
                        <Button
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
                          />
  
                </div>
            </div>
    );
}

export default ProductDetail;