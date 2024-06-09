import { createContext, useState } from "react";

export const BookStateContext = createContext();

export const BookStateProvider = ({ children }) => {
  const [result, setResult] = useState(null); // to store the response coming from api endpoint
  const [savedBooks, setSavedBooks] = useState([]); // to store books
  const [loading, setLoading] = useState(false); // stores the current state of loader
  return (
    <BookStateContext.Provider
      value={{
        result,
        setResult,
        savedBooks,
        setSavedBooks,
        loading,
        setLoading,
      }}
    >
      {children}
    </BookStateContext.Provider>
  );
};
