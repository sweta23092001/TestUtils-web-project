import React, { useState } from 'react'

export default function About(props) {


let  mystyle = {
    color:props.mode === 'dark'?'white':'grey',
    backgroundColor:props.mode === 'dark'?'grey':'white',
    border: '2px solid',
    bordercolor:props.mode === 'dark'?'white':'grey'
}

    return (
        <div className='container' style={mystyle}>
            <h1 className='my-3'>About us</h1>
            <div className="accordion" id="accordionExample" style={mystyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"style={mystyle}>
                          About TestUtils App
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                        I developed a TestUtils app using React, Bootstrap, and JavaScript, designed to simplify text editing and customization. Users can type or paste text into the app and easily copy it with a single click. The app offers text transformation features, allowing users to convert text between uppercase and lowercase effortlessly. Additionally, there’s a theme toggle feature, enabling users to switch between dark and light themes based on their preference. The app also provides a word count feature, giving users real-time feedback on the number of words they’ve written, making it ideal for quick text editing and analysis.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
