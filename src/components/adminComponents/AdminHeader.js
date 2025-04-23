const { Topic, Input } = require("../Components");
import "./adminHeaderStyle.css";

function AdminHeader ({adminButton})
{
    return (
        <div className="adminHeader">
            <Topic text={adminButton} />
            <Input placeholder="Search" type="search" />
        </div>
    );
}

export default AdminHeader;