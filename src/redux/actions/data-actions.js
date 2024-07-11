import Swal from "sweetalert2"
import { ApiCaller } from "../../utilities/ApiCaller"
import { Urls } from "../../utilities/Constant"
import { CART_DASHBOARD, CHECKOUT_DASHBOARD, CMS_DASHBOARD, CMS_HISTORY } from "../reducers/data-reducer"


const dataActions = {
    addContent: (data, cb) => async (dispatch, _) => {
        try {
            const resp = await ApiCaller.postCall(Urls.addContent, data, "multipart/form-data")
            // console.log(resp>.data,"dsahgdjsajdas")

            if (resp.status != 201) {
                Swal.fire({
                    icon: "error",
                    text: resp?.data?.msg
                })

                dispatch(dataActions.dashboard())
                cb()
            } else {
                Swal.fire({
                    icon: "info",
                    text: resp?.data?.msg
                })
                cb()
            }

        } catch (error) {

            console.log("errorororor", error)
            let resp = error.response
            Swal.fire({
                icon: "error",
                text: resp?.data?.msg
            })
        }
    },
    dashboard: () => async (dispatch, _) => {
        try {

            console.log(ApiCaller.getCall, "ApiCaller.getCall")
            const resp = await ApiCaller.getCall(Urls.listContent)
            console.log(resp, "dsahgdjsajdas")

            dispatch(CMS_DASHBOARD(resp.data.data))


        } catch (error) {

        }
    },
    checkOuthistory: () => async (dispatch, _) => {
        try {

            console.log(ApiCaller.getCall, "ApiCaller.getCall")
            const resp = await ApiCaller.getCall(Urls.checkOuthistory)
            console.log(resp, "dsahgdjsajdas")

            dispatch(CHECKOUT_DASHBOARD(resp.data.data))


        } catch (error) {

        }
    },


    protect_dashboard: () => async (dispatch, _) => {
        try {

            console.log(ApiCaller.getCall, "ApiCaller.getCall")
            const resp = await ApiCaller.getCall(Urls.pro_listContent)
            console.log(resp, "dsahgdjsajdas")

            dispatch(CMS_DASHBOARD(resp.data.data))


        } catch (error) {

        }
    },
    getMyCart: () => async (dispatch, _) => {
        try {

            console.log(ApiCaller.getCall, "ApiCaller.getCall")
            const resp = await ApiCaller.getCall(Urls.getMyCart)
            console.log(resp, "dsahgdjsajdas")

            dispatch(CART_DASHBOARD(resp.data.data))


        } catch (error) {

        }
    },
    list_history: () => async (dispatch, _) => {
        try {
            const resp = await ApiCaller.getCall(Urls.getHistroy)
            console.log(resp, "dsahgdjsajdas")

            dispatch(CMS_HISTORY(resp.data.data))


        } catch (error) {

        }
    },
    addToCart: (data, cb) => async (dispatch, _) => {
        try {
            const resp = await ApiCaller.postCall(Urls.addTOCart, data)
            // console.log(resp>.data,"dsahgdjsajdas")

            if (resp.status != 201) {
                Swal.fire({
                    icon: "error",
                    text: resp?.data?.msg
                })
            } else {
                Swal.fire({
                    icon: "info",
                    text: resp?.data?.msg
                })
                cb()
            }

        } catch (error) {
            let resp = error.response
            Swal.fire({
                icon: "error",
                text: resp?.data?.msg
            })
        }
    },
    subFromCart: (data, cb) => async (dispatch, _) => {
        try {
            const resp = await ApiCaller.postCall(Urls.subFromCart, data)

            if (resp.status != 201 && resp.status != 200) {
                return
            }
            cb()

        } catch (error) {
            let resp = error.response
            Swal.fire({
                icon: "error",
                text: resp?.data?.msg
            })
        }
    },

    CartCheckout: (data, cb) => async (dispatch, _) => {
        try {
            const resp = await ApiCaller.postCall(Urls.checkoutCart, data)

            if (resp.status != 201 && resp.status != 200) {
                return
            } else {
                Swal.fire({
                    icon: "info",
                    text: resp?.data?.msg
                })
                cb()
            }

        } catch (error) {
            let resp = error.response
            Swal.fire({
                icon: "error",
                text: resp?.data?.msg
            })
        }
    },
    addFromCart: (data, cb) => async (dispatch, _) => {
        try {
            const resp = await ApiCaller.postCall(Urls.addFromCart, data)
            if (resp.status != 201 && resp.status != 200) {
                return
            }
            cb()

        } catch (error) {
            let resp = error.response
            Swal.fire({
                icon: "error",
                text: resp?.data?.msg
            })
        }
    }

}


export default dataActions