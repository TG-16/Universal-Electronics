import { Button, Input } from "./Components";
import logo from "../assets/universalLogo.png";
import "./headerStyle.css"

function Header ({loginButtonText})
{
    return(
        <div className="header">
            <img src={logo} alt="logo" />
            <Input placeholder="Search" type="text" />
            <Button text={loginButtonText} />
        </div>
    );
}

export default Header;