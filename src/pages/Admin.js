import AdminHeader from "../components/adminComponents/AdminHeader";
import AdminContaint from "../components/adminComponents/AdminContaint";
import Sidebar from "../components/sidebar";

function Admin() 
{
    return (
        <div className="admin">
            <Sidebar />
            <div className="adminContainer">
                <AdminHeader adminButton="Orders" />
                <AdminContaint />
            </div>
        </div>
    )
}

export default Admin;