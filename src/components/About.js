
import '../index.css';


function About () {



    return (
        <section className="about" id="about">
        <div className="row">
          <h2>About Me</h2>
          <div className="about__content">
            <div className="about__text">
             
              <p>
                  Hi! My name is Lachlan and I am from Adelaide in South Australia. I’ve taken the scenic route into programming and have enjoyed the ride so far.  My first introduction to building software was in 2013 studying petroleum engineering, where I was able to take an introduction to programming course where I built some basic software in C++.  While I enjoyed the course, I took the opportunity to defer and travel and didn’t look back!

Currently I’m just about to complete a coding bootcamp with the University of Adelaide.  Here I’ve been able to improve my skills with JavaScript, HTML and CSS.  I’ve been able to get some exposure to React and Node also.

              </p>
              
              <a href={"Lachlan.ConnellResume.pdf"} className="btn" target="_blank">My Resume</a>
            </div>
  
            <div className="about__photo-container">
              <img className="about__photo" src={"./assets/images/me.png"} alt="Me" />
            </div>
          </div>
        </div>
        <a href="#top" class="back-to-top" title="Back to Top">
       <img src={"./assets/images/arrow-up.svg"} alt="Back to Top" className="back-to-top__image"/>
     </a>
    
      </section>
    );
}

export default About;