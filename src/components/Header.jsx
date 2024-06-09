import React from "react";
import { GiBlackBook } from "react-icons/gi";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex border-b border-white items-center justify-between bg-black text-white p-4 text-center mx-auto">
      <Link to={"/"}>
        <div className="flex items-center gap-x-2 font-semibold text-xl">
          <GiBlackBook className="text-2xl" />
          <p>Book Home</p>
        </div>
      </Link>
      <div>
        <ul>
          <Link to={"/savedbooks"}>
            <li className="flex p-3 rounded-lg gap-x-2">
              <FaRegBookmark className="text-2xl" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
