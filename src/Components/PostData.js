const PostData = (type, userData) => {
    let BaseURL = 'https://apipaypal.9lessons.info/apipaypal/';

    return new Promise((resolve, reject) => {
        fetch(BaseURL + type, {
            method: 'POST',
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export default PostData;