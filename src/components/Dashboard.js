import React, { useState } from 'react'
import Post from './Post';
import {images} from '../constants';
import Modal from 'react-modal';
import SignupForm from './SignupForm'
import LoginForm from './LoginForm';



const Dashboard = () => {

  const [modal, setModal] = useState({
    show: false,
    type: 'register'
  })

  // eslint-disable-next-line
  const [posts, setPosts] = useState([
    {
      dp: images.dp1,
      icon: '👋',
      username: 'Theresa Webb',
      time: '5mins ago',
      content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      comments: '24 comments'
    },
    {
      dp: images.dp2,
      icon: '😞',
      username: 'Marvin McKinney',
      time: '8mins ago',
      content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' ,
      comments: '0 comments'
    }
  ])



  return (
    <div className='dashboard'>

      <h1 className='dashboard__heading'>Hello Jane</h1>
      <p className='dashboard__greeting'>How are you doing today? Would you like to share something with the community 🤗</p>
      
      <form 
        action='#'
        style={{cursor: "pointer"}}
        onClick={() => setModal({type: 'register', show: true})} 
        className='dashboard__form'
      >
        <div className='dashboard__form-label'>Create post</div>
        <div className='dashboard__form-input-container'>
          <div className='dashboard__form-chaticon'>
            <i class="bi bi-chat-dots-fill"></i>
          </div>
          <input className='dashboard__form-input' type='text' placeholder='How are you feeling today?'  />
        </div>
        <button className='dashboard__form-button'>Post</button>
      
      </form>

      <div className='dashboard__posts'>
        {posts.map((post, index) => (
          <div 
            style={{cursor: "pointer"}}
            onClick={() => setModal({type: 'register', show: true})} 
            key={index}>
              <Post {...post} />
          </div>
        ))}
      </div>

      

      <Modal 
        isOpen= {modal.show}
        className='modal'
        closeTimeoutMS={2000}
      >
        {
          modal.type === 'register' 
          ? 
            <SignupForm 
              onSubmit={() => setModal({...modal, show: false})} 
              onLogin={() => setModal({...modal, type: 'login'})}
            /> 
          : 
            <LoginForm 
              onSubmit={() => setModal({...modal, show: false})} 
              onRegister={() => setModal({...modal, type: 'register'})}
            />
        }
        <button 
          className='dashboard__modal-button' 
          onClick={() => setModal({...modal, show: false})}
        >
          <p>X</p>
        </button>
      </Modal>
      
    </div>

  )
}

export default Dashboard