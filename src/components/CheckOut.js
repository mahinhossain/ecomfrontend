import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PlaceOrder } from "../Redux/Action";
import "./Checkout.css";
export default function CheckOut() {
  const cartForCheckout = useSelector((state) => state.Reducer.cartForCheckout);
  const placeOrder = useSelector((state) => state.Reducer.placeOrder);

  const [shippingAdress, setshippingAdress] = useState({});

  console.log(`shippingAdress`, shippingAdress);
  const dispatch = useDispatch();
  const { cart, user, totalPrice, totalItem } = cartForCheckout;
  console.log(`cartForCheckout`, cartForCheckout);
  const handleAdress = (value, name) => {
    const copy = { ...shippingAdress };

    copy[name] = value;
    setshippingAdress(copy);
  };
  const shippingPrice = 50;
  const taxPrice = 12;
  const handlePlaceOrder = () => {
    const myobj = {
      orderItems: cart,
      totalPrice,
      user,
      shippingAdress,
      paymentMethod: "cash",
      taxPrice,
      shippingPrice,
      itemPrice: 12,
      totalItem,
    };
    console.log(`myobj`, myobj);
    dispatch(PlaceOrder(myobj));
  };
  console.log("placeOrder :>> ", placeOrder);
  return (
    <div className="container">
      <div class="row">
        <div class="col-md-6">
          <div class="right border p-0">
            <div class="header1">Order Summary</div>
            {cart.map((item) => (
              <div class=" d-flex justify-content-between align-content-center border-2 mb-3">
                <img class=" img-thumbnail text-center" src={item.img} />

                <p>${item.price}</p>

                <p class=" text-truncate"> {item.name}</p>
                <p class="">{item.amount}</p>
              </div>
            ))}
            <div class="row lower">
              <div class="col text-right"></div>
            </div>
          </div>
          <div class="bg-light border-bottom  w-50 p-2">
            <h6 className="text-danger border-bottom">
              {" "}
              Items Price <span className="float-right">
                {" "}
                ${totalPrice}
              </span>{" "}
            </h6>

            <h6 className=" border-bottom">
              Total Items
              <span className="float-right">$ {totalItem}</span>
            </h6>
            <h6 className=" border-bottom">
              {" "}
              Shipping <span className="float-right">
                {" "}
                $ {shippingPrice}
              </span>{" "}
            </h6>
            <h6 className=" border-bottom">
              Tax $ <span className="float-right"> $ {taxPrice}</span>{" "}
            </h6>
            <h6 className=" border-bottom">
              Total Price{" "}
              <span className="float-right">
                {" "}
                $ {totalPrice + shippingPrice + taxPrice}
              </span>{" "}
            </h6>
          </div>
        </div>
        <div class="col-md-6">
          <div class="left border">
            <div class="row">
              <span class="header1">Shipping Adress</span>
              <div class="icons  d-flex justify-between"></div>
            </div>
            <form1>
              <span>adress:</span>{" "}
              <input
                value={shippingAdress.adress}
                className="form-control"
                onChange={(e) => handleAdress(e.target.value, "adress")}
              />{" "}
              <span>City:</span>{" "}
              <input
                type="text"
                className="form-control"
                onChange={(e) => handleAdress(e.target.value, "city")}
                value={shippingAdress.city}
              />
              <span>Postral Code</span>{" "}
              <input
                type="number"
                className="form-control"
                onChange={(e) => handleAdress(e.target.value, "postalcode")}
                value={shippingAdress.postalcode}
              />
              <span>Country :</span>{" "}
              <input
                className="form-control"
                onChange={(e) => handleAdress(e.target.value, "country")}
                value={shippingAdress.country}
              />
              <div class="row p-0 m-0">
                <div class="col-md-4 p-0 m-0"></div>
                <div class="col-md-4"></div>
              </div>{" "}
              <input type="checkbox" id="save_card" class="align-left" />{" "}
              <label for="save_card">Save card details to wallet</label>
            </form1>
            <button class="btn1" onClick={() => handlePlaceOrder()}>
              Place Order
            </button>
          </div>
        </div>

        <div> </div>
      </div>
    </div>
  );
}
