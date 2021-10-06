import React, { createContext, useContext, useReducer } from "react";

//prepare data layer
export const DataLayerContext = createContext();

//actual layer wraps app component
// 2 props and children is component wrap inside it
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
