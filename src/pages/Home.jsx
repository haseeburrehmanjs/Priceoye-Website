import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Arrival from "./arrival";
import ShopNow from "./ShopNow";
import YoungFav from "./YoungFav";
import DownloadApp from "./DownloadApp";
import JoinShopping from "./JoinShopping";
import Footer from "./Footer";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://dummyjson.com/products'
        );
        setProducts(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Hero />
      <Arrival productsData={products}/>
      <ShopNow />
      <YoungFav />
      <DownloadApp />
      <JoinShopping />
      <Footer />
    </div>
  );
};

export default Home;
