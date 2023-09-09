import instance from './Instance';
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";


export async function fetchRegisterOrganization(body){
    try {
        const response = await instance.post('account/registerorganization', body);
        console.log(response)
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function fetchRegisterBeneficiary(body){
    try {
        console.log(body)
        headers: {
          
        }
        const config = {     
            headers: { 
                'Content-Type': 'application/json',
            }
        }
        const response = await instance.post('account/registerbeneficiary', body, config);
        console.log(response)
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function fetchLogin(body){
    try {
        const response = await instance.post('account/login', body);
        const decode_token = jwt_decode(response.data["token"])
        
        Cookies.set("id", decode_token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"])
        Cookies.set("email", decode_token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]);
        Cookies.set("role", decode_token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
        Cookies.set("isValid", decode_token["http://schemas.microsoft.com/ws/2008/06/identity/claims/ispersistent"]);
        Cookies.set("primarySid", decode_token["http://schemas.microsoft.com/ws/2008/06/identity/claims/primarysid"]);
        Cookies.set("token", response.data["token"])
        window.location.replace('/')

        //Cookies.get("email")   pentru a lua cookiul
    } catch (error) {
        throw error;
    }
}

export function fetchLogout(){
    try {
        Cookies.remove("id");
        Cookies.remove("email");
        Cookies.remove("role");
        Cookies.remove("token");
        Cookies.remove("isValid")
        Cookies.remove("primarySid")
        window.location.replace('/')
    } catch (error) {
        throw error;
    }
}