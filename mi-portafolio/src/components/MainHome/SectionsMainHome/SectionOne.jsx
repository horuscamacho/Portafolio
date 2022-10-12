import React from 'react'
import img from '../../../assets/main-portafolio.png'
const SectionOne = () => {
  return (
    <section className='grid-container blogs-news-container'>
        <div className='blogs-main-new'>
            <h3>Bienvenido a mi portafolio</h3>
            <div className='blogs-news-img-container'>
            <img src={img} alt=""/>
            </div>
            <div className='blogs-news-info-container'>
              <h2>Habilidades</h2>
              <p>En el Bootcamp de Henry adquirí habilidades como Full Stack Web Developer, entre las cuales destacan el uso de tecnologías como React, Redux, Express, HTML, Tailwind, CSS, JavaScript, entre otras.</p>
              {/* <a class="blogs-button" href="/">Leer Más</a> */}
            </div>
            
        </div>
    </section>
  )
}



export default SectionOne