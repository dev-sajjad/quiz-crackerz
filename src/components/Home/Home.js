import React, { useEffect } from "react";
import lottie from "lottie-web";
import onlineTest from "../../static/online-test.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Topics from "../Topics/Topics";

const Home = () => {
  // lottie animation
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-lottie"),
      animationData: onlineTest,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
  }, []);

  return (
    <div className="w-11/12 mx-auto overflow-hidden">
      <div className="flex flex-wrap overflow-hidden">
        <div className="flex-1 p-2 flex items-center">
          <div>
            <h2 className="text-3xl md:text-5xl tracking-wide font-extrabold">
              Develop Your Skills <br />
              online with CODE <span className="text-amber-300">BOOK</span>
            </h2>
            <p className="text-md md:text-2xl font-light  mt-2">
              Test your skills online with time bound MCQ based Skill
              assessment. Get more information on online skill tests online
              assessment on Code Book.
            </p>
            <div>
              <Link to="/topics">
                <button className="border border-black  mt-6 hover:bg-zinc-400 tracking-normal hover:text-yellow-300 text-gray-800 font-normal  uppercase py-2 px-3 rounded-lg text-lg">
                  Get Started{" "}
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-no-repeat">
          <div
            className="mx-auto"
            id="react-lottie"
            style={{ height: 400, width: 400 }}
          ></div>
        </div>
      </div>

      {/* Topics catagory */}
      <div className="mt-14">
        <div className="mb-14">
          <h2 className="text-4xl text-center font-bold text-black tracking-wide">
           Online MCQ Skill Tests
          </h2>
          <hr class=" mx-auto w-32 h-1 bg-yellow-300 border-0 my-2" />
        </div>
        <Topics></Topics>
      </div>
    </div>
  );
};

export default Home;
