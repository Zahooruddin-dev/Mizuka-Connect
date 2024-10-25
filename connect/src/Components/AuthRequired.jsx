import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getAuth,onAuthStateChanged } from "firebase/auth";
// This is the Firebase AuthRequired component
export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem('loggedin'); // Check if user is logged in (you can also replace this with Firebase auth if needed)
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ message: 'You must log in first', from: location.pathname }}
        replace
      />
    );
  }

  return <Outlet />
}