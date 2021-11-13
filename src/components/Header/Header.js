import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import "./Header.css";
import { Avatar, Grid } from "@nextui-org/react";
import Swal from "sweetalert2";
import { logout, searchText } from "../../Redux/Action";
export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setuser] = useState("");
  console.log("user1 :>> ", user);
  const loginInfo = useSelector((state) => state.Reducer.userLoginInfo);
  const userInfoReg = useSelector((state) => state.Reducer.userRegInfo);

  const cartItem = useSelector((state) => state.Reducer.cartItemAdded);
  const logout1 = useSelector((state) => state.Reducer.logout);
  console.log("user2 :>> ", user);
  useEffect(() => {
    const locauser = localStorage.getItem("userloged");
    if (locauser) {
      let data = JSON.parse(locauser);

      setuser(data);
    }
  }, [loginInfo, userInfoReg]);

  const handleLogout = () => {
    dispatch(logout());
    // localStorage.removeItem("userloged");
    console.log("user3 :>> ", user);
    setuser("");
    history.push("/login");
  };
  const gotoprofile = () => {
    // dispatch(logout());
    // // localStorage.removeItem("userloged");
    // console.log("user3 :>> ", user);
    // setuser("");
    history.push("/profile");
  };
  console.log("user ", user);
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark  p-0 m-0">
        {/* <Grid>
          <Avatar src={loginInfo.img} size="large" />
        </Grid> */}
        {user ? (
          <div class="dropdown p-2">
            <button
              class=" dropdown-toggle nav-item bg-dark text-white"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {user.name}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button
                class="dropdown-item nav-item"
                type="button"
                onClick={() => handleLogout()}
              >
                Logout
              </button>
              <button
                class="dropdown-item nav-item bg-dark-gray"
                type="button"
                onClick={() => gotoprofile()}
              >
                Profile
              </button>
            </div>
          </div>
        ) : null}

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse p-0 " id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto ">
            <li class="nav-item  ">
              <Link to="/" />
            </li>
            <li class="nav-item">
              <Link to="/shop">Shop</Link>
            </li>
            <li class="nav-item ">
              <Link to="/cart">
                Cart{" "}
                <span className=" badge-danger badge-pill ">
                  {cartItem.length}
                </span>{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/test">Other</Link>
            </li>

            {!user ? (
              <li class="nav-item">
                <Link to="/login">Login</Link>
              </li>
            ) : null}

            {/* <li class="nav-item">
              <Link className="nav-item" to="/login">
                {loginInfo.isSignIn ? (
                  <div
                    className=""
                    onClick={() =>
                      Swal.fire("succcess", "success", "success", "timer:300")
                    }
                  >
                    Logout
                  </div>
                ) : (
                  <div className="nav-item">Login</div>
                )}
              </Link>
            </li> */}
          </ul>
          <form class="form-inline my-lg-0 nav-item">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => dispatch(searchText(e.target.value))}
            />
          </form>
        </div>
      </nav>{" "}
    </div>
  );
}
