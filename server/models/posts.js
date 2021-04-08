/** */

const users = require("./users");

const list = [ 
    { 
    src: "https://bulma.io/images/placeholders/1280x960.png",
    alt: "Placeholder image",
    caption: `Make it so`,
    time: Date(),
    user_handle: "@MakeItSo",
    isPublic: true,
    },
    { 
    src: "https://bulma.io/images/placeholders/1280x960.png",
    alt: "Placeholder image",
    caption: `Running test simulations on the Holodeck`,
    time: Date(),
    user_handle: "@ChiefEngineer",
    isPublic: true, 
    },
    { 
    src: "https://bulma.io/images/placeholders/1280x960.png",
    alt: "Placeholder image",
    caption: `Dringing tea and reading crew reports`,
    time: Date(),
    user_handle: "@MakeItSo",
    isPublic: true,
    }
];

const listWithOwner = ()=> list.map((x, i) => ({
    ...x,
    user: users.GetByHandle(x.user_handle)
}) );

module.exports.GetAll = ()=> {
    return listWithOwner();
}

module.exports.GetWall = (handle)=> {
    return listWithOwner().filter(post=> post.user_handle == handle);
}

module.exports.GetFeed = (handle)=> {
    listWithOwner().filter(post=> users.GetByHandle(handle).following).some(f=> f.handle == post.user_handle && f.isApproved) ;
}

module.exports.Get = (post_id)=> list[post_id];
module.exports.Add = (post)=> {
    if (!post.user_handle) {
        throw { code: 422, msg: "Post must have an Owner!" }
    }
    list.push(post);
    
    return { ...post };
}

module.exports.Update = (post_id, post)=> {
    const oldObj = list[post_id];
    const newObj = {...oldObj, ...post }
    list[post_id] = newObj;
    return newObj;
}

module.exports.Delete = (post_id)=> {
    const post = list[post_id];
    list.splice(post_id, 1);
    return post;
}