import { User } from "@/models/User"
import { useState } from "react"

export default function Create(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [emailCheck,setEmailCheck] = useState(false)
    const [agreeTerms,setAgreeTerms] = useState(false)

    const createAccount = () => {

        if(!agreeTerms) return

        const user:User = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password
        }

        setFirstName('')
        setLastName('')
        setUsername('')
        setPassword('')

        console.log(user)
    }

    return(
        <div className="form-frame">
        <div className="create-title">Create an account</div>
        <div className="input-instructions">Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and more.</div>
        
        <div className="form-bubble">
        <div className="little-disclaimer">*indicates required field</div>
        <div className="form-title">Personal Information</div>
        <input className="username-input" onChange={e=>setFirstName(e.target.value)} value={firstName} type="text" placeholder="*First Name"/>
        <input className="password-input" onChange={e=>setLastName(e.target.value)} value={lastName} type="text" placeholder="*Last Name"/>

        
        <div className="form-title">Account Security</div>
        <input className="username-input" onChange={e=>setUsername(e.target.value)} value={username} type="text" placeholder="*Email address"/>
        <div className="input-instructions">This will be your username</div>
        <input className="password-input" onChange={e=>setPassword(e.target.value)} value={password} type="text" placeholder="*Password"/>
        <div className="input-instructions">Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.</div>

        <div className="keep-signed-in">
            <button onClick={()=>{setEmailCheck(!emailCheck)}} className={`keep-checkbox ${emailCheck && `keep-checkbox-toggled`}`}>
            ✔</button>
            Yes,I'd like email from Starbucks
        </div>

        <div className="form-title">Terms of use</div>
        <div className="terms-of-use">
            <button onClick={()=>{setAgreeTerms(!agreeTerms)}} className={`keep-checkbox ${agreeTerms && `keep-checkbox-toggled`}`}>
            ✔</button>
            <div className="terms-aligner">
            *I agree to the <a href="">Starbucks® Rewards Terms</a>
            and the <a href="">Starbucks Card Terms</a>
            and have read the <a href="">Starbucks Privacy Statement</a>.
            </div>
        </div>

        <div className="sign-button-frame">
            <button onClick={()=>createAccount()} className="sign-button">Create account</button>
        </div>
    </div>
    </div>
    )
}