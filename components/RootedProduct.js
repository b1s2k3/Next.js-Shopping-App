import { useContext } from "react";
import rootedProductStyle from "../styles/RootedProduct.module.css";
import ProductContex from "./Context";
import Meta from "./Meta";

const RootedProduct = ({ product }) => {
  const { addBasket } = useContext(ProductContex);

  const createKey = () => {
    return Math.floor(Math.random() * 1000);
  };
  const key = createKey();

  return (
    <>
      <Meta
        title={product.title}
        description={product.description}
        keywords={product.category}
      />
      <div className={rootedProductStyle.outer}>
        <div className={rootedProductStyle.container}>
          <div className={rootedProductStyle.leftpart}>
            <img className={rootedProductStyle.img} src={product.thumbnail} />
            <h1>{product.title}</h1>
          </div>
          <div className={rootedProductStyle.rightpart}>
            <h1>{product.description}</h1>
            <div>
              <h3>Seller: {product.brand}</h3>
              <h3>Rating: {product.rating}</h3>
            </div>
            <div className={rootedProductStyle.pricing}>
              <h3 className={rootedProductStyle.price}>
                Price: {product.price}$
              </h3>
              <h2 className={rootedProductStyle.discount}>
                <b>Discount: %{product.discountPercentage}</b>
              </h2>
            </div>
          </div>
        </div>
        <button
          onClick={() => addBasket(product, key)}
          className={rootedProductStyle.button}
        >
          Add to Basket
        </button>
      </div>
    </>
  );
};

export default RootedProduct;
