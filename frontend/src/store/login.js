import { create } from "zustand"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)

export const useLoginStore = create((set) => ({
    login: async () => {
        await supabase.auth.signInWithOAuth({
            provider: "google"
        })
    }
}))