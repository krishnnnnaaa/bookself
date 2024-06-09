import React, { useContext } from "react";
import { TbBookOff } from "react-icons/tb";
import { BookStateContext } from "../context/bookState";
import Results from './Results'

function Content() {
  const { result } = useContext(BookStateContext);
  return (
  result ? 
    <Results/> :
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-start pt-44">
      <div className="bg-white text-black rounded-full">
        <TbBookOff className="text-[10rem] p-6" />
      </div>
      <p className="my-2 text-gray-500">Start by searching your book</p>
    </div>
   
  )
}

export default Content;
