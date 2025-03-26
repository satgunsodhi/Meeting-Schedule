import { supabase } from '../utils/supabaseClient' // Adjust the path as needed

function Login() {
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
    <div>
      <h1>Login</h1>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  )
}

export default Login