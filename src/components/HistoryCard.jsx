import { useDispatch } from "react-redux"
import { image_base_url } from "../utilities/Constant"
import dataActions from "../redux/actions/data-actions"

const HistoryCard = ({ itm }) => {


    const dispatch = useDispatch()






    return <div className="flex flex-col w-full bg-blue-200 rounded-xl p-2">

        <span className="flex flex-row "><h3>Invoice Id : </h3> {itm.invoiceId}</span>

        <table border={5} className="border border-md border-black">
            <th className="border border-md border-black">
                Title
            </th >
            <th className="border border-md border-black">
                Price
            </th>
            <th className="border border-md border-black">
                Count
            </th>
            <th className="border border-md border-black">
                Total
            </th>
            {
                itm.data.map((sim) => {
                    return <tr >
                        <td className="border border-md border-black">{sim.title}</td>
                        <td className="border border-md border-black">{sim.price}</td>
                        <td className="border border-md border-black">{sim.count}</td>
                        <td className="border border-md border-black">{sim.totalSum}</td>
                    </tr>
                })
            }
        </table>
        <br />
        <hr className="bg-black h-1" />
        <div className="flex flex-col h-[6rem]">
            <span className="flex flex-row "><h5>Sub Total : </h5> {itm.total_cart_price - itm.Tax_price - itm.AddOn}</span>
            <span className="flex flex-row "><h5>Tax Price : </h5> {itm.Tax_price}</span>
            <span className="flex flex-row "><h5>Add Ons : </h5> {itm.AddOn}</span>
            <span className="flex flex-row"><h5>Total Cart Price : </h5>  {itm.total_cart_price}</span>
        </div>

    </div>
}

export default HistoryCard