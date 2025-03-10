import { create } from "zustand"
import { supabase } from "../../utils/supabase"

export const useLoginStore = create((set) => ({
    login: async () => {
        await supabase.auth.signInWithOAuth({
            provider: "google"
        })
    }
}))