import navStyle from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={navStyle.container}>
      <img
        alt="header-img"
        className={navStyle.img}
        src="/header-img.png"
        width="150"
        height="200"
      />
      <div className={navStyle.center}>
        <h1 className={navStyle.title}>Shopping Center</h1>
        <ul className={navStyle.links}>
          <li>
            <Link className={navStyle.link} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={navStyle.link} href="/category/smartphones">
              Phones
            </Link>
          </li>
          <li>
            <Link className={navStyle.link} href="/category/laptops">
              Laptops
            </Link>
          </li>
          <li>
            <Link className={navStyle.link} href="/category/home-decoration">
              Home Decorations
            </Link>
          </li>
          <li>
            <Link className={navStyle.link} href="/category/groceries">
              Groceries
            </Link>
          </li>
        </ul>
      </div>
      <img alt="nav-icon" src="/nav-icon.png" className={navStyle.icon} />
    </nav>
  );
};

export default Nav;
