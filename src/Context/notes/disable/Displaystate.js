import React, { useState } from "react";
import discontext from "./DisplayContext";

const Disstate = (props) => {
  const [logs, logsstate] = useState("d-block");
  const [notes, notesstate] = useState("d-block");
  return (
    <discontext.Provider value={{ logs, notes }}>
      {props.children}
    </discontext.Provider>
  );
};
export default Disstate;
