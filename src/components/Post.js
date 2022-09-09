import React from 'react'

const Post = (props) => {
  return (
    <div className='post'>
        <div className='post__about'>
            <img src={props.dp} alt='display pic'></img>
            <div className='post__about-details'>
              <p className='post__username'>{props.username}</p>
              <p className='post__time'>{props.time}</p>
            </div>
        </div>
        <div className='post__content'>
            <p className='post__content-icon'>{props.icon}</p>
            <p className='post__content-text'>{props.content}</p>
        </div>
        <div className='post__comments'>
            <i class="bi bi-chat-right"></i>
            <p className='post__comments-text'>{props.comments}</p>
        </div>
    </div>
  )
}

export default Post