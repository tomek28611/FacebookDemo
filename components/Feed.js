import React from 'react';
import LeftSidebar from './LeftSidebar';
import Stories from './Stories';
import CreatePost from './CreatePost';

const Feed = () => {
  return (
    <div className="flex bg-[#f2f3f7] h-screen">
    {/* LeftSideBar */}
    <LeftSidebar />

    <div className="mx-auto">
    {/* Stories */}
    <Stories />
    {/* CreatePost */}
    <CreatePost />
    {/* Posts */}
    </div>
    {/* RightSideBar */}
    </div>
  )
}

export default Feed