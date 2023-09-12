import instance from './Instance';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const config = {     
    headers: { 
        'Authorization': `Bearer ${Cookies.get("token")}` 
    }
}

export async function fetchSpecificBeneficiary(id){
    try {
        const response = await instance.get(`beneficiary/${id}`, config);
        toast.error(`ceva`)
        return response.data;
    } catch (error) {
        // toast.error(`ceva`)
    }
}

export async function fetchSpecificBeneficiaryByUserId(id){
    try {
        const response = await instance.get(`beneficiary/getbeneficiarybyuserid?id=${id}`, config);
        return response.data;
    } catch (error) {
        // toast.error(`${error}`)
    }
}

export async function fetchAddBeneficiary(location){
    try {
        const response = await instance.put(`beneficiary`, location, config);
        Cookies.remove("primarySid");
        if(Cookies.get("primarySid") == undefined){
            Cookies.set("primarySid", response.data.beneficiaryID);
        }
        toast.success(`Datele sunt incarcate cu succes!`)
        window.location.replace("/")
        return response.data;
    } catch (error) {
        toast.error(`Ceva a mers gresit, introdu din nou datele!`)
    }
}

export async function fetchUpdateBeneficiary(location){
    try {
        const response = await instance.post(`beneficiary`, location, config);
        toast.success(`Datele sunt actualizate cu succes!`)
        window.location.replace("/")
        return response.data;
    } catch (error) {
        toast.error(`Ceva a mers gresit, introdu din nou datele!`)
    }
}


export async function fetchBeneficiarySendMessage(id){
    try {
        if(id != undefined){
            const response = await instance.get(`beneficiary/getallmessagesfrombeneficiary?id=${id}`, config);
            return response.data;
        }
        return []
    } catch (error) {
        
    }
}

export async function fetchBeneficiaryReservation(body){
    try {
        const response = await instance.put(`request`, body, config);
        console.log(response.data)
        toast.success(`Cererea a fost trimisa!`)
        window.location.replace("/locations")
        return response.data;
    } catch (error) {
        toast.error(`Ceva a mers gresit, introdu din nou datele!`)
    }
}




