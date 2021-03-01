import React, {useState} from 'react';
import {message} from "antd";
import {useSelector} from "react-redux";
import {setRegisterLoading} from "../../reducers/loadingReducer";

const RegisterForm = ({onRegister, dispatch}: {onRegister: Function, dispatch: any}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeat, setRepeat] = useState('')

    const {isLoadingRegister} = useSelector((state: any) => ({
        isLoadingRegister: state.loading.isRegisterLoaded
    }))

    const setRegister = () => {
        dispatch(setRegisterLoading(false))
        onRegister({email, password}).then((res: any) => {
            console.log(res)
            dispatch(setRegisterLoading(true))
            if(typeof res === "object") {
                message.success(String(res.message), 2)
            } else {
                message.error(String(res), 2)
            }
        })
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
                className={"default-button" + (isLoadingRegister ? "" : "-loading")}
            >
                {isLoadingRegister ? "Sign up" : "Loading..."}
            </div>
        </form>
    );
};

export default RegisterForm;