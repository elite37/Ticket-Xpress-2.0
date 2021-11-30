import { createContext, useReducer, useContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ initialState, reducer, children }) => (
  <UserContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </UserContext.Provider>
);

export const UserConsumer = () => useContext(UserContext);

export default UserProvider;
