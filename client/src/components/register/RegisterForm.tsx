import React, {useState} from 'react';

const RegisterForm = ({onRegister}: {onRegister: Function}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeat, setRepeat] = useState('')

    const setRegister = () => {
        onRegister({email, password})
    }
    return (
        <form className={"reg-form"}>
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
            <input
                value={repeat}
                onChange={
                    (e) => setRepeat(e.target.value)
                }
                type="text"
                placeholder={"Repeat password"}
            />

            <div
                style={{marginTop: "75px"}}
                onClick={() => setRegister()}
                className="default-button"
            >
                Log in
            </div>
        </form>
    );
};

export default RegisterForm;