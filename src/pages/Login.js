import { Input, Button, Topic } from "../components/Components";
import logo from "../assets/universalLogo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login ()
{
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const navigator = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:5000/api/users/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                phone,
                password,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Login successful!");
                    // Redirect to home page or perform any other action
                    navigator("/");
                } else {
                    fetch("http://localhost:5000/api/admin/login", {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            phone,
                            password,
                        }),
                    })
                    .then((response) => {
                        if (response.ok) {
                            console.log("Login successful!");
                            navigator("/admin");
                        } else {
                            console.error("Login failed:");
                        }
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
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
                <Topic text="Welcome Back" />
            </div>
    
            <form className="loginForm" onSubmit={handleSubmit}>
                <Input placeholder="Phone number" type="text" value={phone} onChange={e => {setPhone(e.target.value)}} />
                <Input placeholder="Password" type="password" value={password} onChange={e => {setPassword(e.target.value)}}/>
                <Button text="Login" type="submit" />
                <Button classname="signup" text="Sign up" />
            </form>
        </div>
    );
}

export default Login;