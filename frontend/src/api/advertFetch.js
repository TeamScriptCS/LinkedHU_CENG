
const advertPublishFetch = (advert) => {
    return fetch(`${process.env.REACT_APP_API_URL}/advert/publish`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(advert)

    });
}

export default advertPublishFetch;