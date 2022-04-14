const registerFetch = async (userInfo, userType, studentType) => {
    try {
        const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userInfo: {...userInfo, studentType},
            userType,
            })
        });
    
        if (res.status === 200) {
        return res.json();
        } else {
        throw new Error(res.message);
        }
    } catch (err) {
        throw new Error(err.message);
    }
    }

export default registerFetch;