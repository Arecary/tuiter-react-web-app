import React from "react";
import ProfileComponent from "./ProfileComponent";
import {createStore} from "redux";
import {Provider} from "react-redux";
import profilesReducer from "./profile-reducer";

const store = createStore(profilesReducer)


const Profile =()=>{



    return(
        <div>
            <Provider store={store}>
                <ProfileComponent/>
            </Provider>
        </div>
    )

}

export default Profile;