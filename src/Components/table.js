import { BiEdit, BiTrash } from "react-icons/bi"


export default function Table() {


    return <table className="min-w-full table-auto">
        <thead>
            <tr className="bg-gray-800">
                <th className="px-16 py-2">
                    <span className="text-gray-200">NAME</span>
                </th>
                <th className="px-16 py-2">
                    <span className="text-gray-200">EMAIL</span>
                </th>
                <th className="px-16 py-2">
                    <span className="text-gray-200">SALARY</span>
                </th>
                <th className="px-16 py-2">
                    <span className="text-gray-200">BIRTHDAY</span>
                </th>
                <th className="px-16 py-2">
                    <span className="text-gray-200">STATUS</span>
                </th>
                <th className="px-16 py-2">
                    <span className="text-gray-200">ACTIONS</span>
                </th>
            </tr>
        </thead>
        <tbody className="bg-gray-200">
            <tr className="bg-gray-50 text-center">
                <td className="px-1 py-2 flex-row items-center">
                    <img src="#" alt="" />
                    <span className="text-center ml-1 font-semibold">Vivek Goswami</span>
                </td>
                <td className="px-16 py-2">
                    <span>vivek@gmail.com</span>
                </td>
                <td className="px-16 py-2">
                    <span>60,000</span>
                </td>
                <td className="px-16 py-2">
                    <span>16-03-1997</span>
                </td>
                <td className="px-16 py-2">
                    <button className="cursor"> <span className="bg-green-500 text-white px-5 py-1 rounded">Active</span></button>
                </td>
                <td className="px-16 py-2 flex justify-around gap-2">
                    <button>
                        <BiEdit size={25} color={"green"} />
                    </button>
                    <button>
                         <BiTrash size={25} color={"red"} />
                    </button>
                </td>
            </tr>

        </tbody>
    </table>
}