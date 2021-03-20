import React from 'react';

import { FaAlignJustify } from "react-icons/fa";

const Nav = () => {
    const [state, setState] = React.useState(true)

    return (
        <nav>
            <div className='container-fluid navbar'>
                <div className='row'>
                    <div className='col-12'>
                        {state ? <ul className='navbar__right'>
                            <li><a href='#banner'>Inicio</a></li>
                            <li><a href='#about'>Sobre Nosotros</a></li>
                            <li><a href='#projects'>Experiencia</a></li>
                           
                            <li><a href='#Comentarios'>Testimonios</a></li>
                            <li><a href='#contact'>Contacto</a></li>
                        </ul> : ''}
                    </div>
                    <div className='toogle' onClick={() => setState(!state)}>
                        <FaAlignJustify />
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Nav;