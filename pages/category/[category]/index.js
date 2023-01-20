import CategorizedProduct from "../../../components/CategorizedProduct";

const category = ({ category }) => {
  const a = category.products.map((item) => console.log(item.category));
  console.log(a);
  return (
    <div>
      <CategorizedProduct category={category} />
    </div>
  );
};

export default category;

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `https://dummyjson.com/products/category/${context.params.category}`
  );
  const category = await response.json();
  return {
    props: {
      category,
    },
  };
};
