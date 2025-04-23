
import { Button, Input, Topic } from "../Components";
import "./adminProductDetailStyle.css";

function AdminProductDetail ({product})
{
    return (
            <div className="adminProductDetail">
                <div className="firstRow">
                    <img src="pro-400.png" alt={product.name} />
                    <div>
                        <span>Name: </span>
                        <Input type="text" placeholder={product.name} />
                        <span>Unit Price: </span>
                        <Input type="text" placeholder={product.price} />
                        <span>Available in stock: </span>
                        <Input type="text" placeholder={product.avaialble} />
                    </div>
                </div>
                
                <textarea className="description" placeholder={product.description} rows={7} cols={70} />
                
                <div className="detailButtons">
                    <Button classname="deleteButton" text="Delete" />
                    <Button text="Save" />
                </div>
            </div>
    );
}

export default AdminProductDetail;