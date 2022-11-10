

function PostSummaryItem(post){
    return(`
    <div class="list-group-item">
    <div class="row">
                    <div class="col-9">
                        <div class="text-secondary">
                            ${post.topic}
                        </div>
                        <div class="fw-bold">
                             ${post.userName} &nbsp;<i class="fa-solid fa-circle-check"></i>&nbsp;&nbsp;     <span class="text-secondary">- ${post.time}</span>

                        </div>
                        <div class="fw-bold">
                             ${post.title}
                        </div>
                        <div class="text-secondary">
                            ${post.tweets} Tweets
                        </div>
                    </div>
                    <div class="col-3">
                        <img src=" ${post.image}" class="float-end" height="100px">
                    </div>
                </div>
                </div>
    
    
    `)



}

export default PostSummaryItem;