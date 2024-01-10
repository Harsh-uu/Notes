import { FiSearch } from "react-icons/fi";

export default function Search(){
    return(
        <div className="bg-[#0b0e14] mt-6 px-4 py-2 text-white rounded-2xl border-2 border-[#1e232b] w-fit mx-auto mb-6">
            <div className="flex items-center bg-[#0b0e14]">
                <FiSearch className="mr-2 cursor-pointer"/>
                <input className="bg-[#0b0e14] outline-none text-white placeholder:text-gray-400" type="text" placeholder="Search"/>
            </div>
        </div>
    )
}