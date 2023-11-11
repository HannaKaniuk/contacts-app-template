import axios from "axios"

// Запит на бекенд
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

axios.defaults.headers.common.Authorization = `Bearer ${token}`

async function registerUserService (userParams){
    try{

    }catch(error){
    
    }

}