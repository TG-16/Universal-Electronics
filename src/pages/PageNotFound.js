import { Button, Topic } from "../components/Components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PageNotFound ()
{
    const navigator = useNavigate();
    const handleLogin = () => {
        navigator("/login");
    }
    return (
        <div className="homeContainer">
            <Header loginButtonText="Log in" onLoginLogout={handleLogin}/>
            <div className="productList">
                <Topic text="404 Page not found" />
                <Link to="/"><Button text=" Go Back Home" /></Link>
            </div>
            <Footer />
        </div>
    );
}

export default PageNotFound;