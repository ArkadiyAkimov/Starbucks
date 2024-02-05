import { useState } from "react"

export default function Signin(){

    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [keepSigned,setKeepSigned] = useState(false)

   

    return(
        <div className="form-frame">
            <div className="signin-title">Sign in or create an account</div>
            <div className="little-disclaimer">*indicates required field</div>
            <input className="username-input" onChange={e=>setUsername(e.target.value)} type="text" placeholder="*Username or email address"/>
            <input className="password-input" onChange={e=>setPassword(e.target.value)} type="text" placeholder="*Password"/>
            <div className="keep-signed-in">
                <button onClick={()=>{setKeepSigned(!keepSigned)}} className={`keep-checkbox ${keepSigned && `keep-checkbox-toggled`}`}>
                ✔</button>
                Keep me signed in.
                <a href="">Details</a>
            </div>
            <a className="forgot-link" href="">Forgot your username?</a>
            <a className="forgot-link" href="">Forgot your password?</a>
            <div className="sign-button-frame">
                <button className="sign-button">Sign in</button>
            </div>
        </div>
    )
}