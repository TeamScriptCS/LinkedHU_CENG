import { postFetch } from '../api/useFetch';

const loadUserData = () => {
    return JSON.parse(localStorage.getItem('userData'));
  }
  
const saveUserData = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
}
  
const login = async (username, password, userType, isRememberMe) => {
    
    try {
      const res = await postFetch(`${userType}/login`,{username, password, userType});

      if (res?.id) {


        const userDTO = {
          id: res.id,
          email: res.email,
          userType: res.usertype.toLocaleLowerCase(),
          expiresIn: isRememberMe ? new Date().getTime() + (1000 * 60 * 60 * 24 * 7) : new Date().getTime() + (1000 * 60 * 60 * 24 * 1)
        };

        return userDTO;
        

      } else {

        throw new Error(res.message);
      }
    } catch (err) {
        return {
            status: "error",
            message: err
        }
    }
  }

  const register = async (username, password, userType) => {
    try {
      const res = await postFetch(`${userType}/register`,{username, password, userType});

    }
    catch (err) {
        return {
            status: "error",
            message: err
        }
    }
  }



  // const advertPublish = async (advert, advertType) => {
    
  //   try {
  //     const res = {
  //       status: 200
  //     };//await advertPublishFetch(advert);
  //     if (res.status === 200) {
  //       setSnackbarInfo({
  //         open: true,
  //         message: 'Advert Published',
  //         variant: 'success'
  //       });
        
  //       contextMethods.setCurrentPage("home");
  
  //     }
  //     else {
  //       throw new Error(res.message);
  //     }
  
  //     return true;
  //   } catch (err) {
  //     setSnackbarInfo({
  //       open: true,
  //       message: "Advert Publish Failed",
  //       variant: 'error'
  //     });
  //     return false;
  //   }
  // }



export {
    login,
    loadUserData,
    saveUserData
}