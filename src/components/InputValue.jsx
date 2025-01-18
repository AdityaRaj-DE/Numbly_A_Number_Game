import React, { useState } from "react";

const InputValue = ({ nextvalue }) => {
  const [arr, setArr] = useState([]);
  const [guess, setGuess] = useState(new Array(5).fill(""));

  const handleChange1 = (element, index) => {
    const value = element.value;

    if (!value || (value >= 0 && value <= 9)) {
      const newGuess = [...guess];
      newGuess[index] = value;
      setGuess(newGuess);

      const updatedArr = [...arr];
      updatedArr[index] = value;
      setArr(updatedArr.join(""));
      nextvalue(newGuess.join(""));

      if (index < 4 && value) {
        element.nextSibling.focus();
      }
    }
  };

  const handleBackspace1 = (element, index) => {
    const newGuess = [...guess];
    newGuess[index] = "";
    setGuess(newGuess);

    const updatedArr = [...arr];
    updatedArr.pop;
    setArr(updatedArr.join(""));
    nextvalue(newGuess.join(""));

    if (index > 0 && !element.value) {
      element.previousSibling.focus();
    }
  };

  return (
    <div>
      <div className="flex justify-center m-5">
        {guess.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={data}
            className="lg:w-14 w-12 h-14 border-[3px] mx-2 text-2xl text-medium rounded-lg text-center border-gray-400 text-gray-600 bg-transparent"
            onChange={(e) => handleChange1(e.target, index)}
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                handleBackspace1(e.target, index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InputValue;
