import { Input, Button, Topic } from "../components/Components";
import logo from "../assets/universalLogo.png";
import { useState } from "react";
import {useNavigate} from "react-router-dom";


function Signup ()
{
    
    const navigator = useNavigate(); 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:5000/api/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                password,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Signup successful!");
                    navigator("/");
                } else {
                    console.error("Signup failed:");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }


    return (
        <div className="container">
            <div className="loginHeader">
                <img src={logo} alt="logo" />
                <Topic text="Create Your Account" />
            </div>

            <form className="loginForm" onSubmit={handleSubmit}>
                <Input placeholder="Name" type="text" required value={name} onChange={e => setName(e.target.value)} />
                <Input placeholder="Email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <Input placeholder="Phone number" type="text" required value={phone} onChange={e => setPhone(e.target.value)}/>
                <Input placeholder="Password" type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
                <Button text="Sign up" type="submit"  />
                <Button classname="signup" text="Login" />
            </form>
        </div>
    );
}

export default Signup;