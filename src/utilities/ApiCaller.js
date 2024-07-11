import { useDispatch } from "react-redux";
import { base_url } from "./Constant";

import axios from 'axios';
import commonActions from "../redux/actions/common-actions";
import { store } from "../redux/store";

const instance = axios.create()

instance.interceptors.request.use(function (config) {
    config.baseURL = base_url

    store.dispatch(commonActions.loadOn())
    config.headers = {
        "access-token": localStorage.getItem("userDetails") ? JSON.parse(localStorage.getItem("userDetails")).token : "",
        ...config.headers
    }
    return config;
}, function (error) {
    store.dispatch(commonActions.loadOff())
    return Promise.reject(error);
});


instance.interceptors.response.use(function (data) {
    store.dispatch(commonActions.loadOff())
    return data
}, function (error) {
    store.dispatch(commonActions.loadOff())
    return Promise.reject(error);
});




export const ApiCaller = {
    getCall: (url) => {
        return instance({
            method: "GET",
            url: url
        })
    },
    postCall: (url, data, contentType = "application/json") => {
        return instance({
            method: "POST",
            url: url,
            data: data,
            headers: {
                "Content-Type": contentType
            }
        })
    }
}


