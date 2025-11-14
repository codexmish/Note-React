import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router";
import LatoutOne from "./layout/LatoutOne";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Bin from "./pages/Bin";

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LatoutOne />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bin" element={<Bin />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  );
};

export default App;
