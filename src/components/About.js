import React from 'react';

function About() {
    const dev = { 
        maxWidth: "100px",
        margin: "20px",
        display: 'flex', 
        justifyContent: 'center', 
    }


    return (
        <div>
            
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <div>
                <img src={require('../images/avatar.png')} alt="placeholder image" style={dev}/>
            </div>
            <p>Pellentesque lorem velit, imperdiet sit amet ligula ut, iaculis mattis turpis. Aenean quis scelerisque ipsum. Nulla hendrerit in diam in venenatis. Ut volutpat posuere mi, id mollis nisi elementum nec. Cras leo elit, blandit ac purus vel, semper vulputate urna. Cras iaculis, nisi id pharetra semper, ligula turpis pretium dui, nec commodo nulla augue non augue. Suspendisse tristique ullamcorper dolor non mattis.</p>
            
        </div>
    );
}

export default About;