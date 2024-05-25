import axios, { AxiosResponse } from 'axios';
import { Product } from '../models/Product';




const sleep = (delay:number) =>{
    return new Promise((resolve)=>{
        setTimeout(resolve,delay);
    });
}
axios.defaults.baseURL = 'http://localhost:5000/api';
axios.interceptors.response.use(async response =>{
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})
const responseBody = <T> (response:AxiosResponse<T>) => response.data;


const requests = {
    get: <T> (url:string)=> axios.get<T>(url).then(responseBody),
    post:<T>(url:string,body:{})=> axios.post<T>(url,body).then(responseBody),
    put:<T>(url:string,body:{})=> axios.put<T>(url,body).then(responseBody),
    delete:<T>(url:string,body:{})=> axios.delete<T>(url,body).then(responseBody),

}



const Activities ={
    list:() => requests.get<Product[]>('/activities'),
     details:(id:string) =>requests.get<Product>(`/activities/${id}`),
     create:(activity: Product) => axios.post<void>('/activities',activity),
     update:(activity: Product) => axios.put<void>(`/activities/${activity.id}`,activity),
     delete:(id: string) => axios.delete<void>(`/activities/${id}`),

}

const agent = {
    Activities
}

export default agent;