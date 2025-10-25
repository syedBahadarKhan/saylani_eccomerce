import { useCart } from "../context/Cartcontext.jsx";
import CartItem from "../components/Cartitem.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, changeQty, totalItems, totalPrice } = useCart();

  if (cart.length === 0)
    return <div className="p-6 text-center">Your cart is empty.</div>;

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeFromCart}
              onChangeQty={changeQty}
            />
          ))}
        </div>
        <aside className="w-full md:w-80 border p-4 rounded">
          <div>Total Items: {totalItems}</div>
          <div className="font-semibold mt-2">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <Link
            to="/checkout"
            className="block mt-4 bg-green-600 text-white text-center py-2 rounded"
          >
            Proceed to Checkout
          </Link>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
