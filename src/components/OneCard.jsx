import { useDispatch } from "react-redux"
import { image_base_url } from "../utilities/Constant"
import dataActions from "../redux/actions/data-actions"
import { useNavigate } from "react-router"

const OneCard = ({ itm }) => {


    const dispatch = useDispatch()
    const navigate = useNavigate()


    const addToCart = (uniqueId) => {
        dispatch(dataActions.addToCart({ "productUniqueId": uniqueId }, () => {

        }))
    }







    return <div className="flex flex-col w-full bg-blue-200 rounded-xl p-2">

        <p className="cursor-pointer m-2 hover:bg-orange-800 hover:text-white w-32 px-auto flex mx-auto justify-center rounded-xl" onClick={() => {
            navigate("/viewDashboard/" + itm.uniqueId)
        }}>Click to view</p>
        <div className="flex flex-row max-h-80 " >
            <div className="w-[50%] flex justify-center bg-white rounded-lg">

                <a href={image_base_url + itm.coverImage} target="_blank"><img className="h-[100%]" src={image_base_url + itm.coverImage} /></a>
            </div>

            <div className="flex flex-col w-[50%] m-2 ">
                <div className="flex flex-col h-[33%] relative"><h5 className="absolute">OCR Text Same As Image</h5>
                    {/* <p className="absolute top-6 overflow-scroll h-[80%] break-anywhere" style={{lineBreak:"anywhere"}}>{itm.txt}</p> */}

                    <div className="mr-2 absolute top-6 overflow-scroll h-[80%] break-anywhere p-2 rounded-lg w-full" dangerouslySetInnerHTML={{ __html: itm.txt }}></div>
                </div>
                <div className="flex flex-col h-[33%] relative top-2"><h5 className="absolute">OCR Formatted Text</h5> <p className="absolute top-6 overflow-scroll h-[80%] break-anywhere" style={{ lineBreak: "anywhere" }}>{itm.tee}</p></div>
                <div className="flex flex-col h-[33%] relative top-2"><h5 className="absolute">BASE64</h5> <p className="absolute top-6 overflow-scroll h-[80%] break-anywhere" style={{ lineBreak: "anywhere" }}>{itm.encoded_image}</p></div>
            </div>

            <hr className="bg-black h-1" />


        </div>
    </div>
}

export default OneCard