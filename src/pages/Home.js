import { Button, Topic } from "../components/Components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ProductDetail from "../components/ProductDetail";
import Cart from "../components/Cart";
import { useState, useEffect, act } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [description, setDescription] = useState({});
  const [activeComponent, setActiveComponent] = useState("home");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const temp = [];

  const handleSearchResult = (product) => {
    setDescription(product);
    setActiveComponent("productDetail");
  };

  const productDetail = (product) => {
    setDescription(product);
    setActiveComponent("productDetail");
  };

  const showCart = () => {
    setActiveComponent("cart");
  };

  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      fetch("http://localhost:5000/api/users/logout")
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Logout successful") {
            setIsLoggedIn(false);
          }
        })
        .catch((error) => {
          console.error("Error logging out:", error);
        });
    } else {
      navigate("/login");
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    fetch("http://192.168.66.141:5000/api/users/productList")
      .then((response) => response.json())
      .then((data) => {
        // if (JSON.stringify(data) !== JSON.stringify(products)) {
        //   setProducts(data);
        // }
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    fetch("http://localhost:5000/check-login", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoggedIn(data.message === "Authorized");
      })
      .catch((error) => {
        console.error("Error fetching login status:", error);
      });
  }, [activeComponent]);

  const loginButtonText = isLoggedIn ? "Log out" : "Log in";

  return (
    <div className="homeContainer">
      <Header
        loginButtonText={loginButtonText}
        onLoginLogout={handleLoginLogout}
        onSearchResult={handleSearchResult}
      />

      <div className="productList">
        {activeComponent === "home" &&
          (products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                product={product}
                key={product._id}
                showDetails={productDetail}
                setCart={setCart}
              />
            ))
          ) : (
            <Topic text="No products available" />
          ))}

        {activeComponent === "productDetail" && (
          <ProductDetail
            product={description}
            setCart={setCart}
            setActiveComponent={setActiveComponent}
          />
        )}

        {activeComponent === "cart" && (
          <Cart
            cart={cart}
            setCart={setCart}
            onRemove={handleRemove}
            setActiveComponent={setActiveComponent}
          />
        )}

        {activeComponent !== "cart" && (
          <Button
            classname="cartButton"
            onClick={showCart}
            text={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                height="24"
                width="24"
                fill="white"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
            }
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
