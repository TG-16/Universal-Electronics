import { Topic, Input }  from "../../components/Components";
import "./adminHeaderStyle.css";

function AdminHeader ({activeComponent})
{
    return (
        <div className="adminHeader">
            <Topic text={activeComponent} />
            <Input placeholder="Search" type="search" />
        </div>
    );
}

export default AdminHeader;