import { Button, Topic } from "../components/Components";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Cart ()
{
    return (
        <div>
            <Header />

            <Topic text="Your Cart" />
            <table>
                <tr>
                    <th>Item</th>
                    <th>qty</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>Image</td>
                    <td>Solar lantern</td>
                    <td>10</td>
                    <td>4,000</td>
                    <td><Button text="X" /></td>
                </tr>
            </table>
            
            <div>
                <p>Subtotal: D40,000</p>
                <p>Tax(15%): D1500</p>
                <p>Grand Total: D41,500</p>
            </div>

            <div>
                <Button text="Home" />
                <Button text="Check out" />
            </div>

            <Footer />
        </div>
    );
}

export default Cart;