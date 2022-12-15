import { useState } from 'react'

type User = {
    name: string
    logged: boolean
}

export function useAuth() {
    const [user, setUser] = useState<User>({
        name: '',
        logged: false
    } as User);

    const handleLogin = () => {
        setUser({
            name: 'Wallace Jonathan',
            logged: true
        });
    }

    return {
        user,
        handleLogin
    }
}