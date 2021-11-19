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
  const totalPrice = cart.reduce(
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
    totalPrice,
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
          <div className="col-md-9 border-right  ">
            {" "}
            <h2 className=" text-center ">Your Cart</h2>
            <div>
              {" "}
              {cart.map((item, index) => (
                <div className="row bg-light border-bottom mb-5  border">
                  <div className="col-md-2 p-0 m-0 ">
                    <img src={item.img} alt="" className="img-fluid " />
                  </div>

                  <div className="col-md-8 row border-0  ">
                    <div className="col-md-6 d-flex  flex-column justify-content-between  ">
                      {" "}
                      <div className="text-truncate">{item.name}</div>
                      <div className="text-bold fw-bold">
                        Seller:{item.brand}
                      </div>
                      <div className="text-bold fw-bold text-danger">
                        Price:${Math.floor(item.price)}
                      </div>
                      <button
                        className="  btn-warning btn-sm   "
                        onClick={() => handleRemoveCrat(item)}
                      >
                        {" "}
                        Remove from cart
                      </button>
                    </div>
                    <div className="col-md-6 d-flex  flex-column justify-content-between   ">
                      <button
                        disabled={item.quantity <= 1}
                        className=" btn-danger btn-sm  w-25"
                        onClick={() => handleDecrase(item)}
                      >
                        -
                      </button>
                      <h5>
                        {" "}
                        {item.quantity} x ${Math.round(item.price)}= $
                        {Math.round(item.price * item.quantity)}
                      </h5>
                      <h5>
                        Items Price:${Math.round(item.price) * item.quantity}
                      </h5>
                      <button
                        className=" btn-success btn-sm w-25"
                        onClick={() => handleIncrase(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            {" "}
            <h3 className="text-warning">Total Price:{totalPrice}</h3>
            <h3 className="text-warning">Total Item:{totalItem}</h3>
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
