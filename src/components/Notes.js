import notecontext from "../Context/notes/Notecontext";
import { useContext, useEffect, useRef, useState } from "react";
import Notesitem from "./Notesitem";
import Alert from "./Alert";

export default function Notes() {
  const notes = useContext(notecontext);
  const { state, getallNotes, editnote, deletenote } = notes;
  const [alert, setalert] = useState({ msg: null, type: "" });
  const [note, setnote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const desired_output = (employees_details) => {
    let unique_values = employees_details
      .map((item) => item.tag)
      .filter(
        (value, index, current_value) => current_value.indexOf(value) === index
      );
    return unique_values;
  };
  const unique = desired_output(state);
  useEffect(() => {
    let newarr = state.filter((data) => {
      return data.tag === "React";
    });
    console.log(newarr);
  }, [state]);

  useEffect(() => {
    getallNotes();
    //eslint--disable-next-line
  }, []);
  const updatenote = (currentnote) => {
    setnote({
      id: currentnote._id,
      etitle: currentnote.title,
      edescription: currentnote.description,
      etag: currentnote.tag,
    });

    ref.current.click();
  };
  const deleteit = (id) => {
    deletenote(id);
    setalert({ msg: "Task Deleted Successfully!", type: "success" });
    setTimeout(() => {
      setalert({ msg: null, type: "" });
    }, 3000);
  };
  const ref = useRef("");
  const refclo = useRef("");
  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  const savechnages = (e) => {
    console.log(`Your Note has been changed details are`, note);
    editnote(note.id, note.etitle, note.edescription, note.etag);
    setalert({ msg: "Task Updated Successfully!", type: "success" });
    setTimeout(() => {
      setalert({ msg: null, type: "" });
    }, 3000);
    refclo.current.click();
  };

  return (
    <>
      <div>
        <Alert msg={alert.msg} type={alert.type} />

        <div class="btn-group">
          <button
            type="button"
            class="btn btn-success dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter Task by tags
          </button>
          <ul class="dropdown-menu">
            <div className=" w-75 px-3">
              {unique.map((data, index) => {
                return (
                  <div className="form-check">
                    <input
                      key={index}
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id={index}
                    />
                    <label class="form-check-label" htmlFor={index}>
                      {data}
                    </label>
                  </div>
                );
              })}
            </div>
          </ul>
        </div>

        <button
          type="button d-none"
          ref={ref}
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        ></button>

        <div
          className="modal fade "
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit Notes
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlhtmlFor="etitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      onChange={onchange}
                      className="form-control"
                      value={note.etitle}
                      name="etitle"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlhtmlFor="edescription" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      onChange={onchange}
                      value={note.edescription}
                      name="edescription"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlhtmlFor="etag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      onChange={onchange}
                      className="form-control"
                      name="etag"
                      value={note.etag}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  ref={refclo}
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={savechnages}
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" row ">
          {state.map((data, index) => {
            return (
              <Notesitem
                key={data._id}
                item_id={data._id}
                title={data.title}
                description={data.description}
                tag={data.tag}
                updatenote={updatenote}
                note={data}
                deletenote={deleteit}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
