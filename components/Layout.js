import style from "../styles/Layout.module.css";
import Nav from "./Nav";
import Link from "next/link";
import { useContext } from "react";
import ProductContex from "./Context";
import Meta from "./Meta";

const Layout = ({ children }) => {
  const { basket } = useContext(ProductContex);

  return (
    <>
      <Meta />
      <Nav />
      {basket.length > 0 ? (
        <button className={style.button}>
          <Link className={style.link} href="/basket">
            Go Basket <h3 className={style.num}>{basket.length}</h3>
          </Link>
        </button>
      ) : (
        ""
      )}

      <div className={style.main}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
