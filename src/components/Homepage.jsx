import React, { useState } from "react";
import ButtonNumbly from "./ButtonNumbly";
import Maingame from "./Maingame";
import Rulepage from "./Rulepage";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="bg-zinc-900 h-screen overflow-x-hidden overflow-y-hidden">
      <div className="flex relative justify-center p-10">
        <h1 className=" text-teal-600 font-bold text-5xl">Numbly</h1>
      </div>

      <div className="flex justify-center gap-20">
        <Link to="/game">
          <ButtonNumbly btnname="Start" />
        </Link>
        <Link to="/rules">
          <ButtonNumbly btnname="Rules" />
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
