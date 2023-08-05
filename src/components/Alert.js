import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.msg && (
        <div>
          <div
            className={`alert alert-${props.type}`}
            role="alert"
            style={{ zIndex: "3" }}
          >
            {props.msg}
          </div>
        </div>
      )}
    </div>
  );
}
