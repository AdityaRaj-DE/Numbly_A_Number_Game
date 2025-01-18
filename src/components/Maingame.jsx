import React, { useState, useEffect } from "react";
import ButtonNumbly from "./ButtonNumbly";
import InputValue from "./InputValue";
import InputDummy from "./InputDummy";
import { Link } from "react-router-dom";

const Maingame = () => {
  const [loss, setLoss] = useState(0);
  const [guesstime, setGuesstime] = useState(1);
  const [onof, setonof] = useState(0);
  const [init, setInit] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  });
  const [dummyall, setDummyall] = useState({
    1: { 1: ["", "", "", "", ""], 2: ["", "", "", "", ""] },
    2: { 1: ["", "", "", "", ""], 2: ["", "", "", "", ""] },
    3: { 1: ["", "", "", "", ""], 2: ["", "", "", "", ""] },
    4: { 1: ["", "", "", "", ""], 2: ["", "", "", "", ""] },
    5: { 1: ["", "", "", "", ""], 2: ["", "", "", "", ""] },
  });
  const [winner, setWinner] = useState(0);
  const [number, setNumber] = useState([0, 0, 0, 0, 0]);
  const [guess, setGuess] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
    setNumber(arr);
  }, []);

  const handleInput = (value, idx) => {
    setInit((prev) => ({
      ...prev,
      [idx]: value,
    }));
    setGuess(value);
    // alert(guess.length);
    if (guess.length === 4) {
      setonof(1);
    } else {
      setonof(0);
    }
  };

  const onSubmit = () => {
    let correctCount = 0;
    const result = { 1: [...guess], 2: [0, 0, 0, 0, 0] };

    for (let i = 0; i < 5; i++) {
      //  alert(typeof number[i] +" "+ typeof guess[i]);

      if (number[i] === Number(guess[i])) {
        // alert(i + " " + number[i]);
        correctCount++;
        result[2][i] += 1; // 1 indicates correct number in the correct position
      }
    }

    // Second loop: Check for correct numbers in the wrong positions
    for (let i = 0; i < 5; i++) {
      if (result[2][i] !== 1 && number.includes(Number(guess[i]))) {
        result[2][i] += 2; // 2 indicates correct number in the wrong position
      }
    }
    // alert(result[2]  + " " + result[1] + " " + number);

    setDummyall((prev) => ({
      ...prev,
      [guesstime]: result,
    }));

    if (correctCount === 5) {
      setWinner(1);
    }
    setGuesstime((prev) => prev + 1);
    if (guesstime >= 5) {
      setLoss(1);
    }
    setonof(0);
  };

  return (
    <div className="bg-zinc-900 h-screen overflow-x-hidden overflow-y-hidden">
      <div className="flex relative lg:justify-center p-8 lg:p-10">
        <h1 className=" text-teal-600 font-bold text-5xl">Numbly</h1>
      </div>
      <div className="flex lg:flex-row flex-col lg:justify-center">
        <div>
          <div className=" absolute lg:left-5 lg:top-5 top-9 right-5">
            <Link to="/">
              <ButtonNumbly btnname="Back" />
            </Link>
          </div>
          {[1, 2, 3, 4, 5].map((step) =>
            guesstime === step && winner !== -1 ? (
              <InputValue
                key={step}
                nextvalue={(value) => handleInput(value, step)}
              />
            ) : (
              <InputDummy key={step} dummyValue={dummyall[step]} />
            )
          )}
        </div>

        <div className="flex justify-center items-center lg:m-5">
          {onof === 1 ? (
            winner === 1 ? (
              <h1 className="text-teal-600 text-5xl font-bold">You win</h1>
            ) : loss === 1 && winner === 0 ? (
              <h1 className="text-teal-600 text-5xl font-bold">You lose</h1>
            ) : (
              <ButtonNumbly btnname="Submit" work={onSubmit} />
            )
          ) : winner === 1 ? (
            <div>
              <h1 className="text-teal-600 text-5xl font-bold m-4">You win</h1>
              <div className="lg:ml-8 flex justify-center ">
                <Link to="/game" onClick={() => window.location.reload()}>
                  <ButtonNumbly btnname="Restart" />
                </Link>
              </div>
            </div>
          ) : loss === 1 && winner === 0 ? (
            <h1 className="text-teal-600 text-5xl font-bold">You lose</h1>
          ) : (
            <button className="text-gray-600 py-5 px-10 font-bold text-lg rounded-lg border-4 border-gray-600 ">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Maingame;
