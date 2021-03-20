import React from 'react'


const Contact = () => {
    const [header] = React.useState({
        subHeader: 'Contactanos' });

    const [state] = React.useState([
        { id: 1, title: 'Email', text: 'harismendi@unemi.edu.ec' },
        { id: 2, title: 'Celular', text: '0962564025' },
        { id: 3, title: 'Email', text: 'mangeld@unemi.edu.ec' },
        { id: 4, title: 'Celular', text: '0951232233' }

    ])

    return (
        <div className='contact' id="contact">
            <div className='container'>
                <div className='row d-flex'>
                    <div className="col-12 mainHeaderContact">

                        <h1>{header.subHeader}</h1>

                    </div>
                    <div className="col-12 centerContent">
                        <div className='common'>

                        </div>
                    </div>
                    <div className="col-12 centerContent">
                        <div className='common info_contacts '>
                            {state.map(info => (
                                <div>
                                    <strong>{info.title}</strong>
                                    <p>{info.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
