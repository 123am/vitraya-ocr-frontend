import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

const NotFound = () => {


    let userDetails = useSelector   ((state) => {
        console.log(state, "statestatestate")
        return state.auth
    })

    const navigate = useNavigate()
    console.log(userDetails, "userDetailsuserDetails")



    useEffect(() => {
        if (userDetails.userLogin) {
            navigate("/dashboard")
        } else {
            navigate("/login")
        }
    }, [userDetails.userLogin])
    return <>
        <h1>404</h1>
    </>
}

export default NotFound