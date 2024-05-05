import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard 
        key={233232}
        productId= "mackbook-pro-2021"
        name= "Macbook Pro"
        price={545545}
        stock={76776}
        handler={addToCartHandler}
        photo='https://m.media-amazon.com/images/I/61RJn0ofUsL._AC_SX522_.jpg'
        />
      </main>
    </div>
  );
};

export default Home;
