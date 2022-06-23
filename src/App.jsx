import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ProductList from "./pages/productList/ProductList";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Redirect,
  Route
} from "react-router-dom";

import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import Product from "./pages/product/Product";

const App = () => {

  const user = useSelector(state => state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products/:category">
          <ProductList />
        </Route>
        <Route exact path="/product/:id">
          <Product />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/login">
          {(user !== null) ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/register">
          {(user !== null) ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;