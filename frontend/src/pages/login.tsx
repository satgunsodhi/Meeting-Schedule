import { supabase } from '../utils/supabaseClient' // Adjust the path as needed
import useColorStore from '../store/color';
import { Box } from '@mui/material';

function Login() {
  const { theme } = useColorStore();

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) throw error;
      alert('Login successful!');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error logging in with Google:', error.message);
      } else {
        console.error('Error logging in with Google:', error);
      }
    }
  };

  return (
    <Box
      style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#000000' : '#ffffff',
        minHeight: '100vh',
      }}
    >
      <h1>Login</h1>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </Box>
  );
}

export default Login;