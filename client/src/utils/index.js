import {get} from 'axios';
const API ={
    allProducts:()=>{
        get('/api/')
    }
}

export default API;