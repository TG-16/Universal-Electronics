import { Button, Input } from "./Components";
import logo from "../assets/universalLogo.png";

function Header ()
{
    return(
        <div className="header">
            <img src={logo} alt="logo" />
            <Input placeholder="Search" type="text" />
            <Button text="Login" />
        </div>
    );
}

export default Header;