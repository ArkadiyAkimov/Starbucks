
'use client'

import Link from "next/link";
import { SiStarbucks } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { AppStateContext } from "@/pages/_app";
import React from "react";
import { usePathname } from "next/navigation"; 
import styles from '../styles/navbar.module.scss';
import styles2 from '../styles/slidemenu.module.scss';

export default function Navbar(){

    const {appState,setAppState} = useContext(AppStateContext)
    const [slideIn,setSlideIn] = useState(false)
    
    const logout = () => {
        setAppState(prevState => ({
            ...prevState, 
            loggedUser: undefined,
            Userdb: prevState ? prevState.Userdb : []
        }))
    }

    useEffect(() => {
        if (slideIn) {
          document.body.classList.add("overflow-y-hidden")
        } else {
          document.body.classList.remove("overflow-y-hidden")
        }
    },[slideIn])

    const pathname = usePathname()
    const showFull = (pathname !== '/account/create' && pathname !== '/account/signin')

    return (
        <>
        <nav className={styles.nav}>
            <Link href={`/`}>
            <SiStarbucks className={styles.logo} color="rgb(0,98,65)"/>
            </Link>

            <div className={styles2.navbar_slide_menu_button} onClick={()=>setSlideIn(!slideIn)}>
                <div className={styles2.circle}></div>
                    <div className={styles2.lines_container}>
                        <div className={styles2.line_1}></div>
                        <div className={styles2.line_2}></div>
                        <div className={styles2.line_3}></div>   
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
            <div className={styles2.slide_bg + ' ' + `${slideIn && styles2.slide_bg_in}`} onClick={()=>setSlideIn(!slideIn)}>
                <div className={styles2.slide + ' ' + `${slideIn && styles2.slide_in}`}>
                     
            <div className={styles2.slide_menu_items}>
                <button className={styles.menu_button}>MENU</button>
                <button className={styles.menu_button}>REWARDS</button>
                <button className={styles.menu_button}>GIFT CARDS</button>
            </div>

            <div className={styles2.slide_btn_bundle}>
          
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

                    <button className={styles.find_store_button}>
                      <MdLocationOn className={styles.location_pin} />
                    Find a store </button>
                </div>
                </div> 
            </div>
        </>
    )
}