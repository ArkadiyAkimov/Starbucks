import Layout from "@/components/Layout";  
import { AppState, AppStateContextProps } from "@/models/AppState";
import "@/styles/globals.scss";
import type { AppProps } from "next/app"; 
import { SetStateAction, useEffect, useState } from "react";
import { createContext } from "react";


export const AppStateContext = createContext<AppStateContextProps>({
  appState: undefined,
  setAppState: function (value: SetStateAction<AppState | undefined>): void {}
})

export default function App({ Component, pageProps }: AppProps) {
  const [appState,setAppState] = useState<AppState|undefined>(undefined)


  useEffect(() => {
    if (appState) {
        localStorage.setItem('APPSTATE', JSON.stringify(appState));
    }
  }, [appState]);
  

  useEffect(() => {
    // Retrieve appState from local storage
    if(appState){
      console.log("no changes made")
    }
    const storedAppState = localStorage.getItem('APPSTATE');
    if (storedAppState) {
        try {
            const parsedAppState:AppState = JSON.parse(storedAppState);
                setAppState(parsedAppState);
        } catch (error) {
            console.error('Error parsing data from localStorage:', error);
        }
    }
}, []);



  
  return ( 
    <AppStateContext.Provider value={{appState:appState,setAppState:setAppState}}>
      <Layout>
      <Component {...pageProps} />
    </Layout> 
    </AppStateContext.Provider>
  )
}
