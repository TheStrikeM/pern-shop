import React, {useState} from 'react';

const LoginForm = () => {
    const {email, setEmail}: any = useState('')
    const {password, setPassword}: any = useState('')
    return (
        <form className={"login-form"}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder={"Your email"}/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder={"Your password"}/>

            <div style={{marginTop: "75px"}} className="default-button">Log in</div>
        </form>
    );
};

export default LoginForm;