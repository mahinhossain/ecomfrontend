import React from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";
export default function CheckOut() {
  const cartForCheckout = useSelector((state) => state.Reducer.cartForCheckout);
  console.log(`cartForCheckout`, cartForCheckout);

  const { cart, loginInfo, totalprice } = cartForCheckout;
  console.log("cart loginInfo:>> ", cart, loginInfo);
  return (
    <div className="container">
      <div class="card ">
        <div class="card-body">
          <div class="row upper"></div>
          <div class="row">
            <div class="col-md-6">
              <div class="right border">
                <div class="header1">Order Summary</div>
                <p>Total {cart.length} items</p>
                {cart.map((item) => (
                  <div class="row item ">
                    <div class="col-4 align-self-center">
                      <img class="img-fluid" src={item.img} />
                    </div>
                    <div class="col-md-8">
                      <div class="row">
                        <b>{item.price}</b>
                      </div>
                      <div class="row text-muted">{item.name}</div>
                      <div class="row">{item.amount}</div>
                    </div>
                  </div>
                ))}
                <div class="row lower">
                  <div class="col text-left">Subtotal</div>
                  <div class="col text-right"></div>
                </div>
                <div class="row lower">
                  <div class="col text-left">Delivery</div>
                  <div class="col text-right">Free</div>
                </div>
                <div class="row lower">
                  <div class="col text-left">
                    <b>Total to pay</b>
                  </div>
                  <div class="col text-right">
                    <b>$ {cart.totalprice}</b>
                  </div>
                </div>
                <div class="row lower">
                  <div class="col text-left">
                    <a href="#">
                      <u>Add promo code</u>
                    </a>
                  </div>
                </div>{" "}
                <button class="btn1">Place order</button>
                <p class="text-muted text-center">
                  Complimentary Shipping & Returns
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="left border">
                <div class="row">
                  {" "}
                  <span class="header1">Payment</span>
                  <div class="icons">
                    {" "}
                    <img src="https://img.icons8.com/color/48/000000/visa.png" />
                    <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" />
                    <img src="https://img.icons8.com/color/48/000000/maestro.png" />{" "}
                  </div>
                </div>
                <form1>
                  {" "}
                  <span>Cardholder's name:</span>{" "}
                  <input placeholder={loginInfo.name} />{" "}
                  <span>Card Number:</span>{" "}
                  <input placeholder="0125 6780 4567 9909" />
                  <div class="row">
                    <div class="col-md-4">
                      <span>Expiry date:</span> <input placeholder="YY/MM" />{" "}
                    </div>
                    <div class="col-md-4">
                      <span>CVV:</span> <input id="cvv" />{" "}
                    </div>
                  </div>{" "}
                  <input type="checkbox" id="save_card" class="align-left" />{" "}
                  <label for="save_card">Save card details to wallet</label>
                </form1>
              </div>
            </div>
          </div>
        </div>
        <div> </div>
      </div>
    </div>
  );
}
