import Layout from "@/components/Layout";  
import { AppState, AppStateContextProps } from "@/models/AppState";
import { User, UserContextProps } from "@/models/User";
import "@/styles/globals.scss";
import type { AppProps } from "next/app"; 
import { SetStateAction, useEffect, useState } from "react";
import { createContext } from "react";


export const AppStateContext = createContext<AppStateContextProps>({
  appState: undefined,
  setAppState: function (value: SetStateAction<AppState | undefined>): void {}
})

export default function App({ Component, pageProps }: AppProps) {
  const [currUser,setCurrUser] = useState<User|undefined>(undefined)
  const [appState,setAppState] = useState<AppState|undefined>(undefined)

  useEffect(()=>{
    const localAppState = localStorage.getItem('APP_STATE')
    if(localAppState){
      const data:AppState = JSON.parse(localAppState)
      setAppState(data)
      setCurrUser(data.loggedUser)
    }
  },[])

  

  return ( 
    <AppStateContext.Provider value={{appState:appState,setAppState:setAppState}}>
      <Layout>
      <Component {...pageProps} />
    </Layout> 
    </AppStateContext.Provider>
  )
}
