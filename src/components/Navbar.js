import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Css/Navbar.css"
export default function Navbar() {
  const [check, setcheck] = useState("");
  const [logcheck, setlogcheck] = useState("");
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  let Token;
  if (localStorage.getItem("Token")) {
    Token = true;
  } else {
    Token = false;
  }
  const islogged = (token) => {
    if (!token) {
      setcheck("d-none");
      setlogcheck("d-block");
    } else {
      setcheck("d-block");
      setlogcheck("d-none");
    }
  };
  useEffect(() => {
    islogged(Token);
  });
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark navbar-dark">
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <Link to="/">
              <img
                src="https://i.ibb.co/c26z2hZ/image-removebg-preview-11.png"
                alt="image-removebg-preview-11"
                border="0"
                width={"50px"}
              />
            </Link>
            <Link className="navbar-brand text-light" to="/">
              TaskHero
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link text-light ${
                    location.pathname === "/home" ? "active" : ""
                  } ${check}`}
                  aria-current="page"
                  to="/home"
                >
                  Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-light ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/About"
                >
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex jcc" role="search">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        <li className="nav-item">
          <Link className={`nav-link text-light ${location.pathname === '/signup'?"active":""}`} aria-current="page" to="/signup">Signup</Link>
        </li> */}
              <div className="d-flex ">
                <Link to="/signup">
                  <button
                    className={`btn btn-primary mx-2 ${logcheck}`}
                    type="button"
                  >
                    Sign Up
                  </button>
                </Link>
                <Link to="/login">
                  <button
                    className={`btn btn-primary mx-2 ${logcheck}`}
                    type="button"
                  >
                    LogIn
                  </button>
                </Link>
                <Link
                  to="/profile"
                  className={`text-decoration-none ${check} text-success`}
                >
                  <div className="d-flex">
                    <i className="fa-solid fa-circle-user fs-4 mx-1"></i>
                    <i className="fs-6">Your Profile</i>
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
