import instance from './Instance';
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




export async function fetchRegisterOrganization(body){
    try {
        const response = await instance.post('account/registerorganization', body);
        toast.success("Bine ai venit, te-ai conectat cu succes!");
        window.location.replace("/signin")
        return response.data;
    } catch (error) {
        toast.error("Campurile nu sunt completate!");
        toast.info("Completati toate campurile!");
        //throw error;
    }
}

export async function fetchRegisterBeneficiary(body){
    try {
        const config = {     
            headers: { 
                'Content-Type': 'application/json',
            }
        }
        const response = await instance.post('account/registerbeneficiary', body, config);
        window.location.replace("/signin")
        toast.success(`Bine ai venit, te-ai conectat cu succes!`);
    } catch (error) {
        toast.error("Campurile nu sunt completate!");
        toast.info("Completati toate campurile!");
        //throw error;
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
        toast.success(`Bine ai venit, te-ai conectat cu succes!`);
        //Cookies.get("email")   pentru a lua cookiul
    } catch (error) {
        toast.error("Email sau parola incorecta!");
        //throw error;
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
        toast.info("Te mai asteptam!");
    } catch (error) {
        toast.error("Ceva nu a mers bine, incearca din nou!");
    }
}