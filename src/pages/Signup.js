import { Input, Button, Topic } from "../components/Components";
import logo from "../assets/universalLogo.png";

function Signup ()
{
    return (
        <div className="container">
            <div className="loginHeader">
                <img src={logo} alt="logo" />
                <Topic text="Create Your Account" />
            </div>

            <form className="loginForm">
                <Input placeholder="Name" type="text" />
                <Input placeholder="Email" type="text" />
                <Input placeholder="Phone number" type="text" />
                <Input placeholder="Password" type="password" />
                <Button text="Sign up" />
                <Button classname="signup" text="Login" />
            </form>
        </div>
    );
}

export default Signup;