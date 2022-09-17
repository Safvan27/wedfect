import { LOGIN_DATA } from "./types";

const initialState = {
    loginData: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_DATA:
            console.log('inside ogindata reducer:>> ');
            return {
                ...state,
                loginData: action.payload,
                error: "",
            };

        default:
            return state;
    }
};
export default reducer;
