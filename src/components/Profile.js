import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import notecontext from "../Context/notes/Notecontext";

export default function Profile() {
  const noteslen = useContext(notecontext);
  const { nonotes, getallNotes } = noteslen;
  const [user, setuser] = useState("");
  const history = useNavigate();
  const logout = () => {
    try {
      localStorage.removeItem("Token");
      history("/login");
      window.location.reload(false);
    } catch (error) {
      alert("Sorry! there is a problem for logout");
    }
  };
  useEffect(() => {
    getallNotes();
  }, []);
  const handleClick = async (e) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/authentication`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("Token"),
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setuser(data.loggedUser.name);
      }
      // if (data.success) {
      //   //redirect
      //   localStorage.setItem("Token", data.authtoken)

      //   history("/home")
      // }
    } catch (error) {
      alert("Internal Error ! please Come back again");
    }
  };
  useEffect(() => {
    handleClick();
  });

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {" "}
              Welcome Back ! {user}
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              As you come back, we hope you'll rediscover all the great features
              and personalized experiences we have to offer. Your interests and
              preferences are essential to us, and we've been working hard to
              make your time here even better.
            </p>
          </div>
          {/* <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
          </div> */}

          <div className="flex items-center justify-center bg-gray-300 ">
            <div className="flex-col items-center justify-center ">
              <div className="flex">
                <div className="flex lg:flex-row flex-col p-4 space-x-4 space-y-4 max-w-7xl justify-around w-full h-auto lg:h-60 items-center ">
                  <div className="border rounded h-40 w-[100%] md:w-72 flex items-center justify-center ml-4 lg:px-0 px-6 bg-white shadow-xl md:mt-4">
                    <div className="flex-col space-y-2 items-center px-0 md:px-6">
                      <div className="flex items-center justify-between space-x-6">
                        <div className="flex items-center space-x-1 ">
                          <div className="text-lg font-medium text-violet-500">
                            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                          </div>
                          <div className="text-sm font-medium text-gray-500">
                            Total Number of Task
                          </div>
                        </div>
                      </div>
                      <div className="text-3xl font-bold">{nonotes}</div>
                    </div>
                  </div>
                  <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                    Feel free to explore your profile, update your information,
                    and connect with others in the community. If you have any
                    questions or need assistance, our support team is always
                    here to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <script src="https://cdn.tailwindcss.com"></script>
          <script
            src="https://kit.fontawesome.com/290d4f0eb4.js"
            crossorigin="anonymous"
          ></script>
          <script
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          ></script>

          <script src="https://cdn.tailwindcss.com"></script>
          <script
            src="https://kit.fontawesome.com/290d4f0eb4.js"
            crossorigin="anonymous"
          ></script>
          <script
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          ></script>

          <button
            onClick={logout}
            className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Log Out
          </button>
        </div>
      </section>
    </div>
  );
}
