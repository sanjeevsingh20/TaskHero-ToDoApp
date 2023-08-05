import React, { useState, useEffect } from "react";
import "../Css/Front.css"
import { Link } from "react-router-dom";
export default function Front() {
  const [check, setcheck] = useState("");
  let Token;
  if (localStorage.getItem("Token")) {
    Token = true;
  } else {
    Token = false;
  }
  const islogged = (token) => {
    if (!token) {
      setcheck("d-block");
    } else {
      setcheck("d-none");
    }
  };
  useEffect(() => {
    islogged(Token);
  });
  return (
    <div>
      <div className=" bg-all vh-100 flex-wrap text-white d-flex justify-content-center align-items-center  px-5 pdx-2">
        <div className="d-flex flex-row  justify-content-center align-items-center">
          <div className="d-flex flex-column w-50 ">
            <h1>Welcome to TaskHero!</h1>
            <span>Your Ultimate Todo Web App</span>
          </div>
          <div className="fs-5 w-50 text-left pd-y">
            <span>
              Organize your life, increase productivity, and stay on top of your
              tasks with TodoMaster - the ultimate todo web app. Whether you're
              a busy professional, a student juggling multiple assignments, or
              simply someone trying to manage daily chores, TodoMaster is here
              to make your life easier.
            </span>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row justify-content-around my-7 align-items-center">
                
                <div className="list-group w-70">
                    <a href="/" className=" list-group-item list-group-item-action active" aria-current="true">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">List group item heading</h5>
                            
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>And some small print.</small>
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">List group item heading</h5>
                            
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small className="text-muted">And some muted small print.</small>
                    </a>
                    <a href="/" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">List group item heading</h5>
                            
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small className="text-muted">And some muted small print.</small>
                    </a>
                </div>
            </div> */}
      <section className="text-gray-600 body-font">
        <div className="container justify-center  py-10  flex flex-row flex-wrap">
          <h1 className="my-3 border-bottom mb-3 border-primary w-100 h-20">
            Why Choose Us
          </h1>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="sm:w-16 sm:h-16 w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2 ">
                    Seamless Task Management
                  </h2>
                  <p className="leading-relaxed text-base">
                    TodoMaster offers a user-friendly interface that simplifies
                    task management. Easily create, edit, and delete tasks with
                    just a few clicks. Stay in control of your schedule and
                    never miss a deadline again.
                  </p>
                </div>
              </div>
              <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Prioritize with Ease
                  </h2>
                  <p className="leading-relaxed text-base">
                    {" "}
                    With TodoMaster, you can prioritize tasks effortlessly. Mark
                    urgent tasks, set due dates, and sort them based on their
                    importance. Focus on what matters most and achieve your
                    goals faster.
                  </p>
                </div>
                <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="sm:w-16 sm:h-16 w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="sm:w-16 sm:h-16 w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Access Anywhere, Anytime
                  </h2>
                  <p className="leading-relaxed text-base">
                    TodoMaster is a cloud-based web app, meaning you can access
                    your tasks from any device with an internet connection. Stay
                    productive on the go and seamlessly switch between your
                    phone, tablet, and computer.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className={`text-gray-600 body-font ${check}`}>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            Kickstarter Your Journey to Enhanced Productivity
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-base">
              Sign up for TodoMaster today and take the first step towards a
              more organized and productive life. Our free plan offers plenty of
              features to get you started, and for those who need more, our
              premium plans offer even greater flexibility.
            </p>
            <div className="flex justify-center md:mt-4 mt-6">
              <Link to="/signup">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                  Get Started
                </button>
              </Link>
              <Link
                to="/About"
                className="text-indigo-500 inline-flex items-center ml-4"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://media.gettyimages.com/id/1336324740/photo/having-fun-at-a-garden-party.jpg?s=612x612&w=gi&k=20&c=k38mMEtAbviAjUoCH0BDFCM6Trqtdt2LcQTW6ydb4Js="
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Ready to tackle your todo list like a pro? Get started now!
            </h1>
            <p className="mb-8 leading-relaxed">
              Join thousands of satisfied users who have already experienced the
              transformative power of TodoMaster. Say hello to efficiency and
              bid farewell to chaos!
            </p>
            <div className="flex justify-center content-center">
              <Link to="/About">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  About
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
