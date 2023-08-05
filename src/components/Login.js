import React, { useState } from "react";
import Alert from "./Alert";
import "../Css/Signup.css"
import { useNavigate, Link, redirect } from "react-router-dom"; // useHistory is now changed to useNavigatr

export default function Login() {
  const [pass, setpass] = useState("password");
  const [texts, settext] = useState("show password");
  const [show, setshow] = useState(true);
  const [alert, setalert] = useState({ msg: null, type: "" });

  const [note, setnote] = useState({ Email: "", Password: "" });
  let history = useNavigate();

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
    setnote({ ...note, [e.target.name]: e.target.value });
    if (val.length > 0) {
      setshow(false);
    } else {
      setshow(true);
    }
  };
  const handleClick = async (e) => {
    try {
      e.preventDefault();

      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Email: note.Email, Password: note.Password }),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        //redirect
        // setalert({msg:"LogIn Successfully! Redirecting you to Task Page",type:"success"})
        localStorage.setItem("Token", data.authtoken);
        // setTimeout(() => {
        //     setalert({msg:null,type:""})
        // }, 3000);
        history("/home");
        document.location.reload();
      } else {
        setalert({ msg: data.mag, type: "danger" });
        setTimeout(() => {
          setalert({ msg: null, type: "" });
        }, 3000);
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="w-50 container">
      <Alert msg={alert.msg} type={alert.type} />
      <h1 className="text-danger">LogIn</h1>
      <form
        onSubmit={handleClick}
        className="bg-light shadow  px-5 py-5 rounded-3 my-4"
      >
        <div className="mb-3 text-start">
          <label htmlFor="Email" className="form-label text-dark">
            Email address
          </label>
          <input
            type="email"
            autoComplete="on"
            className="form-control"
            id="exampleInputEmail1"
            onChange={changing}
            name="Email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text text-dark">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 text-start">
          <label htmlFor="Password" className="form-label text-dark">
            Password
          </label>
          <div className="d-flex fl-r">
            <input
              type={pass}
              autoComplete="on"
              className="form-control"
              name="Password"
              id="exampleInputPassword1"
              onChange={changing}
            />
           
            <div className="mb-3 form-check mxt-2">
              <input
                disabled={show}
                type="button"
                className="btn btn-success"
                value={texts}
                onClick={showpass}
                id="exampleCheck1"
              />
            </div>
          </div>
          
        </div>
        <Link to="/Reset_password" className="fs-6">
            Forgotten Password
          </Link>
        <div className="d-flex conatiner my-4 fl-r">
          <button type="submit" className="btn btn-primary mx-3">
            Login
          </button>
          <Link to="/signup" className="fs-6 mxt-2">
            Don't have Account ? Create New Account
          </Link>
        </div>
      </form>
    </div>
  );
}
