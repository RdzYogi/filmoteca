import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import React from "react";

const Protected = ({children}) => {
  const user = useSelector(state => state.userManager.currentUser.logged_in);
  let location = useLocation();

  if (!user) {
    return (<Navigate to="/sign_in" state={{ from: location}} replace />)
  }
  return children;
}

export default Protected;
