import axios from 'axios';

axios.interceptors.response.use(function (response) {
    if (response.data.ReturnCode != '0000') {
        alert(response.data.ReturnMsg)
    }
    return response
}, function (error) {
    return Promise.reject(error)
})

let base = 'http://messagecloud.csii.com.cn/short';

export const userQuery = params => { return axios.post(`${base}/userQuery.do`, params); };

export const getCompanyList = params => { return axios.post(`${base}/getCompanyList.do`, params); };

export const scoreRefresh = params => { return axios.post(`${base}/scoreRefresh.do`, params); };
