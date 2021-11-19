import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  cartToCheckout,
  CartItemRemove,
  CartItemAdded,
} from "../../Redux/Action";

export default function Cart() {
  const dispatch = useDispatch();
  const loginInfo = useSelector((state) => state.Reducer.userLoginInfo);
  console.log("loginInfo :>> ", loginInfo);
  const cartItem = useSelector((state) => state.Reducer.cartItemAdded);
  const user = JSON.parse(localStorage.getItem("userloged"));

  const [cart, setcart] = useState(cartItem);
  useEffect(() => {
    setcart(cartItem);
    // dispatch(CartItemAdded(cart));
  }, [dispatch, cartItem]);
  const handleRemoveCrat = (index) => {
    dispatch(CartItemRemove(index));
  };
  // increase
  const handleDecrase = (item) => {
    let tempCart = cart

      .map((aa) => {
        if (aa._id == item._id) {
          return { ...aa, quantity: aa.quantity - 1 };
        }
        return aa;
      })
      .filter((aa) => aa.quantity !== 0);

    setcart(tempCart);
  };

  // increrse
  const handleIncrase = (item) => {
    let tempCart = cart.map((aa) => {
      if (aa._id == item._id) {
        return { ...aa, quantity: aa.quantity + 1 };
      }
      return aa;
    });

    setcart(tempCart);
  };

  // const handlecheck = () => {
  //   console.log(`cart in checkout`, cart, totalprice);
  // };
  // price
  const totalprice = cart.reduce(
    (total, producr) => total + Math.round(producr.price) * producr.quantity,
    0
  );
  // total item
  const totalItem = cart.reduce(
    (total, producr) => total + Math.round(producr.quantity),
    0
  );
  // const [checkout, setcheckout] = useState([
  //   ...cart,
  //   (cart.totalprice = totalprice),
  // ]);
  const checkoutData = {
    cart,
    user,
    totalItem,
    totalprice,
  };
  const history = useHistory();
  const handleCheckOut = () => {
    dispatch(cartToCheckout(checkoutData));
    user ? history.push("/checkout") : history.push("/login");
    // history.push("/checkout");
  };

  // useEffect(() => {}, []);

  return (
    <div className="container">
      {cart.length ? (
        <div className=" row">
          {" "}
          <div className="col-md-8 border-right  ">
            {" "}
            <h2 className="px-2 pt-2 pb-3 space-y-1 text-center ">Your Cart</h2>
            <div>
              {" "}
              {cart.map((item, index) => (
                <div className="row border-bottom p-1">
                  <div className="col-md-4 ">
                    <img src={item.img} alt="" className="  img-fluid " />
                  </div>

                  <div className="col-md-8 row border-bottom p-0">
                    <div className="col-md-6 ">
                      {" "}
                      <div className="text-truncate">{item.name}</div>
                      <div>By:{item.seller}</div>
                      <div>Price:{Math.floor(item.price)}</div>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleRemoveCrat(item)}
                      >
                        {" "}
                        Remove from cart
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button
                        disabled={item.quantity <= 1}
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDecrase(item)}
                      >
                        -
                      </button>
                      <h3>
                        {" "}
                        {item.quantity} x ${Math.round(item.price)}= $
                        {Math.round(item.price * item.quantity)}
                      </h3>
                      <btn
                        className="btn btn-success btn-sm"
                        onClick={() => handleIncrase(item)}
                      >
                        +
                      </btn>
                      <h4>
                        Items Price:${Math.round(item.price) * item.quantity}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            {" "}
            <h2 className="text-warning">Total Price:{totalprice}</h2>
            <h2 className="text-warning">Total Item:{totalItem}</h2>
            <button
              className="btn btn-success"
              onClick={() => handleCheckOut()}
            >
              Chekout
            </button>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <h1 className="text-center ">Empty Cart</h1>
        </div>
      )}
    </div>
  );
}
