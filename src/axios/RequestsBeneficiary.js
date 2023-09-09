import instance from './Instance';
import Cookies from 'js-cookie';

const config = {     
    headers: { 
        'Authorization': `Bearer ${Cookies.get("token")}` 
    }
}

export async function fetchSpecificBeneficiary(id){
    try {
        const response = await instance.get(`beneficiary/${id}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function fetchAddBeneficiary(location){
    try {
        console.log(location)
        const response = await instance.put(`beneficiary`, location, config);
        Cookies.remove("primarySid");
        Cookies.set("primarySid", response.data.beneficiaryID);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function fetchUpdateBeneficiary(location){
    try {
        console.log(location)
        const response = await instance.post(`beneficiary`, location, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function fetchBeneficiarySendMessage(body){
    try {
        body = {
            id: 0,
            messageSend: "Salut",
            sendDate: "2023-09-08",
            isOrganization: true,
            organizationID: 1,
            beneficiaryID: 1
          }
        console.log(body)
        const response = await instance.put(`message`, body, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}






