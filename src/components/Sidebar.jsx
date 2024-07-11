import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import authActions from "../redux/actions/auth-actions"
import Swal from "sweetalert2"
import { MdDashboard } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => {

    const userDetails = useSelector((state) => {
        return state.auth.userDetails
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    return <>
        <div className="flex flex-col justify-around w-full">

            <img src="https://res.cloudinary.com/avinish1881/image/upload/v1615791995/Vitraya/logo_3_lenqyp.png" className="w-52 self-center" />
            <div className="flex flex-row justify-around">
                <h3 className="text-xl mt-6">
                    Welcome, <br />{userDetails.username}
                </h3>
                <h3 className="text-xl mt-8">
                    <span onClick={() => {

                        Swal.fire({
                            // title:"Logout",
                            text: "Are you sure you want to logout?",
                            icon: "question",
                            showCancelButton: true,
                            denyButtonText: 'No',
                            confirmButtonText: 'Yes',
                            cancelButtonText: 'No',
                            customClass: {
                                cancelButton: "order-1",
                                confirmButton: "order-2",
                                denyButton: "order-3"
                            }

                        }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(authActions.logout())
                                navigate("/login")
                            } else if (result.isDenied) {
                                Swal.fire('Changes are not saved', '', 'info')
                            }
                        })
                    }}>
                        <IoLogOut size={32}/>
                    </span>
                </h3>
            </div>

        </div>


        <div className="flex flex-col justify-evenly m-4 p-4 w-full">

            <span className="flex flex-row p-2 items-center" onClick={() => {
                navigate("/dashboard")
            }}>
                <MdDashboard size={28} className="mr-4"/>
                Dashboard
            </span>

            <span className="flex flex-row p-2 items-center" onClick={() => {
                navigate("/ocrreader")
            }}>
                <IoIosDocument size={28} className="mr-4"/>    
                Read New OCR
            </span>

        </div>

    </>
}

export default Sidebar