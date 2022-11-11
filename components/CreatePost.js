import React, { useRef, useState } from 'react';
import guy from "../assets/guy7.jpg";
import Image from "next/image";
import camera from "../assets/camera.png";
import photos from "../assets/photos.png";
import smile from "../assets/smile.png";
import { useSession, signIn, signOut } from "next-auth/react";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const CreatePost = () => {
    const { data: session } = useSession();
    const captionRef = useRef(null);
    const imageRef = useRef(null);
    const [image, setImage] = useState(null);
    console.log(image);
    const [loading, setLoading] = useState(false);

    // Create data post add it ti collection
    const uploadPost = async () => {
        setLoading(true);
        const docRef = await addDoc(collection(db, 
            'posts'), {
                profileImg: session?.user?.image,
                username: session?.user?.name,
                caption: captionRef.current.value,
                timestamp: serverTimestamp(),
            });
            const imagePath = ref(storage, `posts/${docRef.id}/image`);

            await uploadString(imagePath, image, 'data_url').
            then(async (snapshot) => {
                const downloadUrl = await getDownloadURL(imagePath);
                await updateDoc(doc(db, "posts", docRef.id), {
                    image: downloadUrl,
                })
            })
            setImage("");
            setLoading(false);
            captionRef.current.value = null;
    };

  

    const addImageToState = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            setImage(readerEvent.target.result);
        };
    };

  return (
    <div className="w-screen sm:w-full ">
    <div className="max-w-[25rem] sm:max-w-[33rem] mx-auto bg-white rounded-[1rem]">
        <div className="mt-8 pt-4  
        flex w-full items-center p-3 rounded-[1rem] mx-auto">
            <div className="w-14 h-14 shrink-0">
              <img src={session?.user?.image} className="rounded-full" alt="photo" />
            </div>
            <div className="flex items-center ml-5 w-full">
            <input type="text" placeholder="Whats on your mind"
            className="outline-0 bg-[#f2f3f7] p-1 rounded-full h-12 pl-3 w-full truncate" 
            ref={captionRef}/>
            {/*  */}
            </div>
            <div className="flex bg-blue-500 px-3 items-center ml-4 rounded-full h-10"
            onClick={uploadPost}>
                <button className="font-bold text-white">
                    {loading ? "Loading..." : "Post"}
                </button>
            </div>
        </div>
        <div className="">
            {image ? <div className="">
                <img src={image} className="p-4
                " alt="" />
            </div> : ''}
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
                <div className="flex items-center" 
                onClick={() => imageRef.current.click()} >
                <div className="w-7 h-7">
                    <Image src={photos} alt="photo" />
                    <input type="file" className="hidden" 
                    ref={imageRef} onChange={addImageToState} />
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