import React, {useState} from 'react';
import {message} from 'antd'

const LoginForm = ({onLogin}: {onLogin: Function}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const viewError = (mess: string): void => {
        message.error(mess);
    }

    const viewSuccess = (mess: string): void => {
        message.success(mess);
    }


    const setLogin = () => {
        onLogin({email, password}).then((res: any) => {
            console.log(res)
            if(res instanceof Object) {
                return viewSuccess(res.message)
            }
            viewError(res)
        })
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