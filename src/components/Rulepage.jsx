import React from "react";
import { Link } from "react-router-dom";
import ButtonNumbly from "./ButtonNumbly";

const Rulepage = () => {
  return (
    <div className="bg-zinc-900 h-screen overflow-x-hidden lg:overflow-y-hidden">
      <div className="flex relative lg:justify-center p-8 lg:p-10">
        <h1 className=" text-teal-600 font-bold text-5xl">Numbly</h1>
      </div>
      <div className="flex justify-center ">
        <div className=" absolute lg:left-5 lg:top-5 top-9 right-5">
          <Link to="/">
            <ButtonNumbly btnname="Back" />
          </Link>
        </div>
        <div className="w-4/5 ">
          <h1 className="text-teal-600 text-2xl font-black">Objective:</h1>
          <p className="text-zinc-400 ml-5">
            - To guess a hidden five-digit number within five attempts, where
            each digit ranges from 0 to 9.
          </p>
          <h1 className="text-teal-600 text-2xl font-black">
            Rules and Gameplay:
          </h1>
          <h1 className="text-teal-600 text-xl font-bold ml-5">
            Input a Guess:
          </h1>
          <p className="text-zinc-400  ml-10">
            - Enter a five-digit number where each digit can be from 0 to 9.
          </p>
          <p className="text-zinc-400  ml-10">
            - Once all five digits are entered, click "Submit" to lock in your
            guess.
          </p>
          <h1 className="text-teal-600 text-xl font-bold  ml-5">
            Feedback on Each Guess:
          </h1>
          <p className="text-zinc-400  ml-10">
            After submitting a guess, each digit in your number will be checked
            against the hidden target number.
          </p>
          <h1 className="text-teal-600 font-3xl font-bold  ml-10">
            Color Indicators:
          </h1>
          <p className="text-zinc-400  ml-16">
            - <span className="text-emerald-600 font-medium">Green Block</span>:
            The digit is correct and in the correct position.
          </p>
          <p className="text-zinc-400  ml-16">
            - <span className="text-yellow-600 font-medium">Yellow Block</span>:
            The digit is correct but in the wrong position.
          </p>
          <p className="text-zinc-400  ml-16">
            - <span className="font-medium">No Color Change</span>: The digit is
            not in the target number.
          </p>
          <h1 className="text-teal-600 text-xl font-bold ml-5">
            Rounds and Winning Condition:
          </h1>
          <p className="text-zinc-400 font-medium  ml-10">
            - You have five rounds to guess the correct number.
          </p>
          <p className="text-zinc-400 font-medium  ml-10">
            - If you correctly guess the entire five-digit number (with all
            green blocks) within these five rounds, you win.
          </p>
          <p className="text-zinc-400 font-medium  ml-10">
            - If you cannot guess the number within five rounds, you lose.
          </p>
          <h1 className="text-teal-600 font-3xl font-bold  ml-10">
            Winning and Losing:
          </h1>
          <p className="text-zinc-400  ml-16">
            Win: Achieve a full match (all five digits correctly positioned) in
            under five rounds.
          </p>
          <p className="text-zinc-400  ml-16 mb-12">
            Lose: Fail to guess the correct number within five attempts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rulepage;
