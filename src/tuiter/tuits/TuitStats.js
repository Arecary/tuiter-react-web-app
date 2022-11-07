import React from "react";

const TuitStats = ({
                       Post = {
                           avatarIcon: 'starship.jpg', userName: 'Elon Musk', handle: '@elonmusk',
                           time: '23h', title1: 'Amazing show about ', link: '@lnspiration4x ',
                           title2: 'mission!', image: '../../../images/countdown.jpeg',
                           content: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
                           content2: 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.',
                           replies: 4200, retuits: 3500, likes: 37500, liked: true

                       }
                   }) => {

    return (

        <div className="row mb-3">
            <div className="col-1">

            </div>

            <div className="col-11">
                <div className="row">
                    <div className="col-3 text-secondary">
                        <i className="bi bi-chat"></i>&nbsp;&nbsp;{Post.replies}
                    </div>

                    <div className="col-3 text-secondary">
                        <i className="bi bi-arrow-repeat"></i>&nbsp;&nbsp;{Post.retuits}
                    </div>

                    <div className="col-3 text-secondary">
                        {
                            Post.liked &&
                            <div>
                                <i className="bi bi-heart-fill text-danger"></i>&nbsp;&nbsp;{Post.likes}
                            </div>
                        }
                        {
                            !Post.liked &&
                            <div>
                                <i className="bi bi-heart"></i>&nbsp;&nbsp;{Post.likes}
                            </div>
                        }

                    </div>

                    <div className="col-3 text-secondary">
                        <i className="bi bi-share"></i>
                    </div>
                </div>

            </div>
        </div>

    )

}

export default TuitStats;