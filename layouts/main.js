import Link from "next/link";

const Main = ({ children }) => (
  <div>
    <nav
      style={{
        justifyContent: "space-between",
        display: "flex",
        width: "10rem"
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
    {children}
  </div>
);

export default Main;
