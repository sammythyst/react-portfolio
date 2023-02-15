import React from 'react';


function Portfolio() {
    const img = { 
        maxWidth: "500px",
        margin: "20px",
        display: "flex",
    }


    return (
        <div>
            <section>
                <div>
                    <a href="https://www.youtube.com/"><img src={require('../images/placeholder.jpg')} alt="placeholder image" style={img}/></a>
                </div>
                <div>
                    <a href="https://www.youtube.com/"><img src={require('../images/placeholder.jpg')} alt="placeholder image" style={img}/></a>
                </div>
                <div>
                    <a href="https://www.youtube.com/"><img src={require('../images/placeholder.jpg')} alt="placeholder image" style={img}/></a>
                </div>
                <div>
                    <a href="https://www.youtube.com/"><img src={require('../images/placeholder.jpg')} alt="placeholder image" style={img}/></a>
                </div>
                <div>
                    <a href="https://www.youtube.com/"><img src={require('../images/placeholder.jpg')} alt="placeholder image" style={img}/></a>
                </div>
                <div>
                    <a href="https://www.youtube.com/"><img src={require('../images/placeholder.jpg')} alt="placeholder image" style={img}/></a>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;