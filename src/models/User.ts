import { Dispatch, SetStateAction } from "react";

export interface User {
    firstName:string;
    lastName:string;
    username: string;
    password: string;
  }

export interface UserContextProps {
  user:User|undefined
  setUser:Dispatch<SetStateAction<User | undefined>>
}