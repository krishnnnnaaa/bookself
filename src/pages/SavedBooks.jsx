import React, { useContext, useEffect } from "react";
import ResultBookCard from "../components/ResultBookCard";
import { BookStateContext } from "../context/bookState";

function SavedBooks() {
  const {savedBooks, setSavedBooks} = useContext(BookStateContext)

  useEffect(() => {
    if(savedBooks.length === 0){
      if (localStorage.getItem("bookself")) {
        setSavedBooks(JSON.parse(localStorage.getItem("bookself")));
      }
    }
  }, [])
  

  return (
    <div className="p-4 text-white bg-black min-h-screen flex flex-col items-center">
      <h1 className="text-3xl text-center">My Bookself</h1>
      <div className="flex flex-wrap justify-center">
        {savedBooks
          ? savedBooks.map((book) => (
              <ResultBookCard
                key={book.title}
                author={book.author ? book.author : ""}
                bookImg={book.bookImg}
                firstPublished={book.firstPublished}
                title={book.title}
                btnChildren={'Remove from Bookself'}
                bgcolor={'bg-red-700'}
                target={'remove'}
                book={book}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default SavedBooks;
