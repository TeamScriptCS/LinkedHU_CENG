import {API_URL} from '../common/constants';

const loginFetch = async (email, password, userType) => {


    console.log(email, password, userType);

    if(userType === 'admin' && email === 'admin@gmail.com' && password==="adminadmin" ){
        return {
            status: 200,
            message: 'Login Successful',
            userType: 'admin'
        };
    }
    return {
        status: 403,
        message: 'Login Failed',
        userType: 'admin'
    }


    // return fetch(`${API_URL}/login`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         email,
    //         password,
    //         userType
    //     })
    // })
    // .then(res => res.json())
    // .then(res => {
    //     if(res.status === 'success') {
    //         return res.data;
    //     } else {
    //         throw new Error("Login Failed");
    //     }
    // })
    // .catch(err => {
    //     throw new Error(err.message);
    // });
}

export default loginFetch;