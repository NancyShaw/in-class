/** */

const bcrypt = require('bcrypt');

const list = [
    {
        firstName: 'John',
        lastName: 'Doe',
        handle: '@Mystery',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: 'notgood',
    },
    {
        firstName: 'LaForge',
        lastName: 'LaForge',
        handle: "@ChiefEngineer",
        pic: "https://bulma.io/images/placeholders/96x96.png",
        password: 'plaintext',
    },
    {
        firstName: 'Captain',
        lastName: 'Picard',
        handle: "@MakeItSo",
        pic: "https://bulma.io/images/placeholders/96x96.png",
        password: 'insecure',
    }
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

    const hash = await bcrypt.hash(user.password, 8);
    
    user.password = hash;

    if (!user.firstName) {
        throw { code: 422, msg: "First name is required!" }
    }
    list.push(user);
    //this returns a copy of user without the password
    return { ...user, password: undefined };
    
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

module.exports.Login = (handle, password) => {
    const user = list.find(x=> x.handle == handle && x.password == password);
    if(!user) throw { code: 401, msg: "Wrong Username or Password" };
    
    return user;
}
