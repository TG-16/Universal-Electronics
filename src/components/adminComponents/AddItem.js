import { Input, Button } from "../Components";
import "./addItemStyle.css";

function AddItem ()
{
    return (
        <div className="add-item">
            <div className="add-item-form">
                <label htmlFor="item-name">Item Name:</label>
                <Input type="text" id="item-name" placeholder="Enter item name" />
                
                <label htmlFor="item-price">Item Price:</label>
                <Input type="number" id="item-price" placeholder="Enter item price" />

                <label htmlFor="item-price">Item qty:</label>
                <Input type="number" id="item-price" placeholder="Enter item qty" />
                
                <label htmlFor="item-description">Item Description:</label>
                <textarea id="item-description" rows={6} cols={50} placeholder="Enter item description"></textarea>

                <label htmlFor="item-image">Upload Image:</label>
                <Input type="file" id="item-image" accept="image/*" />
                
                <Button text="Add Item" />
            </div>
        </div>
    );
}

export default  AddItem;