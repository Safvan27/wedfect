import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { setLogin } from "../../redux/actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log("props in login :>> ", props.loginData);
    }, []);
    const navigateToHome = () => {
        props.setLoginData(false);
        navigate("/");
    };

    return (
        <div>
            <Button variant="contained" onClick={navigateToHome}>
                Back
            </Button>
            <h2>Login Page</h2>
            <h2>{props.loginData}</h2>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    setLogin: (data) => {
        dispatch(setLogin(data));
    },
    setLoginData: (data) => {
        dispatch(setLogin(data));
    },
});
const mapStateToProps = (store) => {
    return {
        loginData: store.loginData,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
