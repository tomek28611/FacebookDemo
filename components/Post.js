import React, { useEffect, useState } from 'react'
import guy from "../assets/guy7.jpg";
import dots from "../assets/dots.png";
import car from "../assets/c-class.jpg";
import hearth from "../assets/hearth.png";
import like from "../assets/like.png";
import { BiLike, BiSmile } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import share from "../assets/share.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineCamera, AiOutlineGif } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";
import bluelike from "../assets/25like.png";
import blacklike from "../assets/2unlike.png";
import nouser from "../assets/nouser.png";
import Moment from 'react-moment';
import { db } from "../firebase";
import { useSession, signIn, signOut } from "next-auth/react";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    setDoc,
  } from "firebase/firestore";



const Post = ({id, username, userImg, caption, timestamp, img}) => {

  const [hasLiked, setHasLiked] = useState(false);
  const { data: session } = useSession();
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => 
  onSnapshot(collection(db, "posts", id, "likes"), (snapshot) => setLikes(snapshot.docs)))

  useEffect(
    () => setHasLiked(likes.findIndex((like) => like.id === 
    session?.user?.uid) !== -1 ), [likes]
  )

  const likePost = async () => {
    if(hasLiked) {
        await deleteDoc(doc(db, 'posts', id, 'likes', session?.user?.uid))
    } else {
        await setDoc(doc(db, 'posts', id, 'likes', session?.user?.uid), {
           username: session?.user?.name,
        });
    }
  }

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  );


  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session?.user?.name,
      image: session?.user?.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="bg-white rounded-[1rem] px-5 py-4 mt-4">
    {/* Header */}
    <div className="flex items-center justify-between">
        <div className="flex items-center   ">
        <div className="w-12 h-12">
            <img src={userImg} className="rounded-full" alt="photo"   />
        </div>
        <div className=" ml-3">
        <p className="font-bold">{username}</p>
        <div className="flex">
        <p className="text-xs">
            <Moment fromNow>{timestamp?.toDate()}</Moment>  </p>
        <BiWorld className="ml-2 shrink-0" />
        </div>
        </div>
        </div>
        <div className="w-10 h-10">
            <Image src={dots} />
        </div>
    </div>
    {/* Input */}
    <div className="mt-3 mb-2">
        <p>{caption}</p>
    </div>
    {/* Image */}
    <div className="-mx-5">
        <img src={img} />
    </div>
    {/* Number of Likes + Btn */}
    <div className="">
        <div className="flex justify-between text-[#8e8d8d] text-xs">
            <div className="flex items-center ">
                <div className="w-5 h-5">
                        <Image src={like} />
                    </div>
                    <div className="w-5 h-5">
                        <Image src={hearth} />
                    </div>
                    <p className="pl-2">{` Emily Doe and another ${likes.length}`}</p>
                </div>
            <p className="">{`${comments.length} Comments`}</p>
        </div>
        <div className="border-b my-2"></div>
        <div className="flex justify-between my-2">
            <div className="flex items-center" onClick={likePost}>
                <img src={hasLiked ? bluelike.src : blacklike.src} 
                className="w-6 h-6" />
                <p className="pl-2 text-[18px]">Like</p>
            </div>
            <div className="flex items-center">
                <FaRegCommentAlt className="w-5 h-5" />
                <p className="pl-2 text-[18px]">Comment</p>
            </div>
            <div className="flex items-center">
                <div className="w-6 h-6">
                <Image src={share}  />
                </div>
                <p className="pl-2 text-[18px]">Share</p>
            </div>
        </div>
        <div className="border-b my-2"></div>

    </div>
    {/* Comment Section */}
    <div className="max-h-60 overflow-y-auto">
        <div className="flex justify-between text-[#8e8d8d]">
            <p className="">{`See ${comments.length} previous comments`}</p>
            <div className="flex items-center">
            <p className="">Most Relevant </p>
                <RiArrowDownSLine />
            </div>
        </div>

        {comments.map((comment) => (

       
        <div key={comment.id} className="">
        <div className="flex items-center mt-2">
            <div className="w-10 h-10">
                <img src={comment.data().image} className="rounded-full" alt="photo"/>
            </div>
            <p className="ml-2 font-bold">{comment.data().username}</p>
            <p className="ml-2">{comment.data().comment}</p>
        </div>
        <div className="ml-[3rem] flex -mt-1">
            <p className="mr-2">Like</p>
            <p className="">Reply</p>
        </div>
        </div>
         ))}




    </div>
    {/* Input */}
    <div className="flex items-center mt-4">
    <div className=" w-10 h-10">
      <img
            src={session?.user?.image} className="rounded-full shrink-0" />
      </div>
      <div className="w-full ml-2 bg-[#d3d4d8] rounded-full flex items-center relative">
        <input type="text" className="outline-0  p-1 rounded-full w-full
         bg-[#d3d4d8]" value={comment} onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment"  />
           <div className="flex absolute right-[4.5rem] space-x-2 text-[#5a5a5c]">
             <BiSmile className="" />
            <AiOutlineCamera className="" />
            <AiOutlineGif className="" />
            </div>
        <div className="mr-4 bg-blue-400 text-white rounded-full">
            <button className="font-bold px-2" onClick={sendComment}>Post</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Post