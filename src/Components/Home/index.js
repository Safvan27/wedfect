import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { setLogin } from "../../redux/actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";

const Home = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log("props in home :>> ", props.loginData);
    }, []);
    const navigateToLogin = (data) => {
        props.setLoginData(true);
        navigate("/login");
    };

    return (
        <div>
            <Button variant="contained" onClick={navigateToLogin}>
                Login Page
            </Button>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    setLoginData: (data) => {
        dispatch(setLogin(data));
    },
});
const mapStateToProps = (store) => {
    return {
        loginData: store.loginData,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
