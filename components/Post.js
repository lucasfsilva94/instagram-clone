import {
  BookmarkIcon,
  ChatIcon, 
  DotsHorizontalIcon, 
  EmojiHappyIcon, 
  HeartIcon,  
  PaperAirplaneIcon 
} from "@heroicons/react/outline"
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid"
import React, {useState, useEffect}  from 'react';
import Moment from 'react-moment';

function Post({id, username, userImg, img, caption}) {

  const comments = [
    { 
      id: '1',
      username: 'Keaton_Kirlin',
      userImg: 'https://randomuser.me/api/portraits/men/51.jpg',      
      comment: 'Hello'
    },
    { 
      id: '2',
      username: 'Laron_McDermott',
      userImg: 'https://randomuser.me/api/portraits/women/43.jpg',
      comment: 'Another One'
    }  
  ]  
  const dateToFormat = '2021-10-12T10:59-0500';  
  const [hasLiked, setHasLiked] = useState(false)

  useEffect( () => {
  }, [hasLiked]);

  const likePost = () => {
    setHasLiked(current => !current)
  }

  return (    
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img src={userImg} className="rounded-full h-12 w-12 object-contain border p-1 mr-3" alt="" />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* img */}
      <img src={img} className="object-cover w-full" alt="" />

      {/* Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">          
          {hasLiked ? (
            <HeartIconFilled onClick={likePost} className="btn text-red-500" />
          ) : (
            <HeartIcon onClick={likePost} className="btn" />
          )}
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />          
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* captions */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span> 
        {caption}
      </p>

      {/* comments */}
      <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
        {comments.map(comment => (
          <div key={comment.id} className="flex items-center space-x-2 mb-3">
            <img className="h-7 rounded-full" src={comment.userImg} alt="" />          
            <p className="text-sm flex-1">
              <span className="font-bold">{comment.username} </span> 
              {comment.comment}
            </p>          
            <Moment fromNow className="pr-5 text-xs">{dateToFormat}</Moment>
          </div>
        ))}
      </div>

      {/* input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input type="text" placeholder="Add a comment..." className="border-none flex-1 focus:ring-0" />
        <button className="font-semibold text-blue-400 ">Post</button>

      </form>
    </div>
  )
}

export default Post
