import React, { useEffect, useState } from "react";
import './Option.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ option, id, correctAnswer, optionsData }) => {
    const [answer, setAnswer] = useState(false);

    const handleAnswer = (e) => {
        const value = e.target.innerText
        const isEqual = value.toLowerCase() === correctAnswer.toLowerCase();
        setAnswer(isEqual)
    }
    let message;
    if (answer) {
        message = toast("Success!");
    } else {
        message = toast("Wrong!")
    }

  return (
    <div className="border-2 shadow-md p-2.5 rounded-md hover:bg-slate-200">
      <input
        onClick={handleAnswer}
        className="mr-2 font-medium"
        type="radio"
        name={id}
        id={option}
      />
      <label className="font-medium capitalize" htmlFor={option}>
        {option}
      </label>
    </div>
  );
};

export default Option;
