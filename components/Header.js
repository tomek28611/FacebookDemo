import React from 'react';
import facebook from "../assets/facebook1.png";
import Image from "next/image";
import user from "../assets/guy7.jpg"

import { MdHome } from "react-icons/md";
import { FiPlayCircle, FiFlag, FiMessageCircle } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GrGroup, GrAppsRounded } from "react-icons/gr";
import { FaBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

const Header = () => {
  return (
    <div className="p-3 flex items-center justify-between border-b  lg:px-8">

     {/* LeftSide */}

        <div className="flex items-center mr-4">
            <div className='w-10 h-10'>
                <Image src={facebook} alt="photo" />
            </div>
            <div className="ml-2">
                <input type="text" placeholder="Search Facebook"
                className="outline-0 bg-[#f2f3f7] p-2 rounded-full pl-4 
                hidden sm:block" />
            </div>
        </div>

      {/* Middle */}

    <div className="flex items-center space-x-7">
        <MdHome className="w-10 h-10" />
        <FiFlag className="w-9 h-9" />
        <FiPlayCircle className="w-9 h-9" />
        <BsCart3 className="w-9 h-9" />
        <GrGroup className="w-9 h-9" />

    </div>


      {/* RightSide */}
      <div className="flex space-x-5 items-center ml-0">
        <div className="md:flex space-x-5 items-center hidden">
            <GrAppsRounded className="w-9 h-9" />
            <FaBell className="w-9 h-9" />
            <AiOutlineMessage className="w-9 h-9" />
        </div>
        <div className="w-10 h-10" >
            <Image src={user} className="rounded-full" alt="photo" />
        
        
        </div>

        </div>
    </div>
  )
}

export default Header