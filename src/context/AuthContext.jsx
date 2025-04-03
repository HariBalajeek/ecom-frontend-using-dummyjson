import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext()

export const AuthProvider = ({children})=>{

    const [user,setUser] = useState(null)

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('jwt-token'))
        if(token){
            setUser(token.split('-')[0])
        }else{
            setUser(null)
        }
    })

    //login function
    const login =(username)=>{
        const fakeToken = `${username}-jwt-token`
        localStorage.setItem('jwt-token', JSON.stringify(fakeToken))
        setUser(username)
    }

    const logout = () =>{
        localStorage.removeItem('jwt-token')
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)