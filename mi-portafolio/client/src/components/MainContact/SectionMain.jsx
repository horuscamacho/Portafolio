import React from 'react'

const SectionMain = () => {
  return (
    <section className="contact">
        <div className="content">
          <h2>Contacto</h2>
          <p>
            Gracias por visitar mi espacio, si quieres ponerte en contacto
            conmigo escríbeme.
          </p>
        </div>
        <div className="container">
          <div className="contactForm">
            <form>
                <h2>Envíame un correo</h2>
                <div className="inputBox">
                    <input type="text" name="" required="required" />
                    <span>Nombre: </span>
                </div>
                <div className="inputBox">
                    <input type="text" name="" required="required" />
                    <span>Email: </span>
                </div>
                <div className="inputBox">
                    <textarea required="required"> </textarea>
                    <span>Escribe tu mensaje aquí: </span>
                </div>
                <div className="inputBox">
                    <input type="submit" name="" value="Enviar" />
                </div>
            </form>
          </div>
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Ubicación</h3>
                <p>México.</p>
              </div>
            </div>
            <div className="box">
                <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                <div className="text">
                    <h3>Teléfono</h3>
                    <p>+52 554-740-1642</p>
                </div>
            </div>
            <div className="box">
                <div className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></div>
                <div className="text">
                    <h3>Email</h3>
                    <p>camachohorus@gmail.com</p>
                </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SectionMain
