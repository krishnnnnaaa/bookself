import React, { useContext, useEffect } from "react";
import { BookStateContext } from "../context/bookState";
import Button from "./Button";

function ResultBookCard({
  bookImg,
  title = "-",
  author = "-",
  firstPublished = "-",
  btnChildren,
  bgcolor,
  target,
  book,
}) {
  const { savedBooks, setSavedBooks } = useContext(BookStateContext);

  // common function to handle button's function (it saves or deletes the book)
  const handleMyBook = (target, book) => {
    if (target === "save") {
      setSavedBooks((prev) => [
        ...prev,
        { bookImg, title, author, firstPublished },
      ]);
    } else if (target === "remove") {
      setSavedBooks(
        savedBooks.filter((prevbook) => prevbook.bookImg !== book.bookImg)
      );
      if (savedBooks.length === 1) {
        deleteAll();
      }
    }
  };

  useEffect(() => {
    // as soon as the 'savedBooks' changes, this will update the localstorage
    window.localStorage.setItem("bookself", JSON.stringify(savedBooks));
  }, [savedBooks]);

  const deleteAll = () => {
    setSavedBooks([]);
    window.localStorage.setItem("bookself", JSON.stringify([]));
  };

  // if the bookself is stored in localstorage then save it to 'savedBooks'
  useEffect(() => {
    if (localStorage.getItem("bookself")) {
      setSavedBooks(JSON.parse(localStorage.getItem("bookself")));
    }
  }, []);

  return (
    <div className="flex flex-col hover:bg-[#20202082] rounded-xl w-[80%] md:w-48 m-6 p-4 justify-start">
      <img src={bookImg} className="w-auto md:w-48" alt={title} />
      <p className="my-2 md:text-xl text-2xl font-semibold">{title}</p>
      <p className="text-gray-600 md:text-base text-xl">{author}</p>
      <p className="text-gray-400 font-semibold md:text-base text-xl">{firstPublished}</p>
      <Button
        onclick={() => handleMyBook(target, book)}
        bgcolor={bgcolor}
        children={btnChildren}
      />
    </div>
  );
}

export default ResultBookCard;
