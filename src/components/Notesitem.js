import React from "react";

export default function Notesitem(props) {
  return (
    <div className="col-md-4  my-4">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <h5 className="card-title">{props.title}</h5>
            <i
              className="fa-solid fa-trash-arrow-up mx-3 text-danger"
              title="Delete task"
              onClick={() => props.deletenote(props.item_id)}
            ></i>
            <i
              className="fa-regular fa-pen-to-square"
              title="Update Task"
              onClick={() => props.updatenote(props.note)}
            ></i>
          </div>
          <p className="card-text">{props.description}</p>
          <button className="btn btn-success">{props.tag}</button>
        </div>
      </div>
    </div>
  );
}
