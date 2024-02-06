import { useContext, useState } from "react"
import { AppStateContext } from "../_app"
import { User } from "@/models/User"
import { useRouter } from "next/router"
import { AppState } from "@/models/AppState"

export default function Signin(){
    const {appState,setAppState} = useContext(AppStateContext)
    const router = useRouter()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [keepSigned,setKeepSigned] = useState(true)

    const login = () => {
        const tempUser:User = {
            firstName: username,
            lastName: username,
            username: username,
            password: password
        }

        setAppState(prevState => ({
            ...prevState, 
            loggedUser: tempUser,
            Userdb: prevState ? prevState.Userdb : []
        }))

        setUsername('')
        setPassword('')
        router.push('/')
    }

    return(
        <div className="form-frame">
            <div className="signin-title">Sign in or create an account</div>
            
            <div className="form-bubble">
            <div className="little-disclaimer">*indicates required field</div>
            <input className="username-input" onChange={e=>setUsername(e.target.value)} value={username} type="text" placeholder="*Username or email address"/>
            <input className="password-input" onChange={e=>setPassword(e.target.value)} value={password} type="text" placeholder="*Password"/>
            <div className="keep-signed-in">
                <button onClick={()=>{setKeepSigned(!keepSigned)}} className={`keep-checkbox ${keepSigned && `keep-checkbox-toggled`}`}>
                ✔</button>
                Keep me signed in.
                <a href="">Details</a>
            </div>
            <a className="forgot-link" href="">Forgot your username?</a>
            <a className="forgot-link" href="">Forgot your password?</a>
            <div className="sign-button-frame">
                <button onClick={()=>{login()}} className="sign-button">Sign in</button>
            </div>
        </div>
        </div>
    )
}