import { Dispatch, SetStateAction } from "react";
import { User } from "./User";

export interface AppState {
    loggedUser:User | undefined
    Userdb:User[]
}

export interface AppStateContextProps {
    appState:AppState | undefined,
    setAppState:Dispatch<SetStateAction<AppState | undefined>>
}