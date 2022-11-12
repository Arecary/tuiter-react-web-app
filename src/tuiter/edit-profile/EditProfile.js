import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux";
import {updateProfile} from "../profile/profile-reducer";

const EditProfiles = (
    {profiles}
) => {

    const dispatch = useDispatch();
    const [name, setName] = useState(profiles.FirstName)
    const [location, setLocation] = useState(profiles.location)
    const [bio, setBio] = useState(profiles.bio)
    const [website, setWebsite] = useState(profiles.website)
    const [dateOfBirth, setDateOfBirth] = useState(profiles.dateOfBirth)

    let navigate = useNavigate();

    const update = () => {
        const newProfile = {
            FirstName: name,
            location: location,
            bio: bio,
            website: website,
            dateOfBirth: dateOfBirth
        }
        navigate('/tuiter/profile')
        dispatch(updateProfile(newProfile))

    }

    return (
        <div>

            <div className="row mb-2 mt-1">
                <div className="col-2 position-relative">
                    <h3>
                        <a className="bi bi-x-lg float-left"
                           onClick={() => navigate("/tuiter/profile")}></a>
                    </h3>

                </div>
                <div className="col-10 position-relative">
                    <h4 className="fw-bolder">Edit profile</h4>

                    <button className="btn btn-dark rounded-pill position-absolute end-0 top-0"
                            onClick={update}>save
                    </button>

                </div>
            </div>

            <div className="position-relative">
                <img src="/images/univers.jpg" width="100%" height="300em" className="pb-5"/>
                <img src="/images/Reat.png"
                     className="rounded-circle position-absolute wd-nudge-up bottom-0 bg-light "
                     width="100em" height="100em"/>
            </div>

            <div>
                <br/>
                <br/>
                Name
                <br/>
                <textarea cols="50" value={name}
                          onChange={(e) => setName(e.target.value)}></textarea>
            </div>

            <div>
                <br/>
                <br/>
                Location
                <br/>
                <textarea cols="50" value={location}
                          onChange={(e) => setLocation(e.target.value)}></textarea>
            </div>

            <div>
                <br/>
                <br/>
                Bio
                <br/>
                <textarea cols="50" value={bio}
                          onChange={(e) => setBio(e.target.value)}></textarea>
            </div>

            <div>
                <br/>
                <br/>
                website
                <br/>
                <textarea cols="50" value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                ></textarea>
            </div>

            <div>
                <br/>
                <br/>
                Date of birth
                <br/>
                <textarea cols="50" value={dateOfBirth}
                          onChange={(e) => setDateOfBirth(e.target.value)}></textarea>
            </div>


        </div>

    )

}

export default EditProfiles;