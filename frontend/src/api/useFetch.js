import {API_URL} from '../common/constants';

const postFetch = ( url, body) => {

    return fetch(`${API_URL}/${url}`, {
    
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(res => {

        
        if(res?.message === 'OK'){
            return res.data;
        }
        else{
            throw new Error(res.message);
        }
    })
    .catch(err => {
        throw new Error(err.message);
    });
}

const getFetch = ( url) => {

    return fetch(`${API_URL}/${url}`, {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        if(res?.message === 'OK'){
            return res.data;
        }
        else{
            throw new Error(res.message);
        }
    })
    .catch(err => {
        throw new Error(err.message);
    });

}

const putFetch = ( url, body) => {

    return fetch(`${API_URL}/${url}`, {

        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(res => {
        if(res?.message === 'OK'){
            return res.data;
        }
        else{
            throw new Error(res.message);
        }
    }).catch(err => {
        throw new Error(err.message);
    } );
}

const deleteFetch = ( url) => {
    return fetch(`${API_URL}/${url}`, {

        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        if(res?.message === 'OK'){
            return res.data;
        }
        else{
            throw new Error(res.message);
        }
    }).catch(err => {
        throw new Error(err.message);
    } );

}


export  {
    postFetch,
    getFetch,
    deleteFetch,
    putFetch
};