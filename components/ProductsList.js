import productsStyle from "../styles/Products.module.css";
import SingleProduct from "./SingleProduct";

const ProductList = ({ products }) => {
  return (
    <div className={productsStyle.container}>
      {products.products.map((product) => (
        <SingleProduct product={product} />
      ))}
    </div>
  );
};

export default ProductList;
