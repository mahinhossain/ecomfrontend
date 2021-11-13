import React, { useEffect, useState } from "react";

export default function Profile() {
  const [profile, setprofile] = useState(
    JSON.parse(localStorage.getItem("userloged"))
  );
  //   useEffect(() => {
  //     console.log(
  //       'JSON.parse(localStorage.getItem("userloged")) :>> ',
  //       JSON.parse(localStorage.getItem("userloged"))
  //     );
  //     setprofile(JSON.parse(localStorage.getItem("userloged")));
  //   }, [profile]);
  console.log("profile :>> ", profile);
  return (
    <div>
      <form className=" form-control-sm  col-md-6  ">
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            required
            type="name"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="name"
            // onChange={(e) => userInputLogin(e.target.value, "name")}
            value={profile.name}
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
            // onChange={(e) => userInputLogin(e.target.value, "email")}
            value={profile.email}
          />
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            // onChange={(e) => userInputLogin(e.target.value, "password")}
            value={profile.password}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            // onChange={(e) => userInputLogin(e.target.value, "confirmpassword")}
            value={profile.confirmpassword}
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
        {/* {errr ? (
          <div class="alert alert-danger" role="alert">
            {errr}
          </div>
        ) : null}
        <button
          class=" rounded  btn-outline-success font-bold btn btn-secondary p-2  "
          onClick={(e) => submitRegistration(e)}
        >
          Register
        </button>{" "} */}
        {/* <Link class="font-bold btn btn-secondary float-end " to="/login">
          {" "}
          Go to Login
        </Link> */}
      </form>
    </div>
  );
}
