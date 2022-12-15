import React, { createContext } from 'react';

import { useAuth } from '../hooks/useAuth';

type User = {
    name: string
    logged: boolean
}

type AuthContextData = {
    user: User
    handleLogin: () => void
}

type Props = {
    children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: Props) => {
    const {
        user,
        handleLogin
    } = useAuth();

    return (
        <AuthContext.Provider value={{user, handleLogin}}>
            {children}
        </AuthContext.Provider>
    )
}