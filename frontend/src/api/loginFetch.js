import {API_URL} from '../common/constants';

import mockUsers from '../__mock/user.json';

const loginFetch = (email, password, userType) => {


    const user = mockUsers.find(user => user.username === email && user.password === password && user.userType === userType);

    if (user) {
        user.userType = userType;
        return {
            status: 200,
            message: 'Login Successful',
            user: user
        };
    }
    else
        return {
            status: 400,
            message: 'Login Failed'
        };
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


export default loginFetch;