
import NavigationSidebar from "./navigation-sidebar";
import {Route, Routes} from "react-router";
import Home from "./home";
import Explore from "./explore";
import Profile from "./profile";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import tuitsListReducer from "./tuits/tuitsList-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import profilesReducer from "./profile/profile-reducer";
import {Provider} from "react-redux";
import EditProfile from "./edit-profile";

const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, tuitsData: tuitsListReducer, profiles: profilesReducer}});




const Tuiter = () => {



    return(
        <Provider store={store}>


        <div>
            <div className="row">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="home"/>
                </div>

                <div className="col-10 col-lg-7 col-xl-6" style={{"position": "relative"}}>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path="explore" element={<Explore/>}/>
                        <Route path="profile/*" element={<Profile/>}/>
                        <Route path="edit-profile" element={<EditProfile/>}/>
                    </Routes>


                </div>

                <div className="col-4 d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
                

            </div>



        </div>
        </Provider>
    );
}
export default Tuiter