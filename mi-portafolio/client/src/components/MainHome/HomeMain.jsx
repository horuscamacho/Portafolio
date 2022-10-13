import React from 'react'
import SectionOne from './SectionsMainHome/SectionOne'
import SectionTwo from './SectionsMainHome/SectionTwo'
import {proyectos} from './proyects_certificates'
import {cursos} from './proyects_certificates'
const HomeMain = () => {



  return (
    <main className='blogs-main'>
        <SectionOne />
        <SectionTwo  data={proyectos}/>
        <SectionTwo data={cursos} />
    </main>
  )
}

export default HomeMain