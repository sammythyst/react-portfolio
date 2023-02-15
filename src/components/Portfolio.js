import React from 'react';


function Portfolio() {
    const img = { 
        maxWidth: "500px",
        margin: "20px",
        display: "flex",
    }


    return (
        <div className='m-5'>
            <h3>Portfolio</h3>
            <section className='justify-content-center d-flex flex-wrap'>
                <div>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><p>Project Name</p></a>
                    <img src={require('../images/placeholder.jpg')} alt="placeholder" style={img}/>
                </div>
                <div>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><p>Project Name</p></a>
                    <img src={require('../images/placeholder.jpg')} alt="placeholder" style={img}/>
                </div>
                <div>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><p>Project Name</p></a>
                    <img src={require('../images/placeholder.jpg')} alt="placeholder" style={img}/>
                </div>
                <div>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><p>Project Name</p></a>
                    <img src={require('../images/placeholder.jpg')} alt="placeholder" style={img}/>
                </div>
                <div>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><p>Project Name</p></a>
                    <img src={require('../images/placeholder.jpg')} alt="placeholder" style={img}/>
                </div>
                <div>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><p>Project Name</p></a>
                    <img src={require('../images/placeholder.jpg')} alt="placeholder" style={img}/>
                </div>
                
            </section>
        </div>
    );
}

export default Portfolio;