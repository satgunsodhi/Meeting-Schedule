import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import Calendar from "./pages/calendar";
import Login from "./pages/login";
import Create from "./pages/create";
import Navbar from './components/Navbar';
import Logout from "./pages/logout";
import Schedule from "./pages/schedule";

function App() {
  return (
    <Box>
      <Navbar />
              <Routes>
                <Route path="/" element={<Calendar />} />
                <Route path="/create" element={<Create />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/schedule" element={<Schedule />} />
              </Routes>
    </Box>
  )
}

export default App
