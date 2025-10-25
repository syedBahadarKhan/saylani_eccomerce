import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/Cartcontext.jsx";

const Home = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [price, setPrice] = useState(1000);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        setMaxPrice(Math.ceil(Math.max(...data.map((p) => p.price))));
        setPrice(Math.ceil(Math.max(...data.map((p) => p.price))));
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setFiltered(products.filter((p) => p.price <= price));
  }, [price, products]);

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <label>
          Max Price: ${price}
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="ml-3 w-60"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </div>
    </main>
  );
};

export default Home;
