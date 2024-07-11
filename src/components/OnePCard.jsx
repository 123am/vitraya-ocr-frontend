import { useDispatch } from "react-redux"
import { image_base_url } from "../utilities/Constant"
import dataActions from "../redux/actions/data-actions"
import { useNavigate } from "react-router"

const OnePCard = ({ itm }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return <div className="flex flex-row h-[94%] m-4 w-full bg-blue-200 rounded-xl p-2">

        <div className="flex flex-col w-full" >
            <div className="flex flex-col">
                <h5 className="absolute m-2">OCR Input Image</h5>
                <img className="w-96 m-2 mt-10" src={image_base_url + itm.coverImage} />
            </div>

            <hr className="bg-black h-1 my-4" />

            <div className="flex flex-col h-[100%] w-[100%] m-2 ">
                <div className="flex flex-col h-[50%] relative">
                    <h5 className="absolute">OCR Text</h5>
                    {/* <div className="bg-slate-200 absolute top-6 overflow-scroll h-[80%] break-anywhere p-2 rounded-lg" style={{ lineBreak: "anywhere" }} dangerouslySetInnerHTML={{__html: itm.txt}}></div> */}
                    <div className="bg-slate-200 absolute top-6 overflow-scroll h-[80%] break-anywhere p-2 rounded-lg w-[98%] mr-4" dangerouslySetInnerHTML={{ __html: itm.txt }}></div>
                    {/* <p className="bg-slate-200 absolute top-6 overflow-scroll h-[80%] break-anywhere p-2 rounded-lg" style={{ lineBreak: "anywhere" }}>
                        {itm.txt}
                    </p> */}
                </div>
                <div className="flex flex-col h-[50%] relative top-2">
                    <h5 className="absolute">BASE64</h5>
                    <p className="bg-slate-200  mr-4 absolute top-6 overflow-scroll h-[80%] break-anywhere p-6 rounded-lg " style={{ lineBreak: "anywhere" }}>{itm.encoded_image}</p></div>
            </div>



        </div>
    </div>
}

export default OnePCard