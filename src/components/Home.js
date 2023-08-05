import React, { useState } from "react";
import Notes from "./Notes";
import notecontext from "../Context/notes/Notecontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import "../Css/Home.css"

export default function Home() {
  let data = useContext(notecontext);
  const { addnote } = data;
  const [note, setnote] = useState({ title: "", description: "", tag: "" });
  const [alert, setalert] = useState({ msg: null, type: "" });
  const navigate = useNavigate();
  let Token;
  if (localStorage.getItem("Token")) {
    Token = true;
  }
  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (note.title === "" || note.description === "") {
      setalert({
        msg: "Title And Description should not be Blank ",
        type: "warning",
      });
      setTimeout(() => {
        setalert({ msg: null, type: "" });
      }, 4000);
    } else {
      if (note.description.length < 10) {
        setalert({
          msg: "Description should be minimum 10 characters ",
          type: "warning",
        });
      } else {
        addnote(note.title, note.description, note.tag);
        setnote({ title: "", description: "", tag: "" });
        setalert({ msg: "Task Added Successfully!", type: "success" });
        setTimeout(() => {
          setalert({ msg: null, type: "" });
        }, 4000);
      }
    }
  };
  const islooged = (token) => {
    if (token) {
      return (
        <>
          <Alert msg={alert.msg} type={alert.type} />
          <div className="w-75 wid-100 container">
            <h1>Add your Tasks</h1>

            <form className="bg-light px-4 py-4 shadow-lg rounded-3 my-3">
              <div className="mb-3 text-start">
                <label htmlFor="title" className="form-label ">
                  Title
                </label>
                <input
                  type="text"
                  onChange={onchange}
                  className="form-control"
                  name="title"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={note.title}
                />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="description" className="form-label text-left">
                  Description
                </label>
                <textarea
                  className="form-control"
                  onChange={onchange}
                  minLength={10}
                  title="Description should be of minimum 10 characters"
                  name="description"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={note.description}
                ></textarea>
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="tag" className="form-label text-left">
                  Tag
                </label>
                <input
                  type="text"
                  onChange={onchange}
                  className="form-control"
                  name="tag"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={note.tag}
                />
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={handleClick}
              >
                Add Task
              </button>
            </form>
            <h1>Your Tasks</h1>
            <Notes />
          </div>
        </>
      );
    } else {
      navigate("/login");
    }
  };
  return islooged(Token);
}
