import { Button, Topic } from "../components/Components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ProductDetail from "../components/ProductDetail";
import Cart from "../components/Cart";
import { useState, useEffect } from "react";

function Home ()
{
    const detail = {
        name: "Solar Lantern",
        price: 1200,
        description: "This is the descriptio jjhfkjsdhf fjdhfkj dsfksdhf sdfksdhf ksdfkjdshfh dsfklsdh fsdhf ksdfkjkdshf dsfkjshdfk sdfksdhf sdfkskjdfhdskj ffksdjhfsd fsdkjkfhsdkf sdkfjhdsf sdfjhsdkfjhd ssdofhdskl sdkfhdkshfsdfhsdfsdk fsdhfds fsdhf dsfdshfods fdsfhds fksdhfds fsdjhfsd fsdfhsodfh dsfsdhf sdfdshf dsfshdfoiisdh fdsfhdso fdshfds fdsfhsdfhdso fsdhfdso fsdofhdsohf sdfds fdshf sdfodshf dsfdshf dsfosdihfods fdsfhds fn ",
        availableStock: 200
      }

      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [products, setProducts] = useState([]);
      const [description, setDescription] = useState({});
      const [activeComponent, setActiveComponent] = useState("home");
      let loginButtonText = "";

      const productDetail = (product) => {
        console.log("Product detail show function clicked:");
        setActiveComponent("productDetail");
        setDescription(product);
        console.log("Product detail:", description);
      }

    useEffect(() => {
        fetch("http://localhost:5000/api/users/productList")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                console.log("Products fetched:", products);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

      isLoggedIn ? loginButtonText = "Log out": loginButtonText = "Log in" 
      

    return (
        <div className="homeContainer">
            <Header loginButtonText={loginButtonText}/>
            <div className="productList">

                {activeComponent === "home" && (products.length>0 ?  products.map(product => {
                    return (
                        <ProductCard product={product} key={product._id} showDetails={productDetail} />
                    );
                }) : <Topic text="No products available" />)} 

                {activeComponent === "productDetail" && <ProductDetail product={description} />}
                {activeComponent === "cart" && <Cart />}
                
                <Button classname="cartButton" text={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="24" width="24" fill="white"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>} />


                {/* <ProductDetail product={detail}/> */}

                {/* <Cart /> */}
            </div>
            <Footer />
        </div>
    );
}

export default Home;