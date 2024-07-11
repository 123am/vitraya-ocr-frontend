import { useDispatch } from "react-redux"
import { image_base_url } from "../utilities/Constant"
import dataActions from "../redux/actions/data-actions"
import { FaShoppingCart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const LineCard = ({ itm }) => {


    const dispatch = useDispatch()

    const [cartCount, setCartCount] = useState(0)

    const removeToCart = (uniqueId) => {
        dispatch(dataActions.addToCart({ "productUniqueId": uniqueId }, () => {

        }))
    }

    const addFromCart = (uniqueId) => {
        dispatch(dataActions.addFromCart({ "productUniqueId": uniqueId }, () => {
            setCartCount(prev => prev + 1)

            dispatch(dataActions.getMyCart())
        }))
    }

    const subFromCart = (uniqueId) => {
        dispatch(dataActions.subFromCart({ "productUniqueId": uniqueId }, () => {
            setCartCount(prev => prev - 1)

            dispatch(dataActions.getMyCart())
        }))
    }




    useEffect(() => {
        setCartCount(itm.count)
    }, [itm])






    return <div className="flex flex-row w-full bg-blue-200 h-[8rem] rounded-xl p-2">
        <img src={image_base_url + itm.coverImage} width={80} height={80} />
        <div className="flex flex-col pl-2 justify-between w-full">
            <div className="flex flex-col h-[18rem]">
                <span className="flex flex-row "><h5>Title : </h5> {itm.title}</span>
                {/* <span className="flex flex-col"><h5>Description : </h5>  {itm.description.length > 84 ? itm.description.slice(0, 84) + "....." : itm.description}</span> */}
            </div>

            <hr className="bg-black h-1" />

            {/* <div className="flex flex-row h-[4rem]  pt-2">
                <span className="flex flex-row"><h5>Price : </h5>  ₹ {itm.price}</span>
                <span className="flex flex-row" onClick={() => {
                    addToCart(itm.uniqueId)
                }}>
                    <FaShoppingCart />

                </span>
            </div> */}
            <div className="flex flex-row justify-between w-full">

                <span className="flex flex-row"><h5>Price : </h5>  ₹ {itm.price}</span>

                <div className="flex flex-row h-[4rem] justify-between pt-2">
                    <span className="flex flex-row bg-white w-6 h-6 px-2 py-1 mx-1" onClick={() => {
                        addFromCart(itm.uniqueId)
                    }}>
                        <IoMdAdd />

                    </span>
                    <span className="flex flex-row mx-1">{cartCount}</span>
                    <span className="flex flex-row bg-white w-6 h-6 px-2 py-1  mx-1" onClick={() => {
                        subFromCart(itm.uniqueId)
                    }}>
                        <RiSubtractLine />

                    </span>
                </div>
            </div>
        </div>
    </div>
}

export default LineCard