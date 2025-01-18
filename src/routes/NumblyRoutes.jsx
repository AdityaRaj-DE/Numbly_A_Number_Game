import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maingame from "../components/Maingame";
import Homepage from "../components/Homepage";
import Rulepage from "../components/Rulepage";
const NumblyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/game" element={<Maingame />} />
        <Route path="/rules" element={<Rulepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NumblyRoutes;
