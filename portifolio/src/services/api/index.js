import axios from "axios";


const api = axios.create({
    baseURL: "https://envemail.herokuapp.com",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "auth",
        "Access-Control-Allow-Methods": "get, post, options, put, patch, delete",
        "Content-Type": "application/json;charset=UTF-8"
    },
});

export default api;