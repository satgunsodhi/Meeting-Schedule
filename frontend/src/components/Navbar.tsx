import React from 'react';
import { AddBox, DarkMode, LightMode } from '@mui/icons-material';
import { Button, Container, Stack, Typography } from '@mui/material';

const Navbar = () => {
  const [colorMode, setColorMode] = React.useState("light");

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        px: 2,
        backgroundColor: colorMode === "light" ? "#ffffff" : "#333333",
        color: colorMode === "light" ? "#000000" : "#ffffff",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: 64 }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          sx={{
            background: "linear-gradient(to right, cyan, blue)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          
            <AddBox fontSize="medium" aria-label="Create" />

          <Button onClick={toggleColorMode} aria-label="Toggle Color Mode">
            {colorMode === "light" ? <DarkMode /> : <LightMode />}
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;