import React from "react";
import TestState from "../a7test/state-Test";
import ApplicationState from "./Application-state";
import {configureStore} from "@reduxjs/toolkit";
// import {createStore} from "redux";
// import {Provider} from "react-redux";
// import userSliceReducer from "./Application-state/userProfile-reducer";
//
// const store = createStore(userSliceReducer)




const Test= () => {
    return(
        <>
            <h1>test for a7</h1>

            <ApplicationState/>

            <TestState/>
        </>
    );
};


export default Test;