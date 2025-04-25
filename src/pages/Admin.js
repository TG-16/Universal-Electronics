import AdminHeader from "../components/adminComponents/AdminHeader";
import AdminContaint from "../components/adminComponents/AdminContaint";
import Sidebar from "../components/sidebar";
import { useState } from "react";

function Admin() 
{
    const [activeComponent, setActiveComponent] = useState("Add Item");
    return (
        <div className="admin">
            <Sidebar setActiveComponent={setActiveComponent} />
            <div className="adminContainer">
                <AdminHeader activeComponent={activeComponent} />
                <AdminContaint activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
            </div>
        </div>
    )
}

export default Admin;