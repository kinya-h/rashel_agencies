import { Route, redirect, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";

// const PrivateRoute = ({ children, ...rest }) => {
//   const ac = false;
//   let { access } = useContext(UserContext);
//   return !ac ? redirect("/login") : children;
//   // if (!user) {
//   //   return <Navigate to="/landing" replace />;
//   // }

//   // return children;
// };

const PrivateRoute = ({ children }) => {
  const ac = false;
  let { access } = useContext(UserContext);
  if (!access) {
    return <Navigate to="/login" />;
  }

  return children;
};
export default PrivateRoute;
