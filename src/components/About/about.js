import React from 'react';
import coverImage from "../../Assets/images/santibasslogo.jpg";
function About() {
    return (
        <section className='my-5'>This is the About
          <h1 id="about">Who am I?</h1>
          <img src={coverImage} className="my-2" style={{width: "30%",borderRadius:"8px"}} alt="cover" />
        </section>
      );
}

export default About;