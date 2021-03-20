import React from 'react';

import tabla from '../../public/images/tabla.png';
import chat from '../../public/images/chat.png';
import tienda from '../../public/images/tienda.png';


const Portafolio = () => {

    const [header] = React.useState({
        mainHeader: 'Mis Proyectos',


    });

    const [state] = React.useState([
        {
            id: 1,
            imag: chat,
            heading: 'Chat - Javascript',
            textService: "Permite interactuar con diferentes personas por chat."
        },
        {
            id: 2,
            imag: tienda,
            heading: 'Tienda React',
            textService: 'Sistema para la venta de productos y facturarlos.'

        },
        {
            id: 3,
            imag: tabla,
            heading: 'Tablas de Precios',
            textService: 'Permite visualizar y practicar los estilos.'
        },
    ]);

    return (

        <div className='portafolio' id="projects">
            <div className='container'>
                <div className='row d-flex'>
                    <div className="col-12 mainHeader">

                        <h1>{header.mainHeader}</h1>

                    </div>

                    <div className="col-12 ">

                            <p className='mainContentPortafolio'>{header.mainContent}</p>

                    </div>


                    <div className="col-12">
                        <div className='container'>
                            <div className='row'>
                                {state.map(info => (
                                    <div className='colu-4'>
                                        <div className='portafolio__box'>
                                            <div className='containerImg'>
                                                <img src={info.imag} className='commonImgPort' alt={info.heading}/>
                                            </div>
                                            <div className='portafolio__box-header'>{info.heading}</div>
                                            <div className='portafolio__box-p'>{info.textService}</div>
                                            <div className='seeMore'>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portafolio;
