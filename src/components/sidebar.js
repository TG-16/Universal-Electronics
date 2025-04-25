import { Button } from "./Components";
import logo from "../assets/whiteLogo.jpg";
import "./sidebarStyle.css";
import { useNavigate } from "react-router-dom";


function Sidebar  ({setActiveComponent})
{

    const navigator = useNavigate();
    // const handleSearchResult = (product) => {
    //     setDescription(product);
    //     setActiveComponent("productDetail");
    //   };

     const handleLogout = () => {
      fetch("http://localhost:5000/api/admin/logout")
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Logout successful") {
            navigator("/login");
          }
        })
        .catch((error) => {
          console.error("Error logging out:", error);
        });
    }

    return (
        <div className="sidebarContainer">
            <img src={logo} alt="logo" />
            <h2>Admin</h2>
            <div className="adminButtons">
                <Button text="Products" onClick={() => setActiveComponent("Products")}/>
                <Button text="Orders" onClick={() => setActiveComponent("Orders")}/>
                <Button text="Add Item" onClick={() => setActiveComponent("Add Item")}/>
                <Button classname="logout" text="Log out" onClick={handleLogout} />
            </div>
        </div>
    );
}

export default Sidebar;