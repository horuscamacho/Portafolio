import React from 'react'
import Footer from './Footer'
import Header from './Header'
import ContactSections from './ContactSections'
import SectionMain from './MainContact/SectionMain'
const Contact = () => {
  return (
    <>
        <Header/>
        <SectionMain />
        <ContactSections />
        <Footer />
    </>
  )
}

export default Contact


