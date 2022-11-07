import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavigationSidebar = (
//     {
//         active = 'explore'
//     }
) => {

    const location = useLocation();
    const {pathname} = location;
    const active = pathname.split('/')
    return (
        <div className="list-group">
            <Link className="list-group-item ">
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-twitter"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                        Tuiter
                    </div>
                </div>
            </Link>
            <Link to="/tuiter" className={`list-group-item
                    ${active.length < 3 ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-house-door-fill"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                        Home
                    </div>
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item
                    ${active[2] === 'explore' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-hash"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                        Explore
                    </div>
                </div>
            </Link>

            <Link to="/"  className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-tags-fill"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                        Lab
                    </div>
                </div>
            </Link>


            <a className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-bell-fill"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                        Notifications
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                        Messages
                    </div>
                </div>

            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-bookmarks-fill"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                        Bookmarks
                    </div>
                </div>

            </a>
            <a className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-list-ul"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                        Lists
                    </div>
                </div>

            </a>
            {/*<link to="/tuiter/profile"  className={`list-group-item*/}
            {/*        ${active === 'profile' ? 'active' : ''}`}>*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-2">*/}
            {/*            <i className="bi bi-person-fill"></i>*/}
            {/*        </div>*/}
            {/*        <div className="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">*/}
            {/*            Profile*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</link>*/}
            <Link to="/tuiter/profile" className={`list-group-item
                    ${active[2] === 'profile' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-person-fill"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                        Profile
                    </div>
                </div>
            </Link>
            <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-info-circle-fill"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                        More
                    </div>
                </div>



            </a>
        </div>

    );
};
export default NavigationSidebar;