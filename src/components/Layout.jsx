import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

const Layout = ({ child }) => {
    let userDetails = useSelector((state) => {
        console.log(state, "statestatestate")
        return state.auth
    })

    const navigate = useNavigate()
    console.log(userDetails, "userDetailsuserDetails")



    useEffect(() => {
        if (userDetails.userLogin) {
                
        } else {
            navigate("/login")
        }
    }, [userDetails.userLogin])
    return (
        <>

            <div className="flex flex-row w-[100vw]">
                <div className="flex border w-[25vw] bg-gray-100 flex-col items-center">
                    <Sidebar />
                </div>

                <div className="flex flex-col h-[100vh] w-[75vw] items-center overflow-scroll relative">
                    <Topbar />
                    <div className="mt-4 h-full flex w-full">
                        {child}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
