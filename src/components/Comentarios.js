import React from 'react';

import { FaUserAstronaut, FaUserFriends , FaUserGraduate, FaUserEdit, FaUser, FaBreadSlice} from "react-icons/fa";

const Comentarios = () => {
    const [header] = React.useState({
        mainHeader: 'Comentarios',
        subHeader: '',
        mainContentx: "Aqui algunos comentarios de nuestros servicios"
    });

    const [state] = React.useState([
        {
            id: 1,
            icon: <FaUserAstronaut className='commonIcons' />,
            heading: 'Hector Mejia',
            textService: 'Que buen servicio tienes negro'
        },
        {
            id: 2,
            icon: <FaUserFriends className='commonIcons' />,
            heading: 'Oliver Valentin',
            textService: 'Los recomiendo'
        },
        {
            id: 3,
            icon: <FaUserGraduate className='commonIcons' />,
            heading: 'Juanito Alimaña',
            textService: 'Quisiera tener mas informacion'
        },
        {
            id: 3,
            icon: <FaUserEdit className='commonIcons' />,
            heading: 'Noelia Guin',
            textService: 'Desde que me atendieron me resulto super excelente el servicio.'
        },
        {
            id: 3,
            icon: <FaUser className='commonIcons' />,
            heading: 'Meilly Guin',
            textService: 'Excelentes proyectos chicos <3'
        },
        {
            id: 3,
            icon: <FaBreadSlice className='commonIcons' />,
            heading: 'Anonnimous',
            textService: 'Grandes ideas tienen'
        }
    ]);

    return (


        <div className='services' id="Comentarios">
            <div className='container'>
                <div className='row d-flex'>

                    <div className="col-12 mainHeaderServices">
                 
                        <h1>{header.mainHeader}</h1>
           
                    </div>


                    <div className="col-12 centerContent">
                        <div className='common'>
                            <p className='mainContentServices'>{header.mainContent}</p>
                        </div>
                    </div>


                    <div className="col-12">
                        <div className='container'>
                            <div className='row'>

                            {state.map(info => (
                                    <div className='colu-4'>
                                        <div className='services__box'>

                                            <div>{info.icon}</div>
                                            <div className='services__box-header'>{info.heading}</div>
                                            <div className='services__box-p'>{info.textService}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Comentarios;