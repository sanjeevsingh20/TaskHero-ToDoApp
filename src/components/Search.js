import React, { useEffect, useState } from "react";
import { useContext } from "react";
import notecontext from "../Context/notes/Notecontext";

export default function Search(props) {
  // let data = useContext(notecontext)
  // const {getallNotes ,state,setstate}= data
  // const [item ,setItem]=useState({Search_item:""})
  // useEffect(()=>{
  //     getallNotes()
  // },[])
  // const onchange =(e)=>{
  //     setItem({...item,[e.target.name]: e.target.value})
  //     state.filter((datas)=>{

  //     })
  // }

  return (
    <div>
      <form>
        <label
          htmlFor="Search_item"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="search"
            id="default-search"
            name="Search_item"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search task.."
          />
          <button
            type="submit"
            className="text-white absolute px-2 py-2 right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
