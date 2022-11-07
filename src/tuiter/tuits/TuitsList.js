import React from "react";
// import postsArray from "./post.json";
import TuitItems from "./TuitItem";
import {useSelector} from "react-redux";
import TuitStats from "./TuitStats";



const TuitsList = () => {
    const postsArray = useSelector(state => state.tuitsList)
    return(
        <ul className="list-group">
            <div className="list-group-item a6-main">
            {
                postsArray.map(Post =>
                                   <div>
                                       <TuitItems key={Post} Post={Post}/>
                                       <TuitStats key={Post} Post={Post}/>
                                   </div>

                )
            }
            </div>
        </ul>
    );
};

export default TuitsList;