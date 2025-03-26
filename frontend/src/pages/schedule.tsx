import { Box } from '@mui/material';
import useColorStore from '../store/color';

function Schedule() {
  const { theme } = useColorStore();

  return (
    <Box
      style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#000000' : '#ffffff',
        minHeight: '100vh',
      }}
    >
      Schedule
    </Box>
  );
}

export default Schedule;