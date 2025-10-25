import { useCart } from "../context/Cartcontext.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      alert("Please fill in all required fields!");
      return;
    }
    alert("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <form onSubmit={handleSubmit} className="flex-1 border p-4 rounded">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
          <input
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
          <div className="grid grid-cols-2 gap-2 mb-2">
            <input
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="border p-2"
            />
            <input
              name="zip"
              placeholder="ZIP"
              value={form.zip}
              onChange={handleChange}
              className="border p-2"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Place Order
          </button>
        </form>

        <aside className="w-full md:w-80 border p-4 rounded">
          <h3 className="font-semibold mb-2">Order Summary</h3>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span>{item.title.slice(0, 15)}...</span>
              <span>
                {item.qty} x ${item.price}
              </span>
            </div>
          ))}
          <div className="font-semibold mt-3">Total: ${totalPrice.toFixed(2)}</div>
        </aside>
      </div>
    </main>
  );
};

export default Checkout;
