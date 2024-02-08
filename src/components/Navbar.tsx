
'use client'

import Link from "next/link";
import { SiStarbucks } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { useContext } from "react";
import { AppStateContext } from "@/pages/_app";
import React from "react";
import { usePathname } from "next/navigation";
import { DiVim } from "react-icons/di";


export default function Navbar(){

    const {appState,setAppState} = useContext(AppStateContext)
    
    const logout = () => {
        setAppState(prevState => ({
            ...prevState, 
            loggedUser: undefined,
            Userdb: prevState ? prevState.Userdb : []
        }))
    }

    const pathname = usePathname()
    const showFull = (pathname !== '/account/create' && pathname !== '/account/signin')

    return (
        <nav>
            <Link href={`/`}>
            <SiStarbucks className="logo" color="rgb(0,98,65)"/>
            </Link>

            <div className="navbar-slide-menu-button">
                <div className="circle"></div>
                    <div className="lines-container">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <div className="line-3"></div>   
                    </div>
            </div>

            { showFull &&  
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
                        <button className="signin-button">{`Hello, ${appState?.loggedUser.firstName}!`}</button>
                        <button onClick={()=>{logout()}} className="create-button">Logout</button>
                     </React.Fragment>
                     }
                </div>
                </div>
                 }
        </nav>
    )
}