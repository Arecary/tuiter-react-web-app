import React from "react";
import {createStore} from "redux";
import profiles from "../data/profiledata";
import {Provider} from "react-redux";
import EditProfileComponent from "./editProfileComponent";
import {configureStore} from "@reduxjs/toolkit";
import profilesReducer from "../profile/profile-reducer"


const store = createStore(profilesReducer)

// const store = configureStore(
//     {reducer:{profiles: profilesReducer}});


const EditProfile =()=>{


    return(
        <div>

            <Provider store={store}>
                <EditProfileComponent/>
            </Provider>


        </div>
    )

}

export default EditProfile;