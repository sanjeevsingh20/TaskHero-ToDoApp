import React, { useContext, useState } from "react";
import notecontext from "../Context/notes/Notecontext";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
import "../Css/Signup.css"

export default function Reset() {
  const [show, setshow] = useState(true);
  const [passw, setpassw] = useState({ newpass: "", rePassword: "" });
  const [alert, setalert] = useState({ msg: null, type: "" });
  const [pass, setpass] = useState("password");
  const [texts, settext] = useState("show password");
  const naviagte = useNavigate();
  let daata = useContext(notecontext);
  let { mail } = daata;
  const showpass = () => {
    if (pass === "password") {
      setpass("text");
      settext("Hide Password");
    } else {
      setpass("password");
      settext("show Password");
    }
  };
  const onchange = (e) => {
    const val = e.target.value;
    setpassw({ ...passw, [e.target.name]: e.target.value });
    if (val.length > 0) {
      setshow(false);
    } else {
      setshow(true);
    }
    if (val.length < 8) {
      setalert({
        msg: "Password should be minimum 8 characters",
        type: "danger",
      });
    } else {
      setalert({ msg: "", type: "" });
    }
  };
  const resetpass = async (e) => {
    e.preventDefault();
    if (passw.newpass === passw.rePassword) {
      const response = await fetch(`http://localhost:5000/api/auth/changed`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ User_email: mail, newpass: passw.newpass }),
      });
      const data = await response.json();
      if (data.success) {
        naviagte("/login");
        window.location.reload();
      } else {
        setalert({ msg: data.msg, type: "danger" });
      }
    } else {
      setalert({ msg: "Password not matched", type: "danger" });
      setTimeout(() => {
        setalert({ msg: "", type: "" });
      }, 2000);
    }
  };
  return (
    <div>
      <div className="w-50 container">
        <Alert msg={alert.msg} type={alert.type} />
        <h1 className="text-danger">Reset Your Paasword</h1>
        <form
          className="bg-light shadow  px-5 py-5 rounded-3 my-4"
          onSubmit={resetpass}
        >
          <div className="mb-3 text-start">
            <label htmlFor="newpass" className="form-label text-dark">
              Password
            </label>
            <div className="d-flex">
              <input
                type={pass}
                onChange={onchange}
                minLength={8}
                autoComplete="on"
                required
                className="form-control"
                name="newpass"
                id="exampleInputPassword1"
              />
              <div className="mb-3 form-check"></div>
            </div>
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="rePassword" className="form-label text-dark">
              Re-enter Password
            </label>
            <div className="d-flex fl-r">
              <input
                type={pass}
                onChange={onchange}
                minLength={8}
                autoComplete="on"
                required
                className="form-control"
                name="rePassword"
                id="exampleInputPassword1"
              />
              <div className="mb-3 form-check">
                <input
                  type="button"
                  value={texts}
                  disabled={show}
                  onClick={showpass}
                  className="btn btn-success mxt-1"
                  id="exampleCheck1"
                />
              </div>
            </div>
          </div>
          <div className="d-flex jcc conatiner my-4">
            <button type="submit" className="btn btn-primary mx-3">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
