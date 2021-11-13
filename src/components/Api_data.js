

//this file to get the data from api  
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';


//function to display all reacords from api
export function api() {
    return axios.get(url)
}

//function to get the particular data using id from api 
export function getData(id) {
    const burl = 'https://jsonplaceholder.typicode.com/posts/' + id
    return axios.get(burl)
}

//function to add data to api on button click 
export function addDataToApi(v1, v2) {
    return axios.post(url, {
        title: v1,
        body: v2
    })
}

//function for login page here we check the email and password come from login page with login api data
const login_url = "http://apigrowmetrix-env.eba-bykxmvs8.ap-south-1.elasticbeanstalk.com/user/login"
export function redirect(value1, value2) {
    return axios.post(login_url,
        {
            "email": value1,
            "password": value2
        })
}



// ==============================================================
// URL FOR API IS => http://digitalpost365.com/admin/api/userapi/v8/getLanguageCustomeCategoryPost

// =>this parameters pass to above api using post request to get desired response  
// token:$2y$12$wUBdewYeyJkchvYeoJK2TOxBtwc6KICQ3bMRf0OqHTrwwF1p.UvQi
// catid:39
// languageid:4
// offset:0

//here code to display api with pagination feature
//we pass this function to Api_with_pagination page 
const pagination_api = "https://digitalpost365.com/admin/api/userapi/v8/getLanguageCustomeCategoryPost"
export function api_with_pagination(offset) {
    return axios.post(pagination_api,
        {
            "token": "$2y$12$wUBdewYeyJkchvYeoJK2TOxBtwc6KICQ3bMRf0OqHTrwwF1p.UvQi",
            "catid": 39,
            "languageid": 4,
            "offset": offset
        })
}

