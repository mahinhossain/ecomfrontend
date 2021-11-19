import React from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";
export default function CheckOut() {
  const cartForCheckout = useSelector((state) => state.Reducer.cartForCheckout);

  const { cart, user, totalprice, totalItem } = cartForCheckout;

  const handlePlaceOrder = () => {
    const myobj = {
      orderItems: cart,
      totalprice,
      user,

      shippingAdress: {
        adress: "sdsadas",
        city: "sdsfsdf",
        postalcode: "skjdish",
        country: "dkjkjsas",
      },
      paymentMethod: "cash",
      taxPrice: 1212,
      shippingPrice: 2312,
      itemPrice: 12,
    };
    console.log(`myobj`, myobj);
  };
  return (
    <div className="container">
      <div class="row">
        <div class="col-md-6">
          <div class="right border">
            <div class="header1">Order Summary</div>
            {cart.map((item) => (
              <div class=" d-flex justify-content-around align-content-center border-2">
                <img class=" img-thumbnail text-center" src={item.img} />

                <p>${item.price}</p>

                <p class=" text-truncate">{item.name}</p>
                <p class="">{item.amount}</p>
              </div>
            ))}
            <div class="row lower">
              <div class="col text-right"></div>
            </div>
            <div class="row lower"></div>
            <div class="row lower">
              <div class="col text-left"></div>
              <div class="text-danger fw-bold d-flex justify-between">
                <p>Total Price ${totalprice}</p>
                <p>Total {cart.length} items</p>
              </div>
            </div>
            <div class="row lower"></div>{" "}
          </div>
        </div>
        <div class="col-md-6">
          <div class="left border">
            <div class="row">
              <span class="header1">Payment</span>
              <div class="icons  d-flex justify-between">
                <img src="https://img.icons8.com/color/48/000000/visa.png" />
                <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" />
                <img src="https://img.icons8.com/color/48/000000/maestro.png" />{" "}
              </div>
            </div>
            <form1>
              <span>Cardholder's name:</span> <input placeholder={user.name} />{" "}
              <span>Card Number:</span>{" "}
              <input placeholder="0125 6780 4567 9909" />
              <div class="row p-0 m-0">
                <div class="col-md-4 p-0 m-0">
                  <span>Expiry date:</span> <input placeholder="YY/MM" />{" "}
                </div>
                <div class="col-md-4">
                  <span>CVV:</span> <input id="cvv" />{" "}
                </div>
              </div>{" "}
              <input type="checkbox" id="save_card" class="align-left" />{" "}
              <label for="save_card">Save card details to wallet</label>
            </form1>
            <button class="btn1" onClick={() => handlePlaceOrder()}>
              Place order
            </button>
          </div>
        </div>

        <div> </div>
      </div>
    </div>
  );
}
