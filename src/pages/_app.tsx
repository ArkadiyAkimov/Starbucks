import Layout from "@/components/Layout";  
import { User, UserContextProps } from "@/models/User";
import "@/styles/globals.scss";
import type { AppProps } from "next/app"; 
import { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext<UserContextProps>({
  user: undefined,
  setUser: function (): void
{}})

export default function App({ Component, pageProps }: AppProps) {
  const [currUser,setCurrUser] = useState<User|undefined>(undefined)

  useEffect(()=>{
    const localUser = localStorage.getItem('currUser')
    if(localUser){
      const data:User = JSON.parse(localUser)
      setCurrUser(data)
    }
  },[])

  

  return ( 
    <UserContext.Provider value={{user:currUser, setUser:setCurrUser}}>
      <Layout>
      <Component {...pageProps} />
    </Layout> 
    </UserContext.Provider>
    
  )
}
