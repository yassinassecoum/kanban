import { createContext, useState, useContext } from "react";

const globalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <globalContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </globalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(globalContext);
}
