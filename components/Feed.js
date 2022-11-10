import React from 'react';
import LeftSidebar from './LeftSidebar';
import Stories from './Stories';
import CreatePost from './CreatePost';
import Posts from './Posts';
import RightSidebar from './RightSidebar';

const Feed = () => {
  return (
    <div className="flex bg-[#e5e7ee]">
    {/* LeftSideBar */}
    <LeftSidebar />

    <div className="mx-auto">
    {/* Stories */}
    <Stories />
    {/* CreatePost */}
    <CreatePost />
    {/* Posts */}
    <Posts />
    </div>
    {/* RightSideBar */}
    <RightSidebar />
    </div>
  )
}

export default Feed