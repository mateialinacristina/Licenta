import instance from './Instance';
import Cookies from 'js-cookie';
const config = {     
    headers: { 
        'Authorization': `Bearer ${Cookies.get("token")}` 
    }
}
export async function fetchLocation(){
    try {
        //Aceest config trebuie pus pe fiecare ruta care este influentata de roluri dar imi este somn
        const response = await instance.get('location', config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function fetchSpecificLocation(id){
    try {
        const response = await instance.get(`location/${id}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function fetchAddLocation(location){
    try {
        console.log(location)
        const response = await instance.put(`location`, location, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}






