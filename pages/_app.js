import "../styles/globals.css";
import Layout from "../components/Layout";
import { useState } from "react";
import ProductContex from "../components/Context";

export default function App({ Component, pageProps }) {
  const [basket, setBasket] = useState([]);
  const addBasket = (newItem, key) => {
    const list = [
      ...basket,
      {
        newItem,
        key,
      },
    ];
    setBasket(list);
  };

  return (
    <>
      <ProductContex.Provider value={{ basket, setBasket, addBasket }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProductContex.Provider>
    </>
  );
}
