import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import Login from "./Components/Login";

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index path="/" element={<Home />} />
              <Route index path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
  );
}