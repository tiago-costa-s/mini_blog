import { useContext, createContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ childre, value }) {
    return <AuthContext.Provider value={value}></AuthContext.Provider>
}

export function useAuthValue() {
    return useContext(AuthContext);
}