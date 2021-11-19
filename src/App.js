import "./App.css";
import { CssBaseline } from "@nextui-org/react";
import Header from "./components/Header/Header";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";
import NotFound from "./components/CheckOut";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Test from "./Test";
import ProductDetails from "./components/Product/ProductDetails";
import Register from "./components/Registration";
import Profile from "./components/Profile";
function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/">
          <Shop />
        </Route>
        {/* 
        <PrivateRoute path="/checkout">
          <CheckOut />
        </PrivateRoute> */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/productDetails/:id">
          <ProductDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
