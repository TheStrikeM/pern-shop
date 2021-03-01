import React, {useState} from 'react'
import {message} from 'antd'
import {useSelector} from "react-redux";
import {setLoginLoading} from "../../reducers/loadingReducer";


const LoginForm = ({onLogin, dispatch}: {onLogin: Function, dispatch: any}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {isLoginLoading} = useSelector((state: any) => ({
        isLoginLoading: state.loading.isLoginLoaded
    }))

    const setLogin = () => {
        dispatch(setLoginLoading(false))
        onLogin({email, password}).then((res: any) => {
            console.log(`Eto ${res}`)
            dispatch(setLoginLoading(true))
            if(typeof res === "object") {
                message.success(String(res.message), 2)
            } else {
                message.error(String(res), 2)
            }

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
                type="password"
                placeholder={"Your password"}
            />

            <div
                style={{marginTop: "75px"}}
                onClick={() => setLogin()}
                className={"default-button" + (isLoginLoading ? "" : "-loading")}
            >
                {isLoginLoading ? "Log in" : "Loading..."}
            </div>
        </form>
    );
};

export default LoginForm;