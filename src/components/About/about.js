import React from 'react';
import coverImage from "../../Assets/images/santibasslogo.jpg";
function About() {
    return (
        <section className='my-5'>
          {/* This is the About */}
          <h1 id="about">Who am I?</h1>
          <img src={coverImage} className="my-2" style={{width: "50%",borderRadius:"8px"}} alt="cover" />
          <p>Paragraph about me here.</p>
        </section>
      );
}

export default About;