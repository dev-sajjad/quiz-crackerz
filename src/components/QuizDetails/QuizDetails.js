import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const QuizDetails = () => {
  const quizDetails = useLoaderData();
  const { id, name, logo, questions, total } = quizDetails.data;

  return (
    <div className="m-11">
      <div>
        <h2 className="text-md md:text-4xl font-semibold w-5/6 md:w-3/6 mx-auto text-center bg-slate-500 py-1 px-2 rounded-lg">
          <span className="text-yellow-300 ">{name}</span> Quiz Tests
        </h2>
        <h4 className="text-sm md:text-2xl p-1 rounded-md mt-4 text-center bg-slate-200 w-1/12 md:w-2/12 mx-auto">
          <strong>Total Quizzes: </strong>
          <span className="text-3xl font-bold text-orange-600">{total}</span>
        </h4>
      </div>
      <div className="w-12/12 md:w-7/12 mx-auto mt-8">
        {questions.map((question) => (
          <Question key={question.id} questionData={question}></Question>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
