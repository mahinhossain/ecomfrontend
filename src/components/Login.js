import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import {
  BrowserRouter as Router,
  useHistory,
  useLocation,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/Action";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Login() {
  const dispatch = useDispatch();
  let location = useLocation();
  const history = useHistory();
  const userInfoLogin = useSelector((state) => state.Reducer.userLoginInfo);
  const errr = useSelector((state) => state.Reducer.err);

  const redirect = history.search ? location.search.split("=")[1] : "/";
  const [logininfo, setlogininfo] = useState({
    email: "",
    password: "",
  });
  const user = JSON.parse(localStorage.getItem("userloged"));
  console.log("user :>> ", user);
  // user input
  useEffect(() => {
    if (user) {
      history.push(redirect);
    }
  }, [userInfoLogin, logininfo]);
  const userInputLogin = (value, name) => {
    let stateData = { ...logininfo };
    stateData[name] = value;

    setlogininfo(stateData);
  };

  const submitLogin = (e) => {
    e.preventDefault();

    dispatch(userLogin(logininfo));
  };

  // const [state, setstate] = useState({
  //   isSignIn: false,
  //   name: "",
  //   email: "",
  //   img: "",
  //   password: "",
  // });

  // let { from } = location.state || { from: { pathname: "/" } };

  // login data recv

  // const success = (response) => {
  //   history.replace(from);
  //   const { name, email, imageUrl } = response.profileObj;
  //   const SignInUser = {
  //     isSignIn: true,
  //     name: name,
  //     email: email,
  //     img: imageUrl,\
  //   };
  //   setstate(SignInUser);
  //   dispatch(userLogin(SignInUser));
  // };

  // const fail = (response) => {
  //   Swal.fire("error", "", "error");
  // };
  // const logout = (response) => {
  //   const SignInUser = {
  //     isSignIn: false,
  //     name: "",
  //     email: "",
  //     img: "",
  //   };
  //   setstate(SignInUser);
  //   Swal.fire("success", "", "success");
  // };

  // const logoutFrom = () => (
  //   <GoogleLogout
  //     clientId="361697230440-c93vesn28pho26m4hjsrskm983c26ks3.apps.googleusercontent.com"
  //     buttonText="Logout"
  //     onLogoutSuccess={logout}
  //   ></GoogleLogout>
  // );
  // submitLogin
  return (
    <div className=" d-flex  justify-content-center ">
      {" "}
      <form className=" form-control-sm  col-md-6  ">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => userInputLogin(e.target.value, "email")}
            value={logininfo.email}
          />
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            onChange={(e) => userInputLogin(e.target.value, "password")}
            value={logininfo.password}
          />
        </div>

        {/* <GoogleLogin
          className="ml-3 rounded btn-sm btn text-capitalize text-success "
          clientId="361697230440-c93vesn28pho26m4hjsrskm983c26ks3.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={success}
          onFailure={fail}
          cookiePolicy={"single_host_origin"}
          
        /> */}
        {errr ? (
          <div class="alert alert-danger" role="alert">
            {errr}
          </div>
        ) : null}
        <button
          class="btn btn-success rounded btn-sm"
          onClick={(e) => submitLogin(e)}
        >
          Login
        </button>
        {
          <Link
            class="font-bold btn btn-secondary p-2 float-end"
            to="/register"
          >
            {" "}
            Go to Register
          </Link>
        }
      </form>
    </div>
  );
}
