import { createContext } from "react";

const ThemeContext = createContext();

function ThemeProviderWrapper(props) {
  const theme = "dark";

  return (
    <ThemeContext.Provider value={{ theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProviderWrapper };
