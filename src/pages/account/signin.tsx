import { useContext, useState } from "react"
import { AppStateContext } from "../_app"
import { useRouter } from "next/router"
import styles from '../../styles/signin.module.scss'

export default function Signin(){
    const {appState,setAppState} = useContext(AppStateContext)
    const router = useRouter()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [keepSigned,setKeepSigned] = useState(true)

    const login = () => {

        const userFound = appState?.Userdb.find(user => user.username === username && user.password === password)

        if (!userFound) return

        setAppState(prevState => ({
            ...prevState, 
            loggedUser: userFound,
            Userdb: prevState ? prevState.Userdb : []
        }))

        setUsername('')
        setPassword('')
        router.push('/')
    }

    return(
        <div className={styles.form_frame}>
            <div className={styles.signin_title}>Sign in or create an account</div>
            
            <div className={styles.form_bubble}>
            <div className={styles.little_disclaimer}>*indicates required field</div>
            <input className={styles.username_input} onChange={e=>setUsername(e.target.value)} value={username} type="text" placeholder="*Username or email address"/>
            <input className={styles.password_input} onChange={e=>setPassword(e.target.value)} value={password} type="text" placeholder="*Password"/>
            <div className={styles.keep_signed_in}>
                <button onClick={()=>{setKeepSigned(!keepSigned)}} className={`${styles.keep_checkbox} ${keepSigned && `${styles.keep_checkbox_toggled}`}`}>
                ✔</button>
                Keep me signed in.
                <a href="">Details</a>
            </div>
            <a className={styles.forgot_link} href="">Forgot your username?</a>
            <a className={styles.forgot_link} href="">Forgot your password?</a>
            <div className={styles.sign_button_frame}>
                <button onClick={()=>{login()}} className={styles.sign_button}>Sign in</button>
            </div>
        </div>
        </div>
    )
}