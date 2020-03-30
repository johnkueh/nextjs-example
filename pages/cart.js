import Main from "../layouts/main";
import { useCart } from "../hooks/useCart";

const CartPage = () => {
  const { items, removeItem, total } = useCart();

  return (
    <Main>
      <h1>Cart</h1>
      {items.map(item => (
        <div>
          <div>{item.name}</div>
          <div>${item.price}</div>
          <div>
            <button
              style={{ marginBottom: "1rem" }}
              onClick={e => {
                e.preventDefault();
                removeItem(item);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      {items.length === 0 && <div>No items added</div>}
    </Main>
  );
};

export default CartPage;
