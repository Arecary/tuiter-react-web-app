import {useSelector} from "react-redux";

const Profile = () => {
    const currentUser = useSelector((state)=> state)
    return(
        <>
            <h4>Profile : </h4>
            {currentUser.name}
        </>
    )
}

export default Profile;