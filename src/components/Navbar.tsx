
'use client'

import Link from "next/link";
import { SiStarbucks } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { useContext } from "react";
import { AppStateContext } from "@/pages/_app";
import React from "react";
import { usePathname } from "next/navigation"; 
import styles from '../styles/navbar.module.scss';

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
        <nav className={styles.nav}>
            <Link href={`/`}>
            <SiStarbucks className={styles.logo} color="rgb(0,98,65)"/>
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
            <div className={styles.items}>
            <div>
                <button className={styles.menu_button}>MENU</button>
                <button className={styles.menu_button}>REWARDS</button>
                <button className={styles.menu_button}>GIFT CARDS</button>
            </div>

            <div className={styles.right_nav_btn_bundle}>
           <button className={styles.find_store_button}>
            <MdLocationOn className={styles.location_pin} />
            Find a store </button>
            {appState?.loggedUser === undefined 
                    ?<React.Fragment>
                     <Link href={`/account/signin`}>
                        <button className={styles.signin_button}>Sign in</button>
                     </Link>
                     <Link href={`/account/create`}>
                        <button className={styles.create_button}>Join us</button>
                     </Link>
                     </React.Fragment> 
                    :<React.Fragment>
                        <button className={styles.signin_button}>{`Hello, ${appState?.loggedUser.firstName}!`}</button>
                        <button onClick={()=>{logout()}} className={styles.create_button}>Logout</button>
                     </React.Fragment>
                     }
                </div>
                </div>
                 }
        </nav>
    )
}