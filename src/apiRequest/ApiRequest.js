import axios from "axios";
import {getToken, invalidToken, setEmail} from "../Utility/TokenHelper.js";
import {isAwaitExpression} from "eslint-plugin-react-refresh";

const baseUrl = "https://cart-api.teamrabbil.com/api"


export const userLoginRequest = async (postBody) =>{
    try {
        let res = await axios.post(`${baseUrl}/user-login`,postBody);
        setEmail(postBody["UserEmail"])
        return res.data["msg"]
    }catch (e){
        return false
    }
}

export const verifyOtpRequest = async (postBody) =>{
    try {
        let res = await axios.post(`${baseUrl}/verify-login`,postBody)
        return res.data["msg"]
    }catch (e){
        return false
    }
}

export const productListRequest = async () =>{
    try {
        let res = await axios.get(`${baseUrl}/product-list`);
        return res.data["data"]
    }catch (e){
        return []
    }
}

let config = {
    headers: {
        token: getToken(),
    }
}
export const cardListRequest =async () =>{
    try {
        let res = await axios.get(`${baseUrl}/cart-list`,config);
        return res.data["msg"]
    }catch (e){
        invalidToken(e.response.status)
    }
}
export const createCartRequest = async (productId) =>{
    try {
        let res = await axios.get(`${baseUrl}/create-cart/${productId}`,config)
        return res.data["msg"]
    }catch (e){
        invalidToken(e.response.status)
    }
}

export const  removeCartRequest = async (productId) =>{
    try {
        let res = await axios.get(`${baseUrl}/remove-cart/${productId}`,config);
        return res.data["msg"]
    }catch (e){
        invalidToken(e.response.status)
    }
}








































