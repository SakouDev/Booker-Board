import axios from 'axios'

const url = 'http://vigneronluc.com:5000';
// const url = 'http://localhost:5000';

const relou = 'http://141.94.247.187:3000'

const ApiService = {
    init() {},
    login(logs) {
        return axios
            .post(`${url}/api/login`, logs)
    },
    get(ressource) {
        return axios
            .get(`${url}/api/${ressource}`)
    },
    getUser(ressource) {
        return axios
            .get(`${relou}/api/${ressource}`)
    },
    post(ressource, data) {
        return axios
            .post(`${url}/api/${ressource}`, data)
    },
    put(ressource, data) {
        return axios
            .put(`${url}/api/${ressource}`, data)
    },
    delete(ressource) {
        return axios
            .delete(`${url}/api/${ressource}`)
    },
}

export { ApiService }