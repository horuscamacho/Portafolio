import React from 'react'
import SectionOne from './SectionsMainHome/SectionOne'
import SectionTwo from './SectionsMainHome/SectionTwo'
import {proyectos} from './proyects_certificates'
import {cursos} from './proyects_certificates'
import ContactSections from '../ContactSections'
const HomeMain = () => {


  return (
    <main className='blogs-main'>
        <SectionOne />
        <SectionTwo  data={proyectos}/>
        <SectionTwo data={cursos} />
        <ContactSections />
    </main>
  )
}

export default HomeMain