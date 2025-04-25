import { useState } from "react";
import { Button, Input } from "./Components";
import logo from "../assets/universalLogo.png";
import "./headerStyle.css";

function Header({ loginButtonText, onLoginLogout, onSearchResult }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    try {
      const response = await fetch(`http://localhost:5000/api/users/search/${searchQuery}`);
      const data = await response.json();

      if (response.ok) {
        onSearchResult(data); // send found product data to parent component
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
    <div className="header">
      <img src={logo} alt="logo" />
      <Input
        placeholder="Search"
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {/* <Button text="🔍" onClick={handleSearch} /> */}
      <Button text={loginButtonText} onClick={onLoginLogout} style={loginButtonText === "Log out" ? {backgroundColor: "#D32F2F", color: "white"} : {}} />
    </div>
  );
}

export default Header;
