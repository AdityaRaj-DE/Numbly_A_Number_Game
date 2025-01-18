import React, { useEffect, useState } from "react";

const InputDummy = ({ dummyValue }) => {
  const [guess, setGuess] = useState({
    1: ["", "", "", "", ""],
    2: ["", "", "", "", ""],
  });

  useEffect(() => {
    setGuess(dummyValue);
  }, [dummyValue]); // Update guess whenever dummyValue changes

  return (
    <div>
      <div className="flex justify-center m-5">
        {guess[1].map((data, index) =>
          guess[2][index] === 1 ? (
            <div
              className="w-14 h-14 border-[3px] mx-2 text-2xl rounded-lg text-center border-emerald-500 flex py-3 align-middle justify-center text-white font-bold bg-emerald-600"
              key={index}
            >
              {data}
            </div>
          ) : guess[2][index] === 2 ? (
            <div
              className="w-14 h-14 border-[3px] mx-2 text-2xl rounded-lg text-center border-yellow-300 flex py-3 align-middle justify-center text-white font-bold bg-yellow-400"
              key={index}
            >
              {data}
            </div>
          ) : (
            <div
              className="w-14 h-14 border-[3px] mx-2 text-2xl font-medium rounded-lg text-center border-gray-600 py-3 text-bold text-gray-600 bg-transparent"
              key={index}
            >
              {data}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default InputDummy;
