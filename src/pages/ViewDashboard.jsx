import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import authActions from "../redux/actions/auth-actions"
import Swal from "sweetalert2"
import dataActions from "../redux/actions/data-actions"
import { image_base_url } from "../utilities/Constant"
import Sidebar from "../components/Sidebar"
import OneCard from "../components/OneCard"
import Topbar from "../components/Topbar"
import OnePCard from "../components/OnePCard"

const ViewDashboard = () => {
    const [count, setCount] = useState(0)
    const [filter, setFilter] = useState("")
    const [sort, setSort] = useState("")

    let { uid } = useParams();





    const dispatch = useDispatch()

    const userDetails = useSelector((state) => {
        return state.auth.userDetails
    })
    const cms_dashboard = useSelector((state) => {
        return state.data.cms_dashboard.filter((itm => itm.uniqueId == uid))
    })

    const {
        register,
        setValues,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()

    console.log(userDetails.userRoleName, "userDetailsuserDetails")

    let data = ["{}", "{itm}", "{itm}", "{itm}", "{itm}", "{itm}"]
    useEffect(() => {
        dispatch(dataActions.dashboard())
    }, [sort])
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
        {
            cms_dashboard.length > 0 ? <OnePCard itm={cms_dashboard[0]} /> : <div className="flex flex-col text-red-500 m-4 w-full items-center">
                <h1 className="text-xl">Please select a valid id</h1>
            </div>
        }

        {/* </div> */}
    </>
}



export default ViewDashboard

