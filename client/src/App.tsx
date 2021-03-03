import React from 'react'
import './app.sass'
import 'antd/dist/antd.css'
import MainSwitchs from "./switchs/MainSwitchs";
import {authUser} from "./actions/authActions";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(authUser())
    }, [])
    return (
        <div className="App">
            <MainSwitchs />
        </div>
    );
}

export default App;
