import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/Cartcontext.jsx";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Categories from "./components/Categories.jsx";
import BestSelling from "./components/bestSelling.jsx";

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
        <Route path="/" element={ <> <Hero /> <Categories /> <BestSelling/> </> }/>
          <Route path="/products" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer/>
      </CartProvider>
    </Router>
  );
}

export default App;
