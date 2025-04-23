import { Button } from "../components/Components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ProductDetail from "../components/ProductDetail";
import Cart from "../components/Cart";

function Home ()
{
    const product = {
        name: "Solar Lantern",
        price: 1200,
      }
    const detail = {
        name: "Solar Lantern",
        price: 1200,
        description: "This is the descriptio jjhfkjsdhf fjdhfkj dsfksdhf sdfksdhf ksdfkjdshfh dsfklsdh fsdhf ksdfkjkdshf dsfkjshdfk sdfksdhf sdfkskjdfhdskj ffksdjhfsd fsdkjkfhsdkf sdkfjhdsf sdfjhsdkfjhd ssdofhdskl sdkfhdkshfsdfhsdfsdk fsdhfds fsdhf dsfdshfods fdsfhds fksdhfds fsdjhfsd fsdfhsodfh dsfsdhf sdfdshf dsfshdfoiisdh fdsfhdso fdshfds fdsfhsdfhdso fsdhfdso fsdofhdsohf sdfds fdshf sdfodshf dsfdshf dsfosdihfods fdsfhds fn ",
        availableStock: 200
      }
    return (
        <div className="homeContainer">
            <Header />
            <div className="productList">
                {/* <ProductCard product={product} />
                <ProductCard product={product} />
                <ProductCard product={product} />
                <ProductCard product={product} />
                <ProductCard product={product} />
                <ProductCard product={product} />
                <ProductCard product={product} />
                <ProductCard product={product} />
                <ProductCard product={product} />
                <Button classname="cartButton" text={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="24" width="24" fill="white"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>} /> */}


                {/* <ProductDetail product={detail}/> */}

                <Cart />
            </div>
            <Footer />
        </div>
    );
}

export default Home;