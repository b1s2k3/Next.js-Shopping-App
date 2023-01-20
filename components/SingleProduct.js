import productsStyle from "../styles/Products.module.css";
import Link from "next/link";

const SingleProduct = ({ product }) => {
  return (
    <Link
      href="/product/[id]"
      as={`/product/${product.id}`}
      className={productsStyle.card}
      style={{ textDecoration: "none" }}
    >
      <h3>{product.title}</h3>
      <img className={productsStyle.img} src={product.thumbnail} />
      <h1>{product.price}$</h1>
    </Link>
  );
};

export default SingleProduct;
