import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import ProductList from "./components/ProductList/ProductList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route index element={<LandingPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
