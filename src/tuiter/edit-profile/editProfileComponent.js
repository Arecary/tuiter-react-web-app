import React from "react";
import {useSelector} from "react-redux";
import EditProfiles from "./EditProfile";

const EditProfileComponent = () => {
    const profiles = useSelector((state) => state.profiles)
    return(
        <EditProfiles profiles={profiles}/>
    )
}

export default EditProfileComponent;