import Session from "./Session";
/*
Access to all of the posts
*/
const posts = [ 
    { 
    src: "https://bulma.io/images/placeholders/1280x960.png",
    alt: "Placeholder image",
    caption: `Make it so`,
    time: Date(),
    user: {
        name: "Captain Picard",
        handle: "@johnsmith",
        pic: "https://bulma.io/images/placeholders/96x96.png"
    }},
    { 
    src: "https://bulma.io/images/placeholders/1280x960.png",
    alt: "Placeholder image",
    caption: `Running test simulations on the Holodeck`,
    time: Date(),
    user: {
        name: "Geordi LaForge",
        handle: "@johnsmith",
        pic: "https://bulma.io/images/placeholders/96x96.png"
    }},
    { 
    src: "https://bulma.io/images/placeholders/1280x960.png",
    alt: "Placeholder image",
    caption: `Live long and prosper`,
    time: Date(),
    user: {
        name: "Spock",
        handle: "@johnsmith",
        pic: "https://bulma.io/images/placeholders/96x96.png"
    }}
];

export function GetMyPosts(){
    return GetPostsForUser(Session.user.handle);
}

export function GetPostsForUser(id) {
    return posts.filter( x=> x.user.handle == id );
}

export function GetMyFeed() {
    return posts;
}