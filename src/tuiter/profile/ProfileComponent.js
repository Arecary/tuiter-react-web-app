import React from "react";
import {useSelector} from "react-redux";
import ProfileItem from "./profileitem";

const ProfileComponent = () => {

    const profiles = useSelector(state => state.profiles)
    return(
                <>
                {
                    profiles.map(info => <ProfileItem  key={info} Post={info}/>
                    )
                }
                </>
    );

}

export default ProfileComponent;