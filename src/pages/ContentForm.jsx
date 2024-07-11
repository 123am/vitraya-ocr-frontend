import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import authActions from "../redux/actions/auth-actions"
import Swal from "sweetalert2"
import dataActions from "../redux/actions/data-actions"

const ContentForm = () => {
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

        dispatch(dataActions.addContent(data, () => {
            navigate("/dashboard")
        }))
    }

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(authActions.listRole())
    }, [])

    return <>
        <div className="flex flex-col md:flex-row w-[100vw] items-center justify-center">

            <div className='flex flex-col items-center'>

                <h1 className="text-blue-400 pb-2">
                    Content Form
                </h1>


                <form onSubmit={handleSubmit(registerCheck)} className='grid grid-cols-1'>
                    <label className={errors.title ? "mt-0" : "mt-4"}>Title</label>
                    <input className='border border-black w-full mx-auto rounded-md h-8 shadow-md shadow-blue-400' type="text" {...register("title", {
                        required: "Title is required"
                    })} />
                    {
                        errors.title && <p className="mt-1 text-red-600 text-xs">{errors.title.message}</p>
                    }

                    <div className="grid grid-cols-2">

                        <div className="flex flex-col mr-2">
                            <label className={errors.username ? "mt-0" : "mt-4"}>Price</label>
                            <input className='border border-black w-full mx-auto rounded-md h-8 shadow-md shadow-blue-400' type="number" {...register("price", {
                                required: "Price is required",
                                valueAsNumber:true
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
                    }

                    <input type="submit" className='border border-black w-16 mx-auto my-2 bg-blue-400 text-white' />
                </form>
            </div>
        </div>
    </>
}

export default ContentForm

