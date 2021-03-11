/* 
    Holds the user session. Is a singleton.
*/
const Session = {
    user: null,
    message: [] // To be used later
}
export default Session;


export function Login() {
    Session.user = { name: "John Doe", handle: "@JohnDoe"}
}

export function Logout() {
    Session.user = null
}