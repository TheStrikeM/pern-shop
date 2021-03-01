import React, {useState} from 'react';

const LoginForm = ({onLogin}: {onLogin: Function}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const setLogin = () => {
        onLogin({email, password})
    }
    return (
        <form className={"login-form"}>
            <input
                value={email}
                onChange={
                    (e) => setEmail(e.target.value)
                }
                type="text"
                placeholder={"Your email"}
            />

            <input
                value={password}
                onChange={
                    (e) => setPassword(e.target.value)
                }
                type="text"
                placeholder={"Your password"}
            />

            <div
                style={{marginTop: "75px"}}
                onClick={() => setLogin()}
                className="default-button"
            >
                Log in
            </div>
        </form>
    );
};

export default LoginForm;