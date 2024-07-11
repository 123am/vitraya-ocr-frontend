import { useDispatch } from "react-redux"
import { image_base_url } from "../utilities/Constant"
import dataActions from "../redux/actions/data-actions"
import { FaShoppingCart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";

const Checkout = ({ data }) => {


    const dispatch = useDispatch()

    const [cartCount, setCartCount] = useState([])
    const [tax, setTax] = useState(10)

    const navigate=useNavigate()

    const CheckoutCall = () => {
        dispatch(dataActions.CartCheckout({ "subTotal": data.totalSum, "Tax_price": data.tax_price, "Addons": data.addOns, "tax": data.tax, "total_cart_price": data.totalPrice }, () => {
            dispatch(dataActions.getMyCart())
            navigate("/history")
            
        }))
    }




    return <div className="flex flex-row w-full bg-blue-200 rounded-xl p-2">
        <div className="flex flex-col pl-2 justify-between w-full">
            <div className="flex flex-col">
                <span className="flex flex-row p-2"><h5>Sub Total : </h5> {data.totalSum}</span>
                <span className="flex flex-row p-2"><h5>Tax (10%) : </h5> {data.tax_price}</span>
                <span className="flex flex-row p-2"><h5>Add-ons : </h5> {data.addOns}</span>
                <hr className="bg-black h-1 " />
                <span className="flex flex-row p-2"><h5>Total Price : </h5> {data.totalPrice}</span>
                {
                    data.totalPrice != 0 && <button onClick={() => {
                        CheckoutCall()
                    }}>
                        Checkout
                    </button>
                }
                {/* <span className="flex flex-col"><h5>Description : </h5>  {itm.description.length > 84 ? itm.description.slice(0, 84) + "....." : itm.description}</span> */}
            </div>


            {/* <div className="flex flex-row h-[4rem]  pt-2">
                <span className="flex flex-row"><h5>Price : </h5>  ₹ {itm.price}</span>
                <span className="flex flex-row" onClick={() => {
                    addToCart(itm.uniqueId)
                }}>
                    <FaShoppingCart />

                </span>
            </div> */}
            {/* <div className="flex flex-row justify-between w-full">

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
            </div> */}
        </div>
    </div>
}

export default Checkout