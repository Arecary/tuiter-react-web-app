import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

function PostSummaryList(){

    return(`
    
    <ul class="list-group">
    
    
    ${

        posts.map(posts =>`  
     
                ${PostSummaryItem(posts)}               
        `).join('')

    }
     
    </ul>
    
        `)

}


export default PostSummaryList;