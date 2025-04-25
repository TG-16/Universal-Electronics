import { Button } from "./Components";
import logo from "../assets/whiteLogo.jpg";
import "./sidebarStyle.css";

function Sidebar  ({setActiveComponent})
{
    return (
        <div className="sidebarContainer">
            <img src={logo} alt="logo" />
            <h2>Admin</h2>
            <div className="adminButtons">
                <Button text="Products" onClick={() => setActiveComponent("Products")}/>
                <Button text="Orders" onClick={() => setActiveComponent("Orders")}/>
                <Button text="Add Item" onClick={() => setActiveComponent("Add Item")}/>
                <Button classname="logout" text="Log out" />
            </div>
        </div>
    );
}

export default Sidebar;