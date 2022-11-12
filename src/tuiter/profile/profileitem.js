import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";



const ProfileItem = (
    {profiles}

    // {
    //     profiles = {
    //         FirstName: 'Shi', lastName: 'Zeng', handle: '@areca',
    //         profilePicture: 'Reat.png', 	bannerPicture: 'univers.jpg',
    //         bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
    //         website: 'youtube.com/123',
    //         location: 'Boston, MA',	dateOfBirth: '2/3/1996',	dateJoined: ' Joined 4/2022',
    //         followingCount: 340,	followersCount: 223
    //     }}

) => {
    // const profiles = useSelector((state) => state)


    const navigate = useNavigate();


    return(
        <div>

        <div className="row">
            <div className="col-2 position-relative" >
                <h3>
                    <i className="bi bi-arrow-left position-absolute start-50 "></i>
                </h3>

            </div>
            <div className="col-10">
                <h4 className="fw-bolder">{profiles.FirstName}</h4>
                <div className="text-secondary">
                    6,114 Tweets
                </div>
            </div>
        </div>

        <div className="position-relative">
            <img src={`/images/${profiles.bannerPicture}`} width="100%" height="300em" className="pb-5"/>
            <img src={`/images/${profiles.profilePicture}`} className="rounded-circle position-absolute wd-nudge-up bottom-0 bg-light " width="100em" height="100em"/>

            <button  className="btn btn-light position-absolute end-0 bottom-0" onClick={()=>navigate("/tuiter/edit-profile")} >Edit profile</button>
        </div>

        <div className="ps-2 mt-3">
            <h5 className="fw-bolder">{profiles.FirstName}</h5>
            <div className="text-secondary">
                {profiles.handle}
            </div>

            <div>
                {profiles.bio}
            </div>

            <div className="row mt-3">
                <div className="col-3">
                    <i className="bi bi-geo-alt">{profiles.location}</i>
                </div>

                <div className="col-3">
                    <i className="bi bi-balloon">{profiles.dateOfBirth}</i>
                </div>

                <div className="col-3">
                    <i className="bi bi-calendar-check">{profiles.dateJoined}</i>
                </div>

            </div>

            <div className="row">
                <div className="col-3">

                    {profiles.followingCount}&nbsp;
                    Following
                </div>

                <div className="col-3">
                    {profiles.followersCount}&nbsp;
                    Followers
                </div>

            </div>
        </div>


        </div>
    );

}

export default ProfileItem;