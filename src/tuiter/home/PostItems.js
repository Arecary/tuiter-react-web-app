import React from "react";

const PostItems = (
    {
        Post = { avatarIcon: 'starship.jpg', userName: 'Elon Musk', handle: '@elonmusk',
            time: '23h', title1: 'Amazing show about ', link: '@lnspiration4x ',
            title2: 'mission!', image: '../../../images/countdown.jpeg',
            content: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
            content2: 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.',
            message: '4.2k', transmit: '3.5k', love: '37.5k'


        }
    }
) => {
    return (
        <div className="list-group-item a6-main">
            <div className="row">
                <div className="col-1 ">
                    <img src={`/images/${Post.avatarIcon}`} className="rounded-circle" width="50em" height="50em"
                         alt="321"/>
                </div>

                <div className="col-11 ">
                    <div className="fw-bold position-relative">
                        {Post.userName} <i className="fa-solid fa-circle-check"></i> <span
                        className="text-secondary">{Post.handle} &#x2022; {Post.time}</span>
                        <i className="fa-solid fa-ellipsis position-absolute end-0"></i>
                    </div>

                    <div>
                        {Post.title1}<span className="text-primary">{Post.link}</span>{Post.title2}
                    </div>
                    <br/>
                        <div >
                            <div className="rounded">
                                <img src={`/images/${Post.image}`} width="100%" className="rounded" alt="123"/>
                            </div>


                            <div className=" pt-2 ps-2">
                                <div className="fw-bold">
                                    {Post.content}
                                </div>

                                <div className="text-secondary">
                                    {Post.content2}
                                </div>
                            </div>
                        </div>
                        <br/>
                            <div>
                                <ul className="list-group list-group-horizontal ">
                                    <li className="list-group-item text-secondary border border-0 me-3 tool-bar">
                                        <i className="bi bi-chat-fill"></i>&nbsp;&nbsp;{Post.message}
                                    </li>

                                    <li className="list-group-item text-secondary border border-0 me-3 tool-bar">
                                        <i className="bi bi-globe2"></i>&nbsp;&nbsp;{Post.transmit}
                                    </li>

                                    <li className="list-group-item text-secondary border border-0 me-3 tool-bar">
                                        <i className="bi bi-heart-fill"></i>&nbsp;&nbsp;{Post.love}
                                    </li>

                                    <li className="list-group-item text-secondary border border-0 tool-bar">
                                        <i className="bi bi-upload"></i>
                                    </li>


                                </ul>
                            </div>

                </div>
            </div>
        </div>



);
};

export default PostItems;




