import React from "react";
import {useSelector} from "react-redux";
import ProfileItem from "./profileitem";


const ProfileComponent = () => {
    const profiles = useSelector((state) => state)

    // const profiles = useSelector(state => state.profiles)
    return(
                // <ul className="list-group">
                // {
                //     profiles.map(profiles =>
                //
                //                      <ProfileItem  key={profiles} Post={profiles}/>
                //
                //     )
                // }
                // </ul>
        <ProfileItem profiles={profiles}/>

    );

}

export default ProfileComponent;