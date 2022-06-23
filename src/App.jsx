import Home from "./pages/home/Home";
import ProductList from "./pages/productList/ProductList";
import Cart from "./pages/cart/Cart"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"

import {
  BrowserRouter as Router,
  //Redirect,
  Route,
} from "react-router-dom";

import { Switch } from "react-router-dom";
import Product from "./pages/product/Product";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  const user = useSelector(state=> state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/products/:category">
          <ProductList/>
        </Route>
        <Route exact path="/product/:id">
          <Product/>
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
        <Route exact path="/login">
          {(user !== null) ? <Redirect to="/" /> : <Login />}
          {/* <Login/> */}
        </Route>
        <Route exact path="/register">
          <Register/> 
        </Route>
      </Switch>
    </Router>
  );
};

export default App;