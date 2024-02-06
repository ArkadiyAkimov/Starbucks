import Link from "next/link";
import { SiStarbucks } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { useContext } from "react";
import { AppStateContext } from "@/pages/_app";
import React from "react";


export default function Navbar(){

    const {appState,setAppState} = useContext(AppStateContext)
    
    const logout = () => {
        setAppState(prevState => ({
            ...prevState, 
            loggedUser: undefined,
            Userdb: prevState ? prevState.Userdb : []
        }))
    }

    return (
        <nav>
            <Link href={`/`}>
            <SiStarbucks className="logo" color="rgb(0,98,65)"/>
            </Link>

            <div className="navbar-items">
            <div>
                <button className="menu-button">MENU</button>
                <button className="menu-button">REWARDS</button>
                <button className="menu-button">GIFT CARDS</button>
            </div>

            <div className="right-nav-btn-bundle">
           <button className="find-store-button">
            <MdLocationOn className="location-pin" />
            Find a store </button>
            {appState?.loggedUser === undefined 
                    ?<React.Fragment>
                     <Link href={`/account/signin`}>
                        <button className="signin-button">Sign in</button>
                     </Link>
                     <Link href={`/account/create`}>
                        <button className="create-button">Join us</button>
                     </Link>
                     </React.Fragment> 
                    :<React.Fragment>
                        <button className="signin-button">{appState?.loggedUser.firstName}</button>
                        <button onClick={()=>{logout()}} className="create-button">Logout</button>
                     </React.Fragment>
                     }
                </div>    
                </div>
        </nav>
    )
}