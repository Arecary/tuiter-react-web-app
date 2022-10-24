
import NavigationSidebar from "./navigation-sidebar";
import {Route, Routes} from "react-router";
import Home from "./home";
import Explore from "./explore";
import WhoToFollowList from "./who-to-follow-list";



function Tuiter() {

    return(
        <div>
            <div className="row">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="home"/>
                </div>

                <div className="col-10 col-lg-7 col-xl-6" style={{"position": "relative"}}>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path="explore" element={<Explore/>}/>
                    </Routes>


                </div>

                <div className="col-4 d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
                

            </div>



        </div>
    );
}
export default Tuiter