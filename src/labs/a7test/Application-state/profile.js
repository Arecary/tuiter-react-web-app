
import {useDispatch, useSelector} from "react-redux";
import ProfileItem from "./profileItem";
import ChangeData from "./changeData";
import {changeData} from "./userProfile-reducer";

const Profile = () => {
    const currentUser = useSelector((state)=> state)
    const dispatch = useDispatch();

    const change =(currentUser) => {
        dispatch(changeData(currentUser))


        // alert(currentUser.name)
    }


    return(
        <>
            <h4>Profile : </h4>
            <ProfileItem profiles={currentUser}/>
            <br/>
            {currentUser.gender}
            <br/>
            {currentUser.email}
            <ChangeData data={currentUser} change={change}/>

        </>
    )
}

export default Profile;