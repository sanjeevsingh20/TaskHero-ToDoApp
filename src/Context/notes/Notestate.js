import React, { useState } from "react";
import notecontext from "./Notecontext";
import Alert from "../../components/Alert";

const Notestate = (props) => {
  const host = "http://localhost:5000";
  const san = [];
  const [nonotes, senonotes] = useState(0);
  const [mail, setmail] = useState("");

  const [state, setstate] = useState(san);
  // const update = () => {
  //     setTimeout(() => {
  //         setstate({
  //             "name": "Khushi",
  //             "Roll_no": "21/610"
  //         })
  //     }, 2000);
  // }
  const editnote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiNjg5M2NlMzAyZjMyM2ZkZTU5NWQ5In0sImlhdCI6MTY4OTc2ODE0MX0.VywNnW2ZsNZ00OAmV59Q3WgGUkUmLwmbwMMPZPrNGpU"
          Authorization: localStorage.getItem("Token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      let newnote = JSON.parse(JSON.stringify(state));
      console.time("codezup");
      for (let index = 0; index < newnote.length; index++) {
        const element = newnote[index];
        if (element._id === id) {
          element.title = title;
          element.description = description;
          element.tag = tag;
          break;
        }
      }
      console.timeEnd("codezup");
      setstate(newnote);
    } catch (error) {
      <Alert msg={"Internal Server Error Plaese Try Again"} type={"danger"} />;
    }
  };
  const getallNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchalldata`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiNjg5M2NlMzAyZjMyM2ZkZTU5NWQ5In0sImlhdCI6MTY4OTc2ODE0MX0.VywNnW2ZsNZ00OAmV59Q3WgGUkUmLwmbwMMPZPrNGpU"
        Authorization: localStorage.getItem("Token"),
      },
    });
    const json = await response.json();
    setstate(json);
    senonotes(json.length);
  };
  const addnote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addNew`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiNjg5M2NlMzAyZjMyM2ZkZTU5NWQ5In0sImlhdCI6MTY4OTc2ODE0MX0.VywNnW2ZsNZ00OAmV59Q3WgGUkUmLwmbwMMPZPrNGpU"
          Authorization: localStorage.getItem("Token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const note = await response.json();
      setstate(state.concat(note));
    } catch (error) {
      console.log(error);
    }
  };
  const deletenote = async (id) => {
    const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Token"),
        // "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiNjg5M2NlMzAyZjMyM2ZkZTU5NWQ5In0sImlhdCI6MTY4OTc2ODE0MX0.VywNnW2ZsNZ00OAmV59Q3WgGUkUmLwmbwMMPZPrNGpU"
      },
    });

    const newnote = state.filter((note) => {
      return note._id !== id;
    });
    // const newdata = state.
    setstate(newnote);
  };
  return (
    <notecontext.Provider
      value={{
        nonotes,
        state,
        addnote,
        deletenote,
        getallNotes,
        editnote,
        setstate,
        mail,
        setmail,
      }}
    >
      {props.children}
    </notecontext.Provider>
  );
};
export default Notestate;
