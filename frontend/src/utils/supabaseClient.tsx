import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase URL and API Key if process.env is unavailable
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''; 
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''; 

export const supabase = createClient(supabaseUrl, supabaseKey);
