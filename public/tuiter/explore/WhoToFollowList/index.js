import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

function WhoToFollowList() {

    return(`
    
    <ul class="list-group">
    
    <h4>Who to follow</h4>
    ${
        
        who.map(who =>`  
        
  
                ${WhoToFollowListItem (who)}

                 
        `).join('')
        
    }
     
    </ul>
    
        `)


}

export default WhoToFollowList;