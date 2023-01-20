import Head from "next/head";
import ProductList from "../components/ProductsList";

export default function Home({ products }) {
  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`https://dummyjson.com/products`);
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
};
