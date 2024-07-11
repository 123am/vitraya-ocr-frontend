import { useDispatch } from "react-redux"
import { image_base_url } from "../utilities/Constant"
import dataActions from "../redux/actions/data-actions"

const Topbar = ({ itm }) => {


    let all_top_link = {
        "dashboard": "My Readed OCR",
        "listMyContent": "My Content Dashboard",
        "history": "Order History",
        "cart": "My Cart",
        "checkout": "Checkout"
    }
    console.log(window.location.pathname, "dhakjsdhsakdjas")
    return <div className="text-xl bg-white w-full justify-center flex p-2">
        {all_top_link[window.location.pathname.replace("/", "")]}
    </div>
    // return <div className="w-full flex justify-center absolute">
    //     {all_top_link[window.location.pathname.replace("/", "")]}
    // </div>
}

export default Topbar