import currentUserReducer from "./userProfile-reducer";
import userdataReducer from "./userProfile-reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Profile from "./profile";
import {configureStore} from "@reduxjs/toolkit";
import ChangeData from "./changeData";

// const store = createStore(currentUserReducer)
const store = createStore(userdataReducer)

// const store = configureStore(
//     {reducer: {userdata:userdataReducer}});



const ApplicationState = () => {
    return (
        <>
            <Provider store={store}>
                <h3>Application</h3>
                <Profile/>

                {/*<currentUserReducer/>*/}
            </Provider>
        </>
    )
}

export default ApplicationState;