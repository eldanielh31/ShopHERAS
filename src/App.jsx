import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Register from "./pages/Register"

import {
  BrowserRouter as Router,
  Redirect,
  Route,
} from "react-router-dom";

import { Switch } from "react-router-dom";
import Product from "./pages/Product";
import { useSelector } from "react-redux";

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
          {user? <Redirect to="/"/> : <Login/>}
          <Login/>
        </Route>
        <Route exact path="/register">
          {user? <Redirect to="/"/> : <Login/>}
          <Register/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;