import instance from './Instance';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const config = {     
    headers: { 
        'Authorization': `Bearer ${Cookies.get("token")}` 
    }
}


export async function fetchLocation(){
    try {
        const response = await instance.get('location', config);
        return response.data;
    } catch (error) {
        
    }
}

export async function fetchSpecificLocation(id){
    try {
        const response = await instance.get(`location/${id}`, config);
        return response.data;
    } catch (error) {
    }
}

export async function fetchAddLocation(location){
    try {
        const response = await instance.put(`location`, location, config);
        toast.success(`Locatia a fost adaugata!`)
        window.location.replace("/")
        return response.data;
    } catch (error) {
        toast.error(`Ceva a mers gresit, introdu din nou datele!`)
    }
}






