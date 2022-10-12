import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Option from "../Option/Option";

const Question = ({ questionData }) => {
    const { id, correctAnswer, options, question } = questionData;
    
  return (
    <div className="border border-1 mb-12 p-5 rounded-md">
      <div className="flex justify-between items-center">
        <h4 className="text-2xl">
          <strong>Question: </strong>
          {question.slice(3, -4)}
        </h4>
        <FontAwesomeIcon className="ml-3" icon={faEyeSlash}></FontAwesomeIcon>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
        {options.map((option) => (
          <Option
            correctAnswer={correctAnswer}
                option={option}
                optionsData={options}
            id={id}
          ></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
