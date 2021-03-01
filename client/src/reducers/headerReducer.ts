const initialState = {
    active: "login"
}

export default function(state = initialState, {type, payload}: {type: string, payload: any}) {
    switch(type) {
        case "SET_KEY":
            return {
                ...state,
                active: payload
            }
        default:
            return state
    }
}

export const setKey = (payload: string) => ({type: "SET_KEY", payload})