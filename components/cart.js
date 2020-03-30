import Link from "next/link";
import { useCart } from "../hooks/useCart";

const Cart = ({ children }) => {
  const { items, total } = useCart();
  return (
    <div>
      <div>
        <strong>Cart</strong>
      </div>
      <div>
        Items: {items.length} / Total: ${total}
      </div>
      <Link href="/cart">
        <a>Checkout</a>
      </Link>
    </div>
  );
};

export default Cart;
