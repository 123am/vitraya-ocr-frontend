import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import authActions from "../redux/actions/auth-actions"
import Swal from "sweetalert2"

const Register = () => {
    const [count, setCount] = useState(0)

    const dispatch = useDispatch()

    const list_role = useSelector((state) => {

        let data_role = state.auth.list_role

        return data_role.map((itm) => {
            return <option value={itm.uniqueId}>{itm.userRole}</option>
        })
    })

    const {
        register,
        setValues,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const registerCheck = (data) => {
        console.log(data, "registerCheck")
        if (data["password"] != data["confirmPassword"]) {
            Swal.fire({
                icon: "error",
                text: "Password & Confirm Password not matched."
            })
            return
        }

        delete data["confirmPassword"]

        dispatch(authActions.register(data, () => {
            navigate("/login")
        }))
    }

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(authActions.listRole())
    }, [])

    return <>
        <div className="flex flex-col md:flex-row w-[100vw] items-center">

            <div className='flex flex-col items-center h-[20vh] md:h-[100vh] bg-primary text-center w-[100vw] md:w-[50vw] justify-center'>
                <img src="https://res.cloudinary.com/avinish1881/image/upload/v1615791995/Vitraya/logo_3_lenqyp.png" />
                <h1 className='text-white'>
                    Welcome to OCR Reader
                </h1>
            </div>

            <div className='flex flex-col items-center w-[50vw]'>

                <h1 className="text-blue-400 pb-2 text-5xl">
                    Register
                </h1>


                <form onSubmit={handleSubmit(registerCheck)} className='flex flex-col w-72'>
                    <label className={errors.firstname ? "mt-0" : "mt-4"}>First Name</label>
                    <input className='border border-black w-full mx-auto rounded-md h-8 shadow-md shadow-blue-400' type="text" {...register("firstname", {
                        required: "First name is required"
                    })} />
                    {
                        errors.firstname && <p className="mt-1 text-red-600 text-xs">{errors.firstname.message}</p>
                    }

                    <label className={errors.lastname ? "mt-0" : "mt-4"}>Last Name</label>
                    <input className='border border-black w-full mx-auto rounded-md h-8 shadow-md shadow-blue-400' type="text" {...register("lastname", {
                        required: "Last name is required"
                    })} />
                    {
                        errors.lastname && <p className="mt-1 text-red-600 text-xs">{errors.lastname.message}</p>
                    }
                    <label className={errors.username ? "mt-0" : "mt-4"}>User Name</label>
                    <input className='border border-black w-full mx-auto rounded-md h-8 shadow-md shadow-blue-400' type="text" {...register("username", {
                        required: "User name is required"
                    })} />
                    {
                        errors.username && <p className="mt-1 text-red-600 text-xs">{errors.username.message}</p>
                    }
                    <label className={errors.password ? "mt-0" : "mt-4"}>Password</label>
                    <input className='border border-black w-full mx-auto rounded-md h-8 shadow-md shadow-blue-400' type="password" {...register("password", {
                        required: "Password is required"
                    })} />
                    {
                        errors.password && <p className="mt-1 text-red-600 text-xs">{errors.password.message}</p>
                    }
                    <label className={errors.confirmPassword ? "mt-0" : "mt-4"}>Confirm Password</label>
                    <input className='border border-black w-full mx-auto rounded-md h-8 shadow-md shadow-blue-400' type="password" {...register("confirmPassword", {
                        required: "Confirm Password is required"
                    })} />
                    {
                        errors.confirmPassword && <p className="mt-1 text-red-600 text-xs">{errors.confirmPassword.message}</p>
                    }

                    <input type="submit" className='border border-black w-16 mx-auto my-2 bg-blue-400 text-white' />
                </form>
                <h6 className="cursor-pointer" onClick={() => {
                    navigate("/login")
                }}>Already have an account</h6>
            </div>
        </div>
    </>
}

export default Register

