import React from 'react'
import ContactSections from './ContactSections'
import Footer from './Footer'
import Header from './Header'
import SectionOneProject from './MainProjectD/SectionsMainProject/SectionOneProject'
import SectionTwoProject from './MainProjectD/SectionsMainProject/SectionTwoProject'

const ProjectDetail = () => {
  return (
    <>
        <Header />
        <SectionOneProject />
        <SectionTwoProject />
        <ContactSections />
        <Footer />
    </>
  )
}

export default ProjectDetail