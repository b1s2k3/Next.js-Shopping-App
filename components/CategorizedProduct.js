import SingleProduct from "./SingleProduct";
import style from "../styles/Categorized.module.css";
import Meta from "./Meta";

const CategorizedProduct = ({ category }) => {
  const title = category.products.map((item) => item.category);
  return (
    <>
      <Meta title={title[0]} />
      <div className={style.container}>
        {category.products.map((item) => (
          <SingleProduct product={item} />
        ))}
      </div>
    </>
  );
};

export default CategorizedProduct;
