/**
 *  A wrapper for the native fetch API
 */

const API_ROOT = process.env.VUE_APP_API_ROOT;

export function api(url) {
    
    return fetch(API_ROOT + url).then(x=> x.json());

}