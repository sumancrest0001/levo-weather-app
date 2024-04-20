import axios from 'axios';

const formateError = (ex) => ({
    message: ex?.response?.data?.message,
    status: ex?.response?.data?.status,
    httpCode: ex?.response?.status,
    error: ex?.response?.data?.error
});

const getWithOutAuth = (url) => {
    return new Promise((resolve, _reject) => {
        axios
            .get(url)
            .then((response) => {
                if (response && response.data) {
                    resolve({ status: true, data: response.data });
                }
            })
            .catch((ex) => {
                resolve(formateError(ex));
            });
    });
};

export default getWithOutAuth;