import { Button, Topic } from "./Components";
import "./cartStyle.css";

function Cart ()
{
    return (
        <div className="cart">
            <Topic text="Your Cart" />
            <table cellSpacing={0}>
                <tr>
                    <th colSpan={2}>Item</th>
                    <th>qty</th>
                    <th colSpan={2}>Total</th>
                </tr>
                <tr>
                    <td><img src="pro-400.png" alt="solar lantern" /></td>
                    <td className="itemName">Solar lantern</td>
                    <td>10</td>
                    <td>4,000</td>
                    <td><Button classname="cancle" text="X" /></td>
                </tr>
                <tr>
                    <td><img src="pro-400.png" alt="solar lantern" /></td>
                    <td className="itemName">Solar lantern</td>
                    <td>10</td>
                    <td>4,000</td>
                    <td><Button classname="cancle" text="X" /></td>
                </tr>
                <tr>
                    <td><img src="pro-400.png" alt="solar lantern" /></td>
                    <td className="itemName">Solar lantern</td>
                    <td>10</td>
                    <td>4,000</td>
                    <td><Button classname="cancle" text="X" /></td>
                </tr>
                <tr>
                    <td><img src="pro-400.png" alt="solar lantern" /></td>
                    <td className="itemName">Solar lantern</td>
                    <td>10</td>
                    <td>4,000</td>
                    <td><Button classname="cancle" text="X" /></td>
                </tr>
                <tr>
                    <td><img src="pro-400.png" alt="solar lantern" /></td>
                    <td className="itemName">Solar lantern</td>
                    <td>10</td>
                    <td>4,000</td>
                    <td><Button classname="cancle" text="X" /></td>
                </tr>
            </table>
            
            <div className="subTotal">
                <p>Subtotal: D40,000</p>
                <p>Tax(15%): D1500</p>
                <p className="totalPrice">Grand Total: D41,500</p>
            </div>

            <div className="detailButtons">
                <Button classname="homeButton" text="Home" />
                <Button text="Check out" />
            </div>
        </div>
    );
}

export default Cart;