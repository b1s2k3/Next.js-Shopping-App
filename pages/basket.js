import { useContext, useState } from "react";
import ProductContex from "../components/Context";
import basketStyle from "../styles/Basket.module.css";
import Link from "next/link";

const Basket = () => {
  const { basket, setBasket } = useContext(ProductContex);

  const removeProduct = (key) => {
    const newList = basket.filter((item) => item.key !== key);
    setBasket(newList);
  };

  const grossBill = () => {
    let bill = 0;
    for (let i in basket) {
      bill += basket[i].newItem.price;
    }
    return bill;
  };

  const calculateBill = () => {
    let bill = 0;
    basket;
    for (let i in basket) {
      const discounted =
        (basket[i].newItem.price *
          (10000 - basket[i].newItem.discountPercentage * 100)) /
        10000;
      bill += discounted;
    }
    return Math.floor(bill);
  };

  const removeAll = () => {
    return setBasket([]);
  };

  return (
    <div className={basketStyle.container}>
      {basket.map((item) => {
        return (
          <div className={basketStyle.items}>
            <img className={basketStyle.img} src={item.newItem.thumbnail} />
            <div className={basketStyle.info}>
              <Link
                className={basketStyle.title}
                href="/product/[id]"
                as={`/product/${item.newItem.id}`}
              >
                <h1>{item.newItem.title}</h1>
              </Link>
              <h2>
                <b>Price: {item.newItem.price}$</b>
              </h2>
            </div>
            <button
              className={basketStyle.button}
              onClick={() => removeProduct(item.key)}
            >
              <img src="/bin.png" />
            </button>
          </div>
        );
      })}
      {basket.length > 0 ? (
        <>
          <button className={basketStyle.remove} onClick={removeAll}>
            Remove All
          </button>
          <div className={basketStyle.bill}>
            <h1>Total Price:</h1>
            <h2 className={basketStyle.gross}>{grossBill()}$</h2>
            <h2>{calculateBill()}$</h2>
            <button className={basketStyle.submit}>Submit Basket</button>
          </div>
        </>
      ) : (
        <h1 className={basketStyle.empty}>
          There is no product in your basket
        </h1>
      )}
    </div>
  );
};

export default Basket;
