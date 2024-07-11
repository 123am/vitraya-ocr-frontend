import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import dataActions from "../redux/actions/data-actions"
import Sidebar from "../components/Sidebar"
import LineCard from "../components/LineCard"
import Checkout from "../components/Checkout"

const Cart = () => {
    const [count, setCount] = useState(0)
    const [filter, setFilter] = useState("")
    const [sort, setSort] = useState("")

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => {
        return state.auth.userDetails
    })
    const cart_dashboard = useSelector((state) => {
        return state.data.cart_dashboard
    })

    const {
        register,
        setValues,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(dataActions.getMyCart())
    }, [])

    let data = ["{}", "{itm}", "{itm}", "{itm}", "{itm}", "{itm}"]

    return <>
        <div className="flex flex-row w-[100vw] h-[100vh]">
            <div className="flex border bg-gray-100 flex-col w-[25vw] items-center">
                <div className="flex flex-col w-[90%]">
                    <Sidebar />
                </div>
            </div>
            <div className="flex flex-col w-[45vw] items-center">
                {
                    cart_dashboard?.result?.filter(itm => itm.title.includes(filter)).length ? <><div className="grid grid-cols-1 gap-2 w-full m-4 p-4">

                        {
                            cart_dashboard?.result?.filter(itm => itm.title.includes(filter)).sort(function (a, b) { return sort == "hl" ? b.price - a.price : a.price - b.price }).map((itm) => {
                                return <>
                                    <LineCard itm={itm} />
                                </>
                            })
                        }
                    </div></> : <>
                        <h6>
                            No Record Found
                        </h6>
                    </>
                }
            </div>

            <div className="flex flex-col w-[30vw] mt-8 items-center">
                <Checkout data={cart_dashboard} />
            </div>
        </div>
    </>
}



export default Cart

