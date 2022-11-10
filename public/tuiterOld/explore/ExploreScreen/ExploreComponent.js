import PostSummaryList from "../PostSummaryList/index.js";
import searchBar from "./searchBar.js";
import pic from "./pic.js";
import tabs from "./tabs.js";


const ExploreComponent = () => {
    return(`
            <div class="row">
                        ${searchBar()}
                       <!-- search field and cog -->
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                      ${tabs()}
           </ul>
           <!-- image with overlaid text -->
           ${pic()}
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
