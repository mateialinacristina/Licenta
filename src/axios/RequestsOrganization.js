import instance from './Instance';
import Cookies from 'js-cookie';

const config = {     
    headers: { 
        'Authorization': `Bearer ${Cookies.get("token")}` 
    }
}

export async function fetchOrganization(){
    try {
        const response = await instance.get(`organization`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function fetchOrganizationChat(id){
    try {
        const response = await instance.get(`organization/getallmessagesfromorganization?id=${id}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function fetchOrganizationRequests(id){
    try {
        const response = await instance.get(`organization/getallrequestsfromorganization?id=${id}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function fetchOrganizationRequestsResponse(id, isApprove){
    try {
        console.log(id, isApprove)
        const response = await instance.post(`request/changestatusapprovel?id=${id}&isApprove=${isApprove}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}