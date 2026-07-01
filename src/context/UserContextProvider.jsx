import { UserContext } from "./contextAPI.js";

export const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ name }}>{children}</UserContext.Provider>
  );
};
