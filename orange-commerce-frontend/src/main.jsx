import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Cart from "./components/Cart/cart";
import Signup from "./Pages/Admin/Auth/Signup/Signup";
import Login from "./Pages/Admin/Auth/Login/Login";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/admin_signup",
    element: <Signup />,
  },
  {
    path: "/admin_login",
    element: <Login />,
  },
  {
    path: "/admin_dashboard",
    element: <Dashboard />,
  },
  
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
