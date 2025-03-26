import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import Calendar from "./pages/calendar";
import Login from "./pages/login";
import Create from "./pages/create";
import Navbar from './components/Navbar';
import Logout from "./pages/logout";
import Schedule from "./pages/schedule";
import useColorStore from "./store/color";

function App() {
  const { theme } = useColorStore();

  return (
    <Box
      sx={{
        backgroundColor: theme === "light" ? "#ffffff" : "#222222",
        color: theme === "light" ? "#000000" : "#ffffff",
        border: "0px solid #cccccc",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Box>
  );
}

export default App;
