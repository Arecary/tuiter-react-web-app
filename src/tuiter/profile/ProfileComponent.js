import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProfileItem from "./profileitem";
import EditProfiles from "../edit-profile/EditProfile";
import {updateProfile} from "./profile-reducer";


const ProfileComponent = () => {
    const profiles = useSelector((state) => state.profiles)

    // const dispatch = useDispatch();
    // const [name,setName] = useState(profiles.FirstName )
    // const updateName = () => {
    //     dispatch(updateProfile(name))
    //
    // }






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
        <>
        <ProfileItem profiles={profiles}

        />
        {/*<EditProfiles profiles={profiles}*/}
        {/*              updateName={updateName}*/}
        {/*              name = {name}*/}
        {/*              setName={setName}*/}

        {/*/>*/}
        </>
    );

}

export default ProfileComponent;