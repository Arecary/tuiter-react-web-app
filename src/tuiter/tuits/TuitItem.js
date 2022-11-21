import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteTuit} from "./tuitsList-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitsList from "./TuitsList";




const TuitItems = ( {Post}

    // {
    //
    //     Post = {
    //         "avatarIcon": 'starship.jpg', "userName": 'Elon Musk', "handle": '@elonmusk',
    //         "time": '23h', "title1": 'Amazing show about ', "link": '@lnspiration4x ',
    //        " title2": 'mission!', "image": '../../../images/countdown.jpeg',
    //         "content": 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
    //         "content2": 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.',
    //         "replies": 4200, "retuits": 3500, "likes": 37500, "liked": true
    //
    //     }
    // }
) => {

    // const Post = useSelector(state => state.tuitsList)
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        // dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id));
    }


    return (


            <div className="row" >
                <div className="col-1 ">
                    <img src={`/images/${Post.avatarIcon}`} className="rounded-circle" width="50em"
                         height="50em"
                         alt="321"/>

                </div>

                <div className="col-11 ">
                    <div className="fw-bold position-relative">
                        {Post.userName} <i className="fa-solid fa-circle-check"></i> <span
                        className="text-secondary">{Post.handle} &#x2022; {Post.time}</span>
                        <i className="fa-solid fa-ellipsis position-absolute end-0"></i>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(Post._id)}></i>
                    </div>

                    <div>
                        {Post.title1}<span className="text-primary">{Post.link}</span>{Post.title2}
                    </div>
                    <br/>
                    <div>

                        {/*<div className="rounded">*/}
                        {/*    <img src={`/images/${Post.image}`} width="100%" className="rounded"*/}
                        {/*         alt="123"/>*/}
                        {/*</div>*/}


                        {/*<div className=" pt-2 ps-2">*/}
                        {/*    <div className="fw-bold">*/}
                        {/*        {Post.content}*/}
                        {/*    </div>*/}

                        {/*    <div className="text-secondary">*/}
                        {/*        {Post.content2}*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<i className="bi bi-x-lg float-end"*/}
                        {/*   onClick={() => deleteTuitHandler(tuit._id)}></i>*/}
                    </div>
                    <br/>

                    {/*<TuitStats Post={Post}/>*/}

                    {/*<div>*/}
                    {/*    <ul className="list-group list-group-horizontal ">*/}
                    {/*        <li className="list-group-item text-secondary border border-0 me-3 tool-bar">*/}
                    {/*            <i className="bi bi-chat-fill"></i>&nbsp;&nbsp;{Post.replies}*/}
                    {/*        </li>*/}

                    {/*        <li className="list-group-item text-secondary border border-0 me-3 tool-bar">*/}
                    {/*            <i className="bi bi-globe2"></i>&nbsp;&nbsp;{Post.retuits}*/}
                    {/*        </li>*/}

                    {/*        <li className="list-group-item text-secondary border border-0 me-3 tool-bar">*/}
                    {/*            <i className="bi bi-heart-fill text-danger"></i>&nbsp;&nbsp;{Post.likes}*/}
                    {/*        </li>*/}

                    {/*        <li className="list-group-item text-secondary border border-0 tool-bar">*/}
                    {/*            <i className="bi bi-upload"></i>*/}
                    {/*        </li>*/}


                    {/*    </ul>*/}
                    {/*</div>*/}

                </div>
            </div>


    );
};

export default TuitItems;




