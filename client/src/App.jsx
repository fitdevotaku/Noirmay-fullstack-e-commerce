import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SingleProduct from "./pages/SingleProduct";
import ShoppingCart from "./pages/ShoppingCart";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductPage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/success" element={<Success />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <RegisterPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
