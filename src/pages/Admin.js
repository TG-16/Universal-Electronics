import AdminHeader from "../components/adminComponents/AdminHeader";
import AdminContaint from "../components/adminComponents/AdminContaint";
import Sidebar from "../components/sidebar";
import { useState } from "react";

function Admin() 
{
    const handleSearchResult = (product) => {
        setDescription(product);
        setActiveComponent("Product Detail");
      };
    const [activeComponent, setActiveComponent] = useState("Add Item");
    const [description, setDescription] = useState({});
    return (
        <div className="admin">
            <Sidebar setActiveComponent={setActiveComponent} />
            <div className="adminContainer">
                <AdminHeader activeComponent={activeComponent} onSearchResult={handleSearchResult}/>
                <AdminContaint activeComponent={activeComponent} setActiveComponent={setActiveComponent} description={description} setDescription={setDescription}/>
            </div>
        </div>
    )
}

export default Admin;