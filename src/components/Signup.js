import React, { useState } from "react";
import Alert from "./Alert";
import { useNavigate, Link } from "react-router-dom";
import "../Css/Signup.css"

function Signup() {
  let Navigate = useNavigate();
  const [pass, setpass] = useState("password");
  const [texts, settext] = useState("show password");
  const [show, setshow] = useState(true);
  const [alert, setalert] = useState({ msg: "", type: "" });
  const [newuse, setnewuse] = useState({
    name: "",
    username: "",
    Pass_word: "",
    C_Pass_word: "",
  });
  const showpass = () => {
    if (pass === "password") {
      setpass("text");
      settext("Hide Password");
    } else {
      setpass("password");
      settext("show Password");
    }
  };
  const changing = (e) => {
    const val = e.target.value;
    setnewuse({ ...newuse, [e.target.name]: e.target.value });
    // var pattern = /[a-zA-Z]+[(@!#\$%\^\&*\)\(+=._-]{1,}/;
    if (newuse.Pass_word.length < 8) {
      setalert({ msg: e.target.title, type: "danger" });
    } else {
      setalert({ msg: "", type: "" });
    }
    if (newuse.Pass_word.length > 0) {
      setshow(false);
    } else {
      setshow(true);
    }
  };
  const addnewuser = async (e) => {
    e.preventDefault();
    try {
      if (newuse.C_Pass_word === newuse.Pass_word) {
        const response = await fetch(`http://localhost:5000/api/auth`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: newuse.name,
            username: newuse.username,
            Pass_word: newuse.Pass_word,
          }),
        });
        const data = await response.json();

        if (data.success) {
          localStorage.setItem("Token", data.authtoken);
          Navigate("/login");
        } else {
          setalert({ msg: data.Error, type: "danger" });
        }
      } else {
        setalert({ msg: "Password doen't match", type: "danger" });
      }
    } catch (error) {
      console.log({ error: error });
    }
  };
  return (
    <>
      <Alert msg={alert.msg} type={alert.type} />
      <div className="container w-lg-75 w-sm-100 w-50" >
        <h1 className="text-danger">Please Register Yourself</h1>
        <form
          onSubmit={addnewuser}
          className="bg-light shadow  px-5 py-5 rounded-3 my-4 pdxy"
        >
          <div className="my-4 text-start">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="exampleInputEmail1s"
              onChange={changing}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="my-4 text-start">
            <label htmlFor="username" className="form-label">
              Email address
            </label>
            <input
              type="email"
              required
              className="form-control"
              name="username"
              id="exampleInputEmail1s"
              aria-describedby="emailHelp"
              onChange={changing}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="my-4 text-start">
            <label htmlFor="Pass_word" className="form-label">
              Password
            </label>
            <div className="d-flex fl-r">
              <input
                type={pass}
                required
                minLength="8"
                title="please Enter at least 8 character"
                className="form-control"
                name="Pass_word"
                id="exampleInputPassword12"
                onChange={changing}
              />
              <div className="mb-3 mt-3 form-check">
                <input
                  disabled={show}
                  required
                  type="button"
                  className="btn btn-success"
                  value={texts}
                  onClick={showpass}
                  id="exampleCheck1g"
                />
              </div>
            </div>
            <label htmlFor="C_Pass_word" className="form-label">
              Confirm Password
            </label>
            <div className="d-flex">
              <input
                required
                type={pass}
                minLength="8"
                title="please Enter at least 8 character"
                className="form-control"
                name="C_Pass_word"
                id="exampleInputPassword12"
                onChange={changing}
              />
            </div>
          </div>
          <div className="d-flex conatiner my-3 fl-r">
            <button type="submit" className="btn btn-primary mx-3">
              Submit
            </button>
            <Link to="/login" className="fs-7">
              Already have Account ?Log in
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
