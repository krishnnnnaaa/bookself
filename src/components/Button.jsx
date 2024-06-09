import React from "react";

function Button({ bgcolor = "", children = "", onclick }) {
  return (
    <button
      type="button"
      onClick={onclick}
      className={`px-6 md:px-2 py-4 my-2 rounded-lg md:text-sm text-xl cursor-pointer ${bgcolor}`}
    >
      {children}
    </button>
  );
}

export default Button;
