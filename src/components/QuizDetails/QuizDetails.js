import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const QuizDetails = () => {
  const quizDetails = useLoaderData();
  const { id, name, logo, questions, total } = quizDetails.data;

  return (
    <div className="m-11">
      <div>
        <h2 className="text-md md:text-3xl font-semibold w-2/6 mx-auto text-center bg-slate-500 py-1 px-2 rounded-lg">
                  <span className="text-yellow-300 ">{name}</span> Quiz Tests
        </h2>
      </div>
        <div className="w-7/12 mx-auto mt-8">
              {
                  questions.map(question => <Question key={question.id} questionData={question} ></Question>)
            }
      </div>
    </div>
  );
};

export default QuizDetails;
