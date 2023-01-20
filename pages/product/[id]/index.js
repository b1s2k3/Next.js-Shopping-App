import RootedProduct from "../../../components/RootedProduct";

const product = ({ product }) => {
  return (
    <>
      <RootedProduct product={product} />
    </>
  );
};

export default product;

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `https://dummyjson.com/products/${context.params.id}`
  );
  const product = await response.json();
  return {
    props: {
      product,
    },
  };
};
