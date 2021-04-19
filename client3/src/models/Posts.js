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