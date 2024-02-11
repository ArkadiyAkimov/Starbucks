import { User } from "@/models/User"
import { useContext, useState } from "react"
import { AppStateContext } from "../_app" 
import styles from '../../styles/signin.module.scss'


export default function Create(){
    const {appState,setAppState} = useContext(AppStateContext)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [emailCheck,setEmailCheck] = useState(false)
    const [agreeTerms,setAgreeTerms] = useState(false)

    const createAccount = () => {

        if(!agreeTerms) return

        const newUser:User = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password
        }

        setAppState(prevState => ({
            ...prevState, 
            loggedUser: prevState? prevState.loggedUser : undefined,
            Userdb: (prevState ? [...prevState.Userdb,newUser] : [newUser])
        }))


        setFirstName('')
        setLastName('')
        setUsername('')
        setPassword('')

        console.log(JSON.stringify(appState))
    }

    return(
        <div className={styles.form_frame}>
        <div className={styles.create_title}>Create an account</div>
        <div className={styles.input_instructions}>Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and more.</div>
        
        <div className={styles.form_bubble}>
        <div className={styles.little_disclaimer}>*indicates required field</div>
        <div className={styles.form_title}>Personal Information</div>
        <input className={styles.username_input} onChange={e=>setFirstName(e.target.value)} value={firstName} type="text" placeholder="*First Name"/>
        <input className={styles.password_input} onChange={e=>setLastName(e.target.value)} value={lastName} type="text" placeholder="*Last Name"/>

        
        <div className={styles.form_title}>Account Security</div>
        <input className={styles.username_input} onChange={e=>setUsername(e.target.value)} value={username} type="text" placeholder="*Email address"/>
        <div className={styles.input_instructions}>This will be your username</div>
        <input className={styles.password_input} onChange={e=>setPassword(e.target.value)} value={password} type="text" placeholder="*Password"/>
        <div className={styles.input_instructions}>Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.</div>

        <div className={styles.keep_signed_in}>
            <button onClick={()=>{setEmailCheck(!emailCheck)}} className={`${styles.keep_checkbox} ${emailCheck && `${styles.keep_checkbox_toggled}`}`}>
            ✔</button>
            Yes,I'd like email from Starbucks
        </div>

        <div className={styles.form_title}>Terms of use</div>
        <div className={styles.terms_of_use}>
            <button onClick={()=>{setAgreeTerms(!agreeTerms)}} className={`${styles.keep_checkbox} ${agreeTerms && `${styles.keep_checkbox_toggled}`}`}>
            ✔</button>
            <div className={styles.terms_aligner}>
            *I agree to the <a href="">Starbucks® Rewards Terms</a>
            and the <a href="">Starbucks Card Terms</a>
            and have read the <a href="">Starbucks Privacy Statement</a>.
            </div>
        </div>

        <div className={styles.sign_button_frame}>
            <button onClick={()=>createAccount()} className={styles.sign_button}>Create account</button>
        </div>
    </div>
    </div>
    )
}