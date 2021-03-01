import React from 'react'
import './app.sass'
import MainSwitchs from "./switchs/MainSwitchs";
import {authUser} from "./actions/authActions";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()

    React.useEffect(() => {
        authUser(dispatch)
    }, [])
    return (
        <div className="App">
            <MainSwitchs />
        </div>
    );
}

export default App;
