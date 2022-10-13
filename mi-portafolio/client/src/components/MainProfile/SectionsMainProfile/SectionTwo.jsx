import React from 'react'
import CardProfile from './SectionTwoCards/CardProfile'

const SectionTwo = () => {
  return (
    <section className='profile-main-proyect'>
        <div className='grid-container'>
            <h3>Cursos y Certificaciones</h3>
            <div className='proyects-main-container'>
                <CardProfile />
                <CardProfile />
                <CardProfile />
            </div>
        </div>
    </section>
  )
}

export default SectionTwo