import React from 'react'
import img from '../../../../assets/post-1.png'
const Cards = (datos) => {
  const curso = datos.datos.curso
  const proyecto = datos.datos.proyecto
  const image = datos.datos.link
  return (
    <article className='post-container'>
        <img src={image ? image : img} alt="" />
        <p>{curso ? curso : proyecto}</p>
        <p>{datos.datos.descripcion}</p>
        <a className="blogs-button" href="/">Leer más</a>
    </article>
  )
}

export default Cards