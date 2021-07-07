import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  users: []
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        addUser
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
