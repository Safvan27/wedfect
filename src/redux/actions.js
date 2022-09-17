import axios from "axios";

import { LOGIN_DATA } from "./types";

export function setLogin(datas) {
    console.log("datas 1:>> ", datas);
    return function (dispatch, state) {
        console.log("datas 2:>> ", datas);

        const response = datas;
        return dispatch({
            type: LOGIN_DATA,
            payload: datas,
            response,
        });
    };
}
