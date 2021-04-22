import { api } from "./myFetch";
/*
Access to all of the posts
*/


export function GetMyPosts(){
    return api("posts");
}

//TODO: figure out why this isn't working
/*export function GetPostsForUser(handle) {
    return api('posts/${handle}');
}*/

export function GetMyFeed() {
    return api("posts/feed");
}

export function AddPost(post) {
    return api("posts", post);
}

export function DeletePost(post_id) {
    // This won't actually delete the correct item unless you are an administrator viewing all posts
    // TODO: add real ids to the posts so that we can address them properly
    return api("posts/" + post_id, { }, "DELETE");
}