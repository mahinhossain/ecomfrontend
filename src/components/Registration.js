import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import {
  BrowserRouter as Router,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegistration } from "../Redux/Action";
import Swal from "sweetalert2";

export default function Login() {
  const dispatch = useDispatch();
  let location = useLocation();
  const history = useHistory();
  const userInfoReg = useSelector((state) => state.Reducer.userRegInfo);
  console.log("userInfoReg  top :>> ", userInfoReg);
  const errr = useSelector((state) => state.Reducer.err);
  const user = JSON.parse(localStorage.getItem("userloged"));

  const redirect = history.search ? location.search.split("=")[1] : "/";
  const [reginfo, setReginfo] = useState({
    email: "",
    password: "",
    name: "",
    confirmpassword: "",
  });

  // user input
  const userInputLogin = (value, name) => {
    let stateData = { ...reginfo };
    stateData[name] = value;

    setReginfo(stateData);
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    if (reginfo.password != reginfo.confirmpassword) {
      alert("password not match");
      return false;
    }

    dispatch(userRegistration(reginfo));
  };
  console.log("userInfoReg  end :>> ", userInfoReg);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userloged"));
    console.log("user :>> ", user);
    if (user) {
      history.push(redirect);
    }
  }, [userInfoReg]);

  // const [state, setstate] = useState({
  //   isSignIn: false,
  //   name: "",
  //   email: "",
  //   img: "",
  //   password: "",
  // });

  // let { from } = location.state || { from: { pathname: "/" } };

  // login data recv

  const success = (response) => {
    const { name, email, imageUrl } = response.profileObj;
    console.log("object :>> ", response.profileObj);
    // const SignInUser = {
    //   isSignIn: true,
    //   name: name,
    //   email: email,
    //   img: imageUrl,
    // };
    // setstate(SignInUser);
    // dispatch(userLogin(SignInUser));
  };

  const fail = (response) => {
    Swal.fire("error", "", "error");
  };
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
          <label for="exampleInputEmail1">Name</label>
          <input
            required
            type="name"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="name"
            onChange={(e) => userInputLogin(e.target.value, "name")}
            value={reginfo.name}
          />
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            required
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => userInputLogin(e.target.value, "email")}
            value={reginfo.email}
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
            value={reginfo.password}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            onChange={(e) => userInputLogin(e.target.value, "confirmpassword")}
            value={reginfo.confirmpassword}
          />
        </div>
        {errr ? (
          <div class="alert alert-danger" role="alert">
            {errr}
          </div>
        ) : null}
        <div className="d-flex flex-row  justify-content-around">
          {" "}
          <button
            class=" rounded  btn-outline-success font-bold btn btn-secondary p-2  "
            onClick={(e) => submitRegistration(e)}
          >
            Register
          </button>{" "}
          <GoogleLogin
            className="ml-3 rounded btn-sm btn text-capitalize text-success "
            clientId="361697230440-c93vesn28pho26m4hjsrskm983c26ks3.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={success}
            onFailure={fail}
            cookiePolicy={"single_host_origin"}
          />
          <Link class="font-bold btn btn-secondary float-end " to="/login">
            {" "}
            Go to Login
          </Link>
        </div>
      </form>
      {}
    </div>
  );
}
