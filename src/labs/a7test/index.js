import React from "react";
import TestState from "../a7test/state-Test";
import ApplicationState from "./Application-state";


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