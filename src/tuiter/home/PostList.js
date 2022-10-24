import React from "react";
import postsArray from "./post.json";
import PostItems from "./PostItems";


const PostList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(Post =>
        <PostItems key={Post._id} Post={Post}/>
        )
            }
        </ul>
    );
};
export default PostList;