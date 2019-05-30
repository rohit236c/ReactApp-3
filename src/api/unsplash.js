import axios from  'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers :{
        Authorization: 'Client-ID 036cf51ed50ae1103f355c5274d043f6bf6dac7d4c89451a2e3b02a3a7d06144'
    }
})