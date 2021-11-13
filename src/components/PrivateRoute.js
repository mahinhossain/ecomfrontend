// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect, Route } from "react-router-dom";

// export default function PrivateRoute({ children, ...rest }) {
//   // const loginInfo = useSelector((state) => state.Reducer.userLoginInfo);
//   // console.log("loginInfo pr :>> ", loginInfo);
//   // const [states, setstate] = useState(loginInfo);
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         states.isSignIn ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// }
