import post1 from "./post1.js";
import PostItem from "./PostItem.js";

function PostList(){

    return(`
    <ul class="list-group">
    
    ${
        post1.map(p =>`
        ${PostItem(p)}       
        `).join('')
    }
    
     
    </ul>
    `)

}

export default PostList;