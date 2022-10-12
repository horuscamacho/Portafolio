import React from 'react'
import Cards from './SectionTwoCards/Cards'

const SectionTwo = (tipo) => {
  return (
    <section className='blogs-posts-container'>
        <div className='grid-container'>
            <h3>{tipo.tipo}</h3>
            <Cards />
            <Cards />
            <Cards />
            
        </div>
    </section>
  )
}

export default SectionTwo