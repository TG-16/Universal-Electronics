import { Input, Button, Topic } from "../components/Components";
import logo from "../assets/universalLogo.png";

function Login ()
{
    return (
        <div className="container">
            <div className="loginHeader">
                <img src={logo} alt="logo" />
                <Topic text="Welcome Back" />
            </div>
    
            <form className="loginForm">
                <Input placeholder="Phoone number" type="text" />
                <Input placeholder="Password" type="password" />
                <Button text="Login" />
                <Button classname="signup" text="Sign up" />
            </form>
        </div>
    );
}

export default Login;