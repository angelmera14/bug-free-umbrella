import React from 'react'

import Foto from '../../public/images/me.jpg';


const About = () => {
    const [header] = React.useState({
        subHeader: 'Sobre nosotros',
        mainContent: 'Estudiantes universitarios con amplia experiencia en desarrollo de aplicaciones web y de escritorio para ambientes laborales o personales. Nos gusta lo que hacemos y eso nos lleva a mejorar y obtener conocimientos para ser los mejores en nuestro campo.'
    });

    const [state] = React.useState([
        { id: 1, title: 'Name', text: 'Angel Mera' }
    ])

    return (

        <div className='about' id="about">
            <div className='container'>
                <div className='row d-flex '>
                    <div className="col-12 mainHeader">
     
                        <h1>{header.subHeader}</h1>
  
                    </div>

 
                    <div className="col-12 col-lg-6 mx">
                        <div className='common'>
                            <p className='mainContent'>{header.mainContent}</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mx">
                        <img className='imgAbout' src={Foto} alt={header.mainContent} />
                        <h4>Angel Mera & Hector Arismendi</h4>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About