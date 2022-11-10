import React from 'react';
import guy from "../assets/guy7.jpg";
import Image from "next/image";
import camera from "../assets/camera.png";
import photos from "../assets/photos.png";
import smile from "../assets/smile.png";

const CreatePost = () => {
  return (
    <div className="w-screen sm:w-full ">
    <div className="max-w-[25rem] sm:max-w-[33rem] mx-auto bg-white rounded-[1rem]">
        <div className="mt-8 pt-4  
        flex w-full items-center p-3 rounded-[1rem] mx-auto">
            <div className="w-14 h-14 shrink-0">
              <Image src={guy} className="rounded-full" alt="photo" />
            </div>
            <div className="flex items-center ml-5 w-full">
            <input type="text" placeholder="Whats on your mind John"
            className="outline-0 bg-[#f2f3f7] p-1 rounded-full h-12 pl-3 w-full"/>
            </div>
            <div className="flex bg-blue-500 px-3 items-center ml-4 rounded-full h-10">
                <button className="font-bold text-white">Post</button>
            </div>
        </div>
        <div className="border-b my-4"></div>
            <div className="flex justify-between mx-3
            ">
                <div className="flex items-center">
                <div className="w-7 h-7">
                    <Image src={camera} alt="photo" />
                </div>
                <p className="whitespace-nowrap text-[14px] pl-2">Live Video</p>
                </div>
                <div className="flex items-center">
                <div className="w-7 h-7">
                    <Image src={photos} alt="photo" />
                </div>
                <p className="pl-2">Photo/Video</p>
                </div>
                <div className="flex items-center">
                <div className="w-7 h-7">
                    <Image src={smile} alt="photo" />
                </div>  
                <p className="pl-2 text-[14px]">Feeling/Activity</p>
                </div>

            </div>
    </div>
    </div>
  );
};

export default CreatePost;