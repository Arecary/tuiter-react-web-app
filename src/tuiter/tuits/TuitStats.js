import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {likeTuit} from "./tuitsList-reducer"
import {unlikeTuit} from "./tuitsList-reducer"




const TuitStats = (
    {
                       Post = {
                           "avatarIcon": "starship.jpg", "userName": "Elon Musk", "handle": '@elonmusk',
                           "time": '23h', "title1": 'Amazing show about ', "link": '@lnspiration4x ',
                           "title2": 'mission!', "image": '../../../images/countdown.jpeg',
                           "content": 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
                           "content2": 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.',
                           "replies": 4200, "retuits": 3500, "likes": 37500, "liked": true

                       }
                   }
                   ) => {
    // const Post = useSelector((state) => state.tuitsList)
    const dispatch = useDispatch();
    const unlikeclick = (Post) =>{
        dispatch(likeTuit(Post))

    }
    const likeclick = (Post) =>{
        dispatch(unlikeTuit(Post))

    }

    return (

        <div className="row mb-3">
            <div className="col-1">

            </div>

            <div className="col-11">
                <div className="row">
                    <div className="col-3 text-secondary">
                        <button className="btn btn-light">
                        <i className="bi bi-chat"></i>
                        </button>&nbsp;&nbsp;{Post.replies}
                    </div>

                    <div className="col-3 text-secondary">
                        <button className="btn btn-light">
                        <i className="bi bi-arrow-repeat"></i>
                        </button>&nbsp;&nbsp;{Post.retuits}
                    </div>

                    <div className="col-3 text-secondary">
                        {
                            Post.liked &&
                            <div>
                                <button className="btn btn-light " onClick={()=>likeclick(Post)}>
                                <a className="bi bi-heart-fill text-danger" ></a>
                                </button>
                                &nbsp;&nbsp;{Post.likes}

                            </div>
                        }
                        {
                            !Post.liked &&
                            <div>
                                <button className="btn btn-light" onClick={()=>unlikeclick(Post)}>
                                <i className="bi bi-heart" ></i>
                                </button>&nbsp;&nbsp;{Post.likes}

                            </div>
                        }

                    </div>

                    <div className="col-3 text-secondary">
                        <button className="btn btn-light">
                        <i className="bi bi-share"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )

}

export default TuitStats;