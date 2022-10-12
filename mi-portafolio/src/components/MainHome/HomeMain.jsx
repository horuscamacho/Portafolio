import React from 'react'
import SectionOne from './SectionsMainHome/SectionOne'
import SectionTwo from './SectionsMainHome/SectionTwo'

const HomeMain = () => {
  const tipo = ["Proyectos", "Cursos y Certificaciones"]
  return (
    <main className='blogs-main'>
        <SectionOne />
        <SectionTwo tipo={tipo[0]} />
        <SectionTwo tipo={tipo[1]} />
    </main>
  )
}

export default HomeMain