import React from "react";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div className="max-w-sm h-100 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/topics/${id}`}>
        <img
          className="rounded-t-lg h-96 w-full bg-slate-400"
          src={logo}
          alt={name}
        />
      </Link>
      <div className="p-5">
        <Link to={`/topics/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex justify-between items-center mt-6">
          <p className="bg-slate-400 py-2 px-3 rounded-lg text-md font-medium text-gray-700 dark:text-gray-400">
            <span className="text-yellow-300">Total Quizzes: {total}</span>
          </p>
          <Link
            to={`/topics/${id}`}
            className="inline-flex items-center uppercase py-2 px-3 text-md font-normal tracking-normal
          text-center text-white  hover:text-yellow-300 bg-blue-700 rounded-lg hover:bg-gray-600 dark:bg-blue-600
          dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Start Now{" "}
            <FontAwesomeIcon
              className="ml-2 h-4 w-4"
              icon={faArrowAltCircleRight}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
