import { AddBox, DarkMode, LightMode } from '@mui/icons-material';
import { Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useColorStore from '../store/color';

const Navbar = () => {
  const { theme, toggleTheme } = useColorStore();

  return (
    <Container
      maxWidth="lg"
      sx={{
        px: 2,
        backgroundColor: theme === "light" ? "#ffffff" : "#222222",
        color: theme === "light" ? "#000000" : "#ffffff",
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
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Meeting Scheduler
          </Link>
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Link
            to="/create"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <AddBox fontSize="medium" aria-label="Create" />
          </Link>
          <Button onClick={toggleTheme} aria-label="Toggle Color Mode">
            {theme === "light" ? <DarkMode /> : <LightMode />}
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;