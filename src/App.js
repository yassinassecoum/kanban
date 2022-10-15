import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";

import { useGlobalContext } from "./context/GlobalContext";

function App() {
  const { theme, toggleTheme } = useGlobalContext();
  return (
    <Box component="main" id={theme} sx={{ flexGrow: 1, p: 2 }}>
      <h1>Hello</h1>
      <Switch onChange={toggleTheme} />
    </Box>
  );
}

export default App;
