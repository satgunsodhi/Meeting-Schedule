import { Button } from '@chakra-ui/react'
import { createClient } from '@supabase/supabase-js'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginStore } from '../store/login'

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)

function Login() {
    const navigate = useNavigate()
    const login = useLoginStore((state) => state.login)

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(async (event) => {
            if (event !== "SIGNED_OUT") {
                navigate('/')
            }
        })

        // Cleanup the listener on component unmount
        return () => {
            authListener?.unsubscribe()
        }
    }, [navigate])

    return (
        <div>
            <Button onClick={login}>Login</Button>
        </div>
    )
}

export default Login