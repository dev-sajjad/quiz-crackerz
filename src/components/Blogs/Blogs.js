import React from "react";

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12 mx-auto mt-6">
      <div className="bg-slate-300 p-5 rounded-md">
        <h2 className="text-xl md:text-3xl text-rose-600">
          <strong>Question: </strong>
          What is the purpose of React Router?
        </h2>
        <p className="text-md md:text-xl mt-4">
          <b>Answer:</b> ReactJS Router is mainly used for developing Single
          Page Web Applications. React Router is used to define multiple routes
          in the application. When a user types a specific URL into the browser,
          and if this URL path matches any 'route' inside the router file, the
          user will be redirected to that particular route.
        </p>
      </div>
      <div className="bg-slate-300 p-5 rounded-md">
        <h2 className="text-xl md:text-3xl text-rose-600 ">
          <strong>Question: </strong>
          How does Context Api works?
        </h2>
        <p className="text-md md:text-xl mt-4">
          <b>Answer:</b> The React Context API is a way for a React app to
          effectively produce global variables that can be passed around. This
          is the alternative to "prop drilling" or moving props from grandparent
          to child to parent, and so on. Context is also touted as an easier,
          lighter approach to state management using Redux.
        </p>
      </div>
      <div className="bg-slate-300 p-5 rounded-md">
        <h2 className=" text-xl md:text-3xl text-rose-600">
          <strong>Question: </strong>
          Use of useRef Hook in React!
        </h2>
        <p className=" text-md md:text-xl mt-4">
          <b>Answer:</b> The useRef hook is the new addition in React 16.8.
          Before proceeding to this article there is a prerequisite to know
          about the ref in react. The useRef is a hook that allows to directly
          create a reference to the DOM element in the functional component.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
