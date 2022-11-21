import React, {useEffect} from "react";

import TuitItems from "./TuitItem";
import {useDispatch, useSelector} from "react-redux";
import TuitStats from "./TuitStats";
import {findTuitsThunk}
    from "../../services/tuits-thunks";



const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    // const {tuits, loading} = useSelector(
    //     state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])


    return(

        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            <div className="list-group-item a6-main">



                {
                    tuits.map(Post =>
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