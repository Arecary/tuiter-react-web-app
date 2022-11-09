import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux";
import {updateProfile} from "../profile/profile-reducer";

const EditProfiles = (
    {profiles}
) => {

    const dispatch = useDispatch();
    const [name, setName] = useState(profiles.FirstName + profiles.lastName)
    const changeName = (event) => {
        const newName = event.target.value
        setName(newName)
    }

    const navigate = useNavigate();

    const update = (profiles, newTuitText) => {
        dispatch(updateProfile({
                                   ...profiles,
                                   FirstName: newTuitText
                               }
                 )
        );
    }

    return (
        <div>

            <div className="row mb-2 mt-1">
                <div className="col-2 position-relative">
                    <h3>
                        <a className="bi bi-x-lg float-left" href="/tuiter/profile"></a>
                    </h3>

                </div>
                <div className="col-10 position-relative">
                    <h4 className="fw-bolder">Edit profile</h4>

                    <button className="btn btn-dark rounded-pill position-absolute end-0 top-0"
                            onClick={() => navigate("/tuiter/profile")}>save
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
                <textarea cols="50" value={profiles.FirstName}
                          onChange={(e) => update(profiles, e.target.value)}></textarea>
                <pre>
                    {name}
                </pre>
            </div>

            <div>
                <br/>
                <br/>
                Location
                <br/>
                <textarea cols="50" value={profiles.location}></textarea>
            </div>

            <div>
                <br/>
                <br/>
                Bio
                <br/>
                <textarea cols="50" value={profiles.bio}></textarea>
            </div>

            <div>
                <br/>
                <br/>
                website
                <br/>
                <textarea cols="50" value={profiles.website}></textarea>
            </div>

            <div>
                <br/>
                <br/>
                Date of birth
                <br/>
                <textarea cols="50" value={profiles.dateOfBirth}></textarea>
            </div>


        </div>

    )

}

export default EditProfiles;