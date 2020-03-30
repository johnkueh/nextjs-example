import Link from "next/link";
import Cart from "../components/cart";

const MainLayout = ({ children }) => (
  <div>
    <div
      style={{
        width: "30rem",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <nav
        style={{
          width: "10rem",
          justifyContent: "space-between",
          display: "flex"
        }}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/cart">
          <a>Cart</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <Cart />
    </div>
    {children}
  </div>
);

export default MainLayout;
