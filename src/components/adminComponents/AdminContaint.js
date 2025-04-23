import { Button } from "../Components";
import pro from "../../assets/pro-400.png"
import "./adminContaintStyle.css";
import AdminProductDetail from "./adminProductDetail";
import AddItem from "./AddItem";

function AdminContaint () 
{

    const product ={
        name: "Pro 400",
        qty: 10,
        price: 40000,
        status: "pending",
        avaialble: 20,
        description: "Descriptio: panel=> 10w battery => 7.5Ah lamp => 1 other => This is the description of this solar about this solar a brief explanation"
    }
    const buyer = "Gebeyaw Mekonnen"
    return (
        <div className="adminContaint">
            {/* <table className="orderTable">
                <tr>
                    <th colSpan={2}>Product</th>
                    <th>Buyer</th>
                    <th>qty</th>
                    <th>price</th>
                    <th>status</th>
                </tr>

                <tr>
                    <td><img src={pro} alt={product.name} /></td>
                    <td>{product.name}</td>
                    <td>{buyer}</td>
                    <td>{product.qty}</td>
                    <td>{product.price}</td>
                    <td><Button text={product.status} classname={product.status} /></td>
                </tr>

                <tr>
                    <td><img src={pro} alt={product.name} /></td>
                    <td>{product.name}</td>
                    <td>{buyer}</td>
                    <td>{product.qty}</td>
                    <td>{product.price}</td>
                    <td><Button text={product.status} classname={product.status} /></td>
                </tr>

                <tr>
                    <td><img src={pro} alt={product.name} /></td>
                    <td>{product.name}</td>
                    <td>{buyer}</td>
                    <td>{product.qty}</td>
                    <td>{product.price}</td>
                    <td><Button text={product.status} classname={product.status} /></td>
                </tr>

                
            </table> */}

            {/* <table className="orderTable">
                <tr>
                    <th colSpan={2}>Product</th>
                    <th>Available stock</th>
                    <th>Unit price</th>
                </tr>

                <tr>
                    <td><img src={pro} alt={product.name} /></td>
                    <td>{product.name}</td>
                    <td>{product.qty}</td>
                    <td>{product.price}</td>
                </tr>

                <tr>
                    <td><img src={pro} alt={product.name} /></td>
                    <td>{product.name}</td>
                    <td>{product.qty}</td>
                    <td>{product.price}</td>
                </tr>

                <tr>
                    <td><img src={pro} alt={product.name} /></td>
                    <td>{product.name}</td>
                    <td>{product.qty}</td>
                    <td>{product.price}</td>
                </tr>

                
            </table> */}

            {/* <AdminProductDetail product={product} /> */}

            <AddItem />
        </div>
    );
}

export default  AdminContaint;