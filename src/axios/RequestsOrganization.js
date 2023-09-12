import instance from './Instance';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const config = {     
    headers: { 
        'Authorization': `Bearer ${Cookies.get("token")}` 
    }
}

export async function fetchOrganization(){
    try {
        const response = await instance.get(`organization`);
        return response.data;
    } catch (error) {
    }
}

export async function fetchOrganizationChat(id){
    try {
        const response = await instance.get(`organization/getallmessagesfromorganization?id=${id}`, config);
        return response.data;
    } catch (error) {
    }
}

export async function fetchOrganizationRequests(id){
    try {
        const response = await instance.get(`organization/getallrequestsfromorganization?id=${id}`, config);
        return response.data;
    } catch (error) {
    }
}

export async function fetchOrganizationRequestsResponse(id, isApprove, emailBen){
    try {
        const response = await instance.post(`request/changestatusapprovel?id=${id}&isApprove=${isApprove}&email=${emailBen}`, {}, config);
        toast.success(`Statusul a fost modificat!`)
        window.location.reload
        return response.data;
    } catch (error) {
        toast.error(`Ceva a mers gresit, introdu din nou datele!`)    }
}

export async function fetchSendMessage(body){
    try {
        const response = await instance.put(`message`, body, config);
        return response.data;
    } catch (error) {
    }
}

export function getCurrentFormattedDate() {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-11, so we add 1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    // Here we assume the desired format for milliseconds is up to 5 digits, but JavaScript's Date provides only up to 3 digits.
    const milliseconds = String(date.getMilliseconds()).padStart(5, '0').substring(0, 5);

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
}

export function formatDateToISOString(date) {
  try {
    console.log(date)
    if (!(date instanceof Date) || isNaN(date)) {
      return null;
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds())
      .padStart(5, '0')
      .substring(0, 5); // Extend to 5 digits
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
  } catch (e) {
    return null;
  }
}
