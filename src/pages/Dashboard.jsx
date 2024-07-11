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

const Dashboard = () => {
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

    console.log(userDetails.userRoleName, "userDetailsuserDetails")
    // useEffect(() => {
    //     // 
    //     if (window.location.href.includes("dashboard")) {
    //         dispatch(dataActions.dashboard())
    //     } else if (window.location.href.includes("listMyContent")) {
    //         dispatch(dataActions.protect_dashboard())
    //     }
    // }, [window.location.href])
    useEffect(() => {
        dispatch(dataActions.dashboard())
    }, [sort])

    let data = ["{}", "{itm}", "{itm}", "{itm}", "{itm}", "{itm}"]

    return <>
        {/* <div className="flex flex-row"> */}
        {/* <div className="flex border bg-gray-100 flex-col w-[25vw] items-center">
                <div className="flex flex-col w-[90%]">
                    <Sidebar />

                    {
                        userDetails.userRoleName && <>
                            <button className="mt-4 w-48 border border-black" onClick={() => { navigate("/listMyContent") }}>
                                My Content
                            </button>
                            <button className="mt-4 w-48 border border-black" onClick={() => { navigate("/contentForm") }}>
                                Add New Content
                            </button>
                        </>
                    }
                    <div className="flex flex-col">
                        <label className={errors.title ? "mt-0" : "mt-4"}>Title</label>
                        <input className='border border-black w-full mx-auto rounded-md h-8 shadow-md shadow-blue-400' placeholder="Search by title ......" type="text" {...register("title", {
                            onChange: (e) => {
                                setFilter(e.target.value)
                            }
                        })} />

                        <label className={errors.confirmPassword ? "mt-0" : "mt-4"}>Filter Price</label>
                        <select className='border border-black w-full mx-auto rounded-md h-8 shadow-md shadow-blue-400' type="text" {...register("userRole", {
                            onChange: (e) => {
                                setSort(e.target.value)
                            }
                        })}>
                            <option disabled selected value={""}>Price</option>
                            <option value={"lh"}>Low to High</option>
                            <option value={"hl"}>High to Low</option>
                        </select>
                    </div>

                </div>
            </div> */}
        <div className="flex flex-col items-center overflow-scroll">
            {
                cms_dashboard.length > 0 ? <><div className="grid grid-cols-1 gap-2 w-full p-2">

                    {
                        cms_dashboard.map((itm) => {
                            return <>
                                <OneCard itm={itm} />
                            </>
                        })
                    }
                </div></> : <>
                    {/* <h6>
                        No Record Found
                    </h6> */}
                    <div className="flex flex-col text-red-500 m-4   items-center">
                        <h1 className="text-lg">No Record Found</h1>
                    </div>
                </>
            }
        </div>
        {/* </div> */}
    </>
}



export default Dashboard

