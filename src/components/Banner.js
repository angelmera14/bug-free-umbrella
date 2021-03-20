import React from 'react';
import { FaFacebook, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';


const Banner = () => {
    const [state] = React.useState({
        title: 'SYSTEM-HALF',
        text: "Desarrolladores de Software"
    });
    return (
        <div>
            {/* <header className='header'> */}
            <div className='container-fluid header' id="banner">
                <div className='row'>
                    <div className='col-12'>
                        <div className='header__section'>
                            <ul className='header__ul'>
                               
                            </ul>
                            <h1>{state.title}</h1>
                            <p className="text__title">{state.text}</p>
                            <p className='text__skill'>{state.skill}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* </header> */}

        </div>
    )
}

export default Banner;