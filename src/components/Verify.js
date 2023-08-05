import React, { useContext, useState } from "react";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
import notecontext from "../Context/notes/Notecontext";
import "../Css/Signup.css"
export default function Verify() {
  const [data, setdata] = useState({ User_Email: "", OTP: "" });
  const [disa, setdisa] = useState(false);
  const [alert, setalert] = useState({ msg: null, type: "" });
  const [otp, setotp] = useState("");
  let detail = useContext(notecontext);
  let { setmail, mail } = detail;
  let navigate = useNavigate();

  const sendotp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ User_Email: data.User_Email }),
      });

      const json = await response.json();

      if (json.success) {
        setotp(json.msg);
        setalert({ msg: "OTP Sent On Your Email", type: "success" });
        setdisa(true);

        setTimeout(() => {
          setdisa(false);
        }, 20000);
        setTimeout(() => {
          setalert({ msg: null, type: "" });
        }, 3000);
      } else {
        setalert({
          msg: "OTP Not sent ! Please Check Your Connection or Try Again Later",
          type: "danger",
        });
        setdisa(false);
        setTimeout(() => {
          setalert({ msg: null, type: "" });
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onchange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const Verify = (e) => {
    e.preventDefault();

    if (data.OTP == otp) {
      setmail(data.User_Email);

      // alert(data.User_Email)
      navigate("/update_password");
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <Alert msg={alert.msg} type={alert.type} />
      <div className="w-50 container my-2">
        <h1 className="text-danger">Reset Password</h1>
        <form
          className="bg-light shadow opacity-75 px-5 py-5 rounded-3 my-4 pdxy"
          onSubmit={Verify}
        >
          <div className="mb-3">
            <label htmlFor="User_Email" className="form-label">
              Email address
            </label>
            <div className="d-flex fl-r">
              <input
                type="email"
                onChange={onchange}
                required
                className="form-control"
                name="User_Email"
                id="User_Email"
                aria-describedby="emailHelp"
              />
              <button
                disabled={disa}
                onClick={sendotp}
                className="btn btn-success fs-6 mxt-1"
              >
                Send OTP
              </button>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="OTP" className="form-label">
              Enter OTP
            </label>
            <input
              type="text"
              required
              onChange={onchange}
              name="OTP"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
