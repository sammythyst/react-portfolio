import React from 'react';
// import Contact from './Contact';

function About() {
    const dev = { 
        maxWidth: "300px",
        display: 'flex', 
    }


    return (
        <div className="m-5">
            <div className='d-md-flex'>
                <div>
                    <h3 className="px-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus ultricies elit ac varius.</h3>
                    <p className="px-2">Maecenas non nulla nec turpis sodales dictum non eu augue. Nullam eu porttitor arcu. Nulla ut erat erat. Etiam et dignissim arcu. Nulla aliquet molestie purus. Nam sit amet lorem id velit suscipit porta et a nunc.</p>
                    <p className="px-2">Suspendisse malesuada semper lorem, sit amet feugiat sapien congue ut. Vestibulum accumsan mattis sapien, ut pulvinar arcu hendrerit non. Nulla libero tellus, luctus ut pharetra malesuada, semper nec lacus. Maecenas tristique, nulla a pellentesque ornare, mauris magna venenatis ipsum, sit amet mollis lacus turpis nec felis.</p>
                </div>
                <div>
                    <img src={require('../images/avatar.png')} alt="placeholder" style={dev}/>
                </div>
            </div>
            {/* might move contact form here */}
            {/* <div>
                <Contact />
            </div> */}
        </div>
    );
}

export default About;