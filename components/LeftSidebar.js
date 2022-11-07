import React from 'react';
import guy from "../assets/guy7.jpg";
import { MdHome, MdGroups } from "react-icons/md";
import { BsCart3, BsPeopleFill, BsCalendar2Fill } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineDesktop, AiFillClockCircle } from "react-icons/ai";
import Image from "next/image";



const LeftSidebar = () => {
  return (
    <div className="w-[10rem] hidden sm:block">
        <div className="flex flex-col pt-4 pl-7">
            <div className="flex items-center font-bold pt-4 sm:pt-12">
              <MdHome className="w-9 h-9" />
              <p className="ml-2">Home</p>
            </div>
            <div className="flex items-center mt-4">
            <div className="w-10 h-10">
                <Image src={guy} className="rounded-full" />
             </div>
             <p className="ml-2 font-bold">Log In</p>
             </div>
       
             <div className="border-b my-4"></div>
             <div className="space-y-6">
                <div className="flex">
                    <AiOutlineDesktop className="w-9 h-9" />
                    <p className="ml-2 font-bold">Watch</p> 
                </div>

                <div className="flex">
                    <BsPeopleFill className="w-9 h-9" />
                    <p className="ml-2 font-bold">Friends</p> 
                </div>

                <div className="flex">
                    <MdGroups className="w-9 h-9" />
                    <p className="ml-2 font-bold">Groups</p> 
                </div> 

                <div className="flex">       
                    <BsCart3 className="w-9 h-9" />
                    <p className="ml-2 font-bold">Marketplace</p> 
                </div> 

                <div className="flex"> 
                    <BsCalendar2Fill className="w-7 h-7" />
                    <p className="ml-2 font-bold">Events</p> 
                </div>

                <div className="flex"> 
                    <AiFillClockCircle className="w-9 h-9" />
                    <p className="ml-2 font-bold">Memories</p> 
                </div>

                 <div className="flex">   
                    <RiArrowDownSLine className="w-9 h-9" />
                    <p className="ml-2">See More</p> 
                </div>   
             </div>
        </div>
    </div>
  )
}

export default LeftSidebar