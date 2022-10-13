import React from 'react'
import Cards from './SectionTwoCards/Cards'

const SectionTwo = (obj) => {
  const {data} = obj
  
  return (
    <section className='blogs-posts-container'>
        <div className='grid-container'>
            <h3>{data[0]}</h3>
            {
              data ? data[1].map((el) => <Cards key={el.id} datos={el} /> ) : "cargando"
            }
        </div>
    </section>
  )
}

export default SectionTwo