import { Topic, Input }  from "../../components/Components";
import "./adminHeaderStyle.css";
import { useState } from "react";

function AdminHeader ({activeComponent, onSearchResult})
{
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = async () => {
        if (!searchQuery.trim()) return;
    
        try {
          const response = await fetch(`http://localhost:5000/api/admin/search/${searchQuery}`);
          const data = await response.json();
    
          if (response.ok) {
            await onSearchResult(data); // send found product data to parent component
          } else {
            alert(data.error || "Product not found");
          }
        } catch (error) {
          alert("Error searching product");
          console.error(error);
        }
      };
    
      const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      };
    return (
        <div className="adminHeader">
            <Topic text={activeComponent} />
            <Input
                placeholder="Search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default AdminHeader;