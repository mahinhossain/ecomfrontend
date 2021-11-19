import axios from "axios";
import * as Types from "./Types";
import Swal from "sweetalert2";
import swal from "sweetalert";

// const baseUrl = "http://localhost:5000";
const baseUrl = "https://protected-badlands-43308.herokuapp.com";
export const getProducts = () => async (dispatch) => {
  let products = [];
  let loading = true;
  await axios
    .get(`${baseUrl}/api/products`)
    .then((res) => {
      products = res.data;
      loading = false;
      dispatch({ type: Types.GET_LOADING, payload: loading });
    })
    .catch((err) => console.log("err :>> ", err));
  dispatch({ type: Types.GET_PRODUCTS, payload: products });
};
let product = [];
export const getProduct = (id) => async (dispatch) => {
  await axios
    .get(`${baseUrl}/api/products/${id}`)
    .then((res) => {
      product = res.data;
    })
    .catch((err) => console.log("err :>> ", err));

  dispatch({ type: Types.GET_PRODUCT, payload: product });
};

export const CartItemAdded = (item) => async (dispatch) => {
  item.quantity = 1;
  dispatch({ type: Types.CART_ITEM_ADDED, payload: item });
};
export const CartItemRemove = (index) => async (dispatch) => {
  dispatch({ type: Types.CART_ITEM_REMOVE, payload: index });
};
// export const userLogin = (data) => async (dispatch) => {

//   dispatch({ type: Types.USER_LOGIN, payload: data });
// };
export const userLogin = (info) => async (dispatch) => {
  let data;
  const con = { headers: { "Content-Type": "application/json" } };
  await axios
    .post(`${baseUrl}/api/user/login`, info, con)
    .then((res) => {
      data = res.data;
      localStorage.setItem("userloged", JSON.stringify(data));
    })
    .catch((error) => {
      dispatch({ type: Types.ERROR, payload: "Invalid UserName or Password" });
    });
  console.log("data :>> ", data);
  dispatch({ type: Types.USER_LOGIN, payload: data });
};

export const userRegistration = (info) => async (dispatch) => {
  let data;
  const con = { headers: { "Content-Type": "application/json" } };
  await axios
    .post(`${baseUrl}/api/user/`, info, con)
    .then((res) => {
      data = res.data;

      if (data && data == "User already Exists")
        Swal.fire({
          position: " center",
          icon: "error",
          title: " User already Exists",
          showConfirmButton: false,
          timer: 1100,
        });

      if (data._id) {
        Swal.fire({
          position: " center",
          icon: "success",
          title: " Success",
          showConfirmButton: false,
          timer: 1100,
        });
        localStorage.setItem("userloged", JSON.stringify(data));

        dispatch({ type: Types.USER_REGISTRATION, payload: data });
      }
    })
    .catch((error) => {
      dispatch({ type: Types.ERROR, payload: "Faild" });
    });
};

export const cartToCheckout = (data) => async (dispatch) => {
  dispatch({ type: Types.CART_FOR_CHECKOUT, payload: data });
};
export const searchText = (data) => async (dispatch) => {
  dispatch({ type: Types.SEARCH_TEXT, payload: data });
};
export const logout = () => async (dispatch) => {
  localStorage.removeItem("userloged");

  dispatch({ type: Types.LOGOUT, payload: "Logout Success" });
};
export const Profile = () => async (dispatch) => {
  dispatch({ type: Types.PROFILE, payload: "Logout Success" });
};
export const PlaceOrder = (info) => async (dispatch) => {
  let { token } = JSON.parse(localStorage.getItem("userloged"));

  console.log(`token`, token);

  let data;
  const con = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  await axios
    .post(`${baseUrl}/api/orders`, info, con)
    .then((res) => {
      data = res.data;
      console.log(`data order`, data);

      Swal.fire({
        position: " center",
        icon: "success",
        title: " Success",
        showConfirmButton: false,
        timer: 1100,
      });
    })
    .catch((error) => {
      dispatch({ type: Types.ERROR, payload: "Error" });
    });
  console.log("data :>> ", data);

  dispatch({ type: Types.PLACE_ORDER, payload: data });
};
