import { Box } from '@mui/material';
import useColorStore from '../store/color';

function Logout() {
  const { theme } = useColorStore();

  return (
    <Box
      style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#000000' : '#ffffff',
        minHeight: '100vh',
      }}
    >
      Logout
    </Box>
  );
}

export default Logout;