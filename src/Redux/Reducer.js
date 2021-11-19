import * as Types from "./Types";
import Swal from "sweetalert2";

const local = JSON.parse(localStorage.getItem("cart"));
const initializitState = {
  products: [],
  product: {},
  err: "",
  logout: "",
  cartItemAdded: local ? local : [],
  // userLoginInfo: {
  //   isSignIn: false,
  //   name: "",
  //   email: "",
  //   img: "",
  // },
  userLoginInfo: "",

  cartForCheckout: "",
  searchText: "",
  userRegInfo: "",
  profile: "",
  loading: true,
};

function CounterReducer(state = initializitState, action) {
  switch (action.type) {
    case Types.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
      break;
    case Types.GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
      break;
    // added
    case Types.CART_ITEM_ADDED:
      const item = action.payload;

      const cart = [...state.cartItemAdded, item];
      Swal.fire({
        position: " center",
        icon: "success",
        title: " Added to Cart",
        showConfirmButton: false,
        timer: 1100,
      });
      const exists = state.cartItemAdded.find((same) => same._id == item._id);

      if (exists) {
        Swal.fire({
          position: " center",
          icon: "error",
          title: "Already Added to Cart",
          showConfirmButton: false,
          timer: 1100,
        });
        return {
          ...state,
          cartItemAdded: state.cartItemAdded.map((it) =>
            it._id == exists._id ? item : it
          ),
        };
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        ...state,
        cartItemAdded: cart,
      };
      break;
    case Types.CART_ITEM_REMOVE:
      const item11 = action.payload;

      const cartremv = state.cartItemAdded.filter(
        (item1) => item1._id !== item11._id
      );
      localStorage.setItem("cart", JSON.stringify(cartremv));

      return {
        ...state,
        cartItemAdded: cartremv,
      };
      break;
    case Types.USER_LOGIN:
      return {
        ...state,
        userLoginInfo: action.payload,
      };
      break;
    case Types.USER_REGISTRATION:
      return {
        ...state,
        userRegInfo: action.payload,
      };
      break;
    case Types.ERROR:
      return {
        ...state,
        err: action.payload,
      };
      break;
    case Types.LOGOUT:
      return {
        ...state,
        logout: action.payload,
      };
      break;
    case Types.GET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
      break;
    case Types.SEARCH_TEXT:
      return {
        ...state,

        searchText: action.payload,
      };
      break;
    case Types.CART_FOR_CHECKOUT:
      return {
        ...state,
        cartForCheckout: action.payload,
      };
      break;
    case Types.PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
      break;

    default:
      break;
  }
  return state;
}
export default CounterReducer;
