import { Box, useColorModeValue } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"

import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"

function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Box>
    </>
  )
}

export default App