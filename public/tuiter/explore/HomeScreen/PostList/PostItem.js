

function PostItem(post){
    return(`
    <div class="list-group-item a5-main">
    <div class="row"> 
    <div class="col-1 ">
    <img src="${post.avatarIcon} " class="rounded-circle" width="50em" height="50em" alt="321">
    </div>
    
    <div class="col-11 ">
        <div class="fw-bold position-relative">
        ${post.userName} <i class="fa-solid fa-circle-check"></i> <span class="text-secondary">${post.handle} &#x2022; ${post.time}</span>
        <i class="fa-solid fa-ellipsis position-absolute end-0"></i>
        </div>
        
        <div>
        ${post.title1}<span class="text-primary">${post.link}</span>${post.title2}
        </div>
        <br>
        <div class="border rounded border-dark">
            <div class="rounded">
            <img src="${post.image}" width="100%"  CLASS="rounded" alt="123">
            </div>
            

            <div class="border-top border-dark">
                <div class="fw-bold">
                 ${post.content}
                </div>
                
                 <div class="text-secondary">
                ${post.content2}
                </div>
            </div>
        </div>
        <br>
        <div>
        <ul class="list-group list-group-horizontal ">
            <li class="list-group-item text-secondary border border-0 me-3 tool-bar">
            <i class="fa-regular fa-comment"></i>&nbsp;&nbsp;${post.message}
            </li>
            
            <li class="list-group-item text-secondary border border-0 me-3 tool-bar">
            <i class="fa-solid fa-arrow-right-arrow-left"></i>&nbsp;&nbsp;${post.transmit}
            </li>
            
            <li class="list-group-item text-secondary border border-0 me-3 tool-bar">
            <i class="fa-regular fa-heart"></i>&nbsp;&nbsp;${post.love}
            </li>
            
            <li class="list-group-item text-secondary border border-0 tool-bar">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </li>
        
        
        </ul>
        </div>
                      
        </div>
        </div>
        </div>
       
    `)

}

export default PostItem;