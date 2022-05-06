
import '../index.css';


function About () {



    return (
        <section className="about" id="about">
        <div className="row">
          <h2>About Me</h2>
          <div className="about__content">
            <div className="about__text">
             
              <p>
                  Hi! My name is Lachlan and I am from Adelaide in South Australia. I enrolled in the University of 
                  Adelaide's coding bootcamp and started my course on the 29th of November 2021. <br></br>
                  Since starting the bootcamp it has been a very challenging learning journey but also very exciting and 
                  rewarding.<br></br> When i'm not spending time working on my coding skills I spend most my time either watching
                  sports, or cycling
              </p>
              
              <a href={"Lachlan.ConnellResume.pdf"} className="btn" target="_blank">My Resume</a>
            </div>
  
            <div className="about__photo-container">
              <img className="about__photo" src={"./assets/images/me.png"} alt="Me" />
            </div>
          </div>
        </div>
        <a href="#top" class="back-to-top" title="Back to Top">
       <img src={"/assets/images/arrow-up.svg"} alt="Back to Top" className="back-to-top__image"/>
     </a>
    
      </section>
    );
}

export default About;