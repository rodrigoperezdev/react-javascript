import React from "react";
import { Route, Routes } from "react-router-dom";
import { ReactCalculator } from "../pages/ReactCalculator";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ReactCalculator />} />
      <Route path="/react-calculator" element={<ReactCalculator />} />
    </Routes>
  );
};
