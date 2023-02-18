import React from 'react';
import { BsGithub } from 'react-icons/bs';


function Portfolio() {
    const img = { 
        maxWidth: "500px",
        margin: "0px 20px 75px",
        display: "flex",
    }

    const links = {
        display: "flex",
        flexwrap: "wrap",
        justifyContent: "space-evenly"
    }


    return (
        <div className='m-5'>
            <section className='justify-content-center d-flex flex-wrap'>
                <div>
                    <div style={links}>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><p>Project Name</p></a>
                        <a href="https://github.com/sammythyst" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <img src={require('../images/placeholder.jpg')} alt="placeholder" style={img}/>
                </div>
                <div>
                    <div style={links}>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><p>Project Name</p></a>
                        <a href="https://github.com/sammythyst" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <img src={require('../images/placeholder.jpg')} alt="placeholder" style={img}/>
                </div>
                <div>
                    <div style={links}>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><p>Project Name</p></a>
                        <a href="https://github.com/sammythyst" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <img src={require('../images/placeholder.jpg')} alt="placeholder" style={img}/>
                </div>
                <div>
                    <div style={links}>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><p>Project Name</p></a>
                        <a href="https://github.com/sammythyst" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <img src={require('../images/placeholder.jpg')} alt="placeholder" style={img}/>
                </div>
                <div>
                    <div style={links}>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><p>Project Name</p></a>
                        <a href="https://github.com/sammythyst" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <img src={require('../images/placeholder.jpg')} alt="placeholder" style={img}/>
                </div>
                <div>
                    <div style={links}>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><p>Project Name</p></a>
                        <a href="https://github.com/sammythyst" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <img src={require('../images/placeholder.jpg')} alt="placeholder" style={img}/>
                </div>
                
            </section>
        </div>
    );
}

export default Portfolio;