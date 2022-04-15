

import mockUsers from '../__mock/user.json';

const registerFetch = async (userInfo, userType, studentType) => {
    
    const user = mockUsers.find(user => user.email === userInfo.email && user.password === userInfo.password && user.userType === userType);
    
        if (user) {
            return {
                status: 403,
                message: 'Registration Failed user already registered'
            };
        }
        
        else {

            userInfo.userType = userType;

            if(studentType) {
                userInfo.studentType = studentType;
            }

            return {
                status: 200,
                message: 'Registration Successful'
            };
        }
}


export default registerFetch;