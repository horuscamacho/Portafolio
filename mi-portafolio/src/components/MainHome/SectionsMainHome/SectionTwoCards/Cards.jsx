import React from 'react'
import img from '../../../../assets/post-1.png'
const Cards = () => {
  return (
    <article className='post-container'>
        <img src={img} alt="" />
        <p>Titulo del post</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil placeat velit ducimus sunt cupiditate.</p>
        <a className="blogs-button" href="/">Leer más</a>
    </article>
  )
}

export default Cards