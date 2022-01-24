import axios from 'axios';

const url = 'http://localhost:8000/api/';

const axiosLogin = async ( endpoint, body={}) => {

    try {

        let resp = await axios.post(`${url}${endpoint}`, body);
        let data = resp.data;
        return data;
        
    } catch (error) {
        return {
            message: 'Email or Password wrong'
        }
    }

}

const renovacionToken = async ( endpoint ) => {

    const token = localStorage.getItem("token") || '';

    try {

        let resp = await axios.get(`${url}${endpoint}`,{ headers: { 'access-token': token } });
        let data = await resp.data;
        return data;
        
    } catch (error) {
        return {
            message: 'token expired'
        }
    }

}

export {
    axiosLogin,
    renovacionToken
}


