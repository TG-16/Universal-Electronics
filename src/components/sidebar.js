import { Button } from "./Components";
import logo from "../assets/whiteLogo.jpg";
import "./sidebarStyle.css";

function Sidebar  ()
{
    return (
        <div className="sidebarContainer">
            <img src={logo} alt="logo" />
            <h2>Admin</h2>
            <div className="adminButtons">
                <Button text="Products" />
                <Button text="Orders" />
                <Button text="Add Item" />
                <Button classname="logout" text="Log out" />
            </div>
        </div>
    );
}

export default Sidebar;