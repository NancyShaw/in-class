/** */

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios').default;

const SALT_ROUNDS = process.env.SALT_ROUNDS;
const JWT_SECRET = process.env.JWT_SECRET;

const list = [
    {
        firstName: 'John',
        lastName: 'Doe',
        handle: '@Mystery',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: 'notgood',
        isAdmin: false,
        following: [ {handle: '@ChiefEngineer', isApproved: true} ],
        isPublic: true,
    },
    {
        firstName: 'LaForge',
        lastName: 'LaForge',
        handle: "@ChiefEngineer",
        pic: "https://bulma.io/images/placeholders/96x96.png",
        password: 'plaintext',
        isAdmin: true,
        following: [ {handle: '@MakeItSo', isApproved: true}, {handle: '@Mystery', isApproved: true} ],
        isPublic: true,
    },
    {
        firstName: 'Captain',
        lastName: 'Picard',
        handle: "@MakeItSo",
        pic: "https://bulma.io/images/placeholders/96x96.png",
        password: '$2b$08$8QCN5ETTfBdTXlON/uRbYuiS3Yn2oT5N/4NHwxf4iMeRjQ1.GiXaO',
        isAdmin: true,
        following: [ {handle: '@ChiefEngineer', isApproved: true}, {handle: '@Mystery', isApproved: true} ],
        isPublic: true,
    },
    {
        firstName: 'Beverly',
        lastName: 'Crusher',
        handle: "@doctor",
        pic: "https://bulma.io/images/placeholders/96x96.png",
        password: '$2b$08$oEZBpKQea79A1UxO.7CW/.roeGrUpJQbM2nv3r7hOm3u0C2jR2JGq',
        isAdmin: false,
        following: [ ],
        isPublic: true,
    },
];

module.exports.GetAll = ()=> list;
module.exports.Get = (user_id)=> list[user_id];
module.exports.GetByHandle = (handle)=> ({ ...list.find( (x, i)=> x.handle == handle ), password: undefined });
module.exports.Add = (user)=> {
    if (!user.firstName) {
        throw { code: 422, msg: "First name is required!" }
    }
    list.push(user);
    //this returns a copy of user without the password
    return { ...user, password: undefined };
}
// if the word 'async' is there, function will return a promise
module.exports.Register = async (user)=> {

    const hash = await bcrypt.hash(user.password, +SALT_ROUNDS);
    
    user.password = hash;

    if (!user.firstName) {
        throw { code: 422, msg: "First name is required!" }
    }
    list.push(user);
    //this returns a copy of user without the password
    //return { ...user, password: undefined };
    return { ...user };
    
}
module.exports.Update = (user_id, user)=> {
    const oldObj = list[user_id];
    if (user.firstName) {
        oldObj.firstName = user.firstName;
    }
    if (user.lastName) {
        oldObj.lastName = user.lastName;
    }
    if (user.handle) {
        oldObj.handle = user.handle;
    }
    if (user.pic) {
        oldObj.pic = user.pic;
    }
    //this returns a copy of oldObj, without the password
    return { ...oldObj, password: undefined };
}

module.exports.Delete = (user_id)=> {
    const user = list[user_id];
    list.splice(user_id, 1);
    return user;
}

module.exports.Login = async (handle, password) => {
    const user = list.find(x=> x.handle == handle);
    if(!user) throw { code: 401, msg: "Wrong Username or Password" };
    
    if(! await bcrypt.compare(password, user.password) ) {
        throw { code: 401, msg: "Wrong Username or Password" };
    }

    const data = { ...user, password: undefined };
    
    const token = jwt.sign(data, JWT_SECRET);
    console.log(token);
    return { user: data, token };
}

module.exports.LoginFB = async (access_token) => {
    console.log(access_token);

    //const userFB = await axios.get('curl command copied from graph.facebook.com');
    //console.log(userFB.data);

    // Get a verified email address from FB
    let user = list.find(x=> x.email == email);
    if(!user) { 
        //create a new user based on the data provided from FB
        user = {
            firstName: userFB.data.first_name,
            lastName: userFB.data.last_name,
            pic: userFB.data.picture.data.url,
            email: userFB.data.email
        };
        list.push(user);
    };

    const data = { ...user, password: undefined };
    
    const token = jwt.sign(data, JWT_SECRET);

    return { user: data, token };
}

module.exports.FromJWT = async (token) => {
    try {
        const user = jwt.verify(token, JWT_SECRET);
        return user;
    } catch (error) {
        console.log({error});
        return null;
    }
}
