import React, {useState} from 'react';

const RegisterForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeat, setRepeat] = useState('')
    return (
        <form className={"reg-form"}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder={"Your email"}/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder={"Your password"}/>
            <input value={repeat} onChange={(e) => setRepeat(e.target.value)} type="text" placeholder={"Repeat password"}/>

            <div style={{marginTop: "75px"}} className="default-button">Log in</div>
        </form>
    );
};

export default RegisterForm;