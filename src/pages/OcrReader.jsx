import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import authActions from "../redux/actions/auth-actions"
import Swal from "sweetalert2"
import dataActions from "../redux/actions/data-actions"
import { image_base_url } from "../utilities/Constant"
import Sidebar from "../components/Sidebar"
import OneCard from "../components/OneCard"
import Topbar from "../components/Topbar"

const OcrReader = () => {
    const [count, setCount] = useState(0)
    const [filter, setFilter] = useState("")
    const [sort, setSort] = useState("")

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => {
        return state.auth.userDetails
    })
    const cms_dashboard = useSelector((state) => {
        return state.data.cms_dashboard
    })

    const {
        register,
        setValues,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()

    const registerCheck = (data) => {
        console.log(data, "registerCheck")

        dispatch(dataActions.addContent(data, () => {
            navigate("/dashboard")
        }))
    }

    console.log(userDetails.userRoleName, "userDetailsuserDetails")
    // useEffect(() => {
    //     // 
    //     if (window.location.href.includes("dashboard")) {
    //         dispatch(dataActions.dashboard())
    //     } else if (window.location.href.includes("listMyContent")) {
    //         dispatch(dataActions.protect_dashboard())
    //     }
    // }, [window.location.href])

    let data = ["{}", "{itm}", "{itm}", "{itm}", "{itm}", "{itm}"]

    return <>
        <div className="flex flex-row md:flex-row w-[100%] items-center">

            <div className='flex flex-col  w-[100%]  items-center relative'>

                <h1 className="text-blue-400 mb-2 absolute top-2 ">
                    OCR Reader
                </h1>


                <form onSubmit={handleSubmit(registerCheck)} className='grid grid-cols-1'>
                    {/* <label className={errors.title ? "mt-0" : "mt-4"}>Title</label>
                    <input className='border border-black w-full mx-auto rounded-md h-8 shadow-md shadow-blue-400' type="text" {...register("title", {
                        required: "Title is required"
                    })} />
                    {
                        errors.title && <p className="mt-1 text-red-600 text-xs">{errors.title.message}</p>
                    } */}


                    {/* <div className="flex flex-col"> */}
                        <label className={errors.coverImage ? "mt-8" : "mt-8"}>Image</label>
                        <input className='border border-black w-full mx-auto rounded-md h-8 shadow-md shadow-blue-400' type="file" {...register("coverImage", {
                            required: "Cover Image is required"
                        })} />
                        {
                            errors.coverImage && <p className="mt-1 text-red-600 text-xs">{errors.coverImage.message}</p>
                        }
                    {/* </div> */}

                    {/* <div className="grid grid-cols-2">

                        <div className="flex flex-col mr-2">
                            <label className={errors.username ? "mt-0" : "mt-4"}>Price</label>
                            <input className='border border-black w-full mx-auto rounded-md h-8 shadow-md shadow-blue-400' type="number" {...register("price", {
                                required: "Price is required",
                                valueAsNumber: true
                            })} />
                            {
                                errors.price && <p className="mt-1 text-red-600 text-xs">{errors.price.message}</p>
                            }
                        </div>
                        <div className="flex flex-col">
                            <label className={errors.username ? "mt-0" : "mt-4"}>Cover Image</label>
                            <input className='border border-black w-full mx-auto rounded-md h-8 shadow-md shadow-blue-400' type="file" {...register("coverImage", {
                                required: "Cover Image is required"
                            })} />
                            {
                                errors.price && <p className="mt-1 text-red-600 text-xs">{errors.price.message}</p>
                            }
                        </div>
                    </div>
                    <label className={errors.description ? "mt-0" : "mt-4"}>Description</label>
                    <textarea rows={"10"} className='border border-black w-full mx-auto rounded-md shadow-md shadow-blue-400' type="text" {...register("description", {
                        required: "Description is required"
                    })} />
                    {
                        errors.description && <p className="mt-1 text-red-600 text-xs">{errors.description.message}</p>
                    } */}

                    <input type="submit" className='border border-black w-16 mx-auto my-4 bg-blue-400 text-white' />
                </form>
            </div>
        </div>
    </>
}



export default OcrReader

