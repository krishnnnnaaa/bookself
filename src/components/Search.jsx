import axios from "axios";
import React, { useContext, useCallback } from "react";
import { CiSearch } from "react-icons/ci";
import { BookStateContext } from "../context/bookState";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import _ from "lodash";

function Search() {
  const { setResult, setLoading, loading } = useContext(BookStateContext);

  const handleSubmit = (e) => {
    setLoading(true);
    const query = e.target.value;
    debouncedResults(query);
  };

  const getResult = async (query) => {
    await axios
      .get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
      .then((res) => setResult(res.data.docs));
    setLoading(false);
  };

  const debouncedResults = useCallback(
    // the debounce is set to 1000ms, meaning 'getResults' will only be called 1000ms after the user stops typing.
    _.debounce((query) => getResult(query), 1000));

  return (
    <div
      className="flex border-[2px] border-white md:text-base text-xl rounded-2xl py-2 px-4 w-full md:w-96 items-center
     gap-x-2"
    >
      <CiSearch className="text-lg" />
      <input
        type="text"
        id="input"
        onChange={(e) => handleSubmit(e)}
        placeholder="Search"
        className="bg-transparent w-80 outline-none"
      />

      {/* Show loader if it's state is true */}
      {loading && (
        <div>
          <AiOutlineLoading3Quarters className="animate-spin text-2xl text-white" />
        </div>
      )}
    </div>
  );
}

export default Search;
