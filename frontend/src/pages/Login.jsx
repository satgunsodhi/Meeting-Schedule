import { Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginStore } from '../store/login'
import { supabase } from '../../utils/supabase'

function Login() {
    const navigate = useNavigate()
    const login = useLoginStore((state) => state.login)

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (session) {
                navigate('/')
            }
        }

        checkUser()

        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (session) {
                navigate('/')
            }
        })

        // Cleanup the listener on component unmount
        return () => {
            subscription?.unsubscribe()
        }
    }, [navigate])

    return (
        <div>
            <Button onClick={login}>Login</Button>
        </div>
    )
}

export default Login