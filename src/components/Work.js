import React from 'react';
import '../index.css';

function Work () {
return (
    <section className="work" id="work">
      <div className="row">
        <h2>My Work</h2>
        <div className="work__boxes">


          <div className="work__box">
            <div className="work__text">
              <h3>Cocktail Bar Stocktake Program</h3>
              <p>
                Our first group project of the course using all the front end technology we had learnt so far
              </p>
              <ul className="work__list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bulma</li>
              </ul>

              <div className="work__links">
                <a href="https://lconnell1000.github.io/Project-1/" target="_blank" className="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/lconnell1000/Project-1" title="View Source Code" target="_blank">
                  <img src={"./assets/images/github.svg"} className="work__code" alt="GitHub"/>
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src={"./assets/images/cocktail.png"} className="work__image" alt="Cocktail" />
            </div>
          </div>

          <div className="work__box">
            <div className="work__text">
              <h3>Novel Space</h3>
              <p>
               Our second group project where we made an employee bookclub application using both front end and back end programming under the MVC framework. 
              </p>
              <ul className="work__list">
                <li>Javascript</li>
                <li>ORM (Sequelize)</li>
                <li>Bootstrap</li>
                <li>Handlebars</li>
              </ul>

              <div className="work__links">
                <a href="https://novelspace.herokuapp.com/" target='_blank' className="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/lconnell1000/Project-2-Employee-Bookclub"title="View Source Code" target="_blank">
                  <img src={"./assets/images/github.svg"} className="work__code" title="View Source Code" alt="GitHub"/>
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src={"./assets/images/novel.png"} className="work__image" alt="bookclub" />
            </div>
          </div>

          <div className="work__box">
            <div className="work__text">
              <h3>Team Profile Generator</h3>
              <p>
                A node Js command line application to take in information about employees on a software engineering team and generate a html webpage with this information.
              </p>
              <ul className="work__list">
                <li>Node Js</li>
                <li>Javascript</li>
                <li>Inquirer</li>
              </ul>

              <div className="work__links">
                <a href="https://drive.google.com/file/d/19Dylqekloj3YLcPEVy72itDfpZRG1U2s/view" target="_blank" className="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/lconnell1000/TeamProfileGenerator" title="View Source Code" target="_blank">
                  <img src={"./assets/images/github.svg"} className="work__code" alt="GitHub"/>
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src={"./assets/images/teamprofile.png"} className="work__image" alt="team profile" />
            </div>
          </div>

        
        <div className="work__box">
            <div className="work__text">
              <h3>Employee Tracker</h3>
              <p>
                A CMS used to track employees at a company.
              </p>
              <ul className="work__list">
                <li>Node Js</li>
                <li>Mysql2</li>
                <li>Console table</li>
              </ul>

              <div className="work__links">
                <a href={"https://drive.google.com/file/d/1e7ovNjn6b6-LZjic3Q9NeacXETktLDQP/view"} target="_blank" className="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/lconnell1000/Employee-Tracker-Assignment" title="View Source Code" target="_blank">
                  <img src={"./assets/images/github.svg"} className="work__code" alt="GitHub"/>
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src={"./assets/images/employeetracker.png"} className="work__image" alt="employee tracker" />
            </div>
          </div>
          <div className="work__box">
            <div className="work__text">
              <h3>Task Tracker React App</h3>
              <p>
                A front-end react app I made from a crash course by Travery Media on Youtube.
              </p>
              <ul className="work__list">
                <li>React</li>
                <li>Javascript</li>
                <li>React-Router-Dom</li>
              </ul>

              <div className="work__links">
                <a href={"https://lconnell1000.github.io/task-tracker-react-app/"} target="_blank" className="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/lconnell1000/task-tracker-react-app/blob/master/src/App.js" title="View Source Code" target="_blank">
                  <img src={"./assets/images/github.svg"} className="work__code" alt="GitHub"/>
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src={"./assets/images/Tasktracker.png"} className="work__image" alt="employee tracker" />
            </div>
          </div>
          <div className="work__box">
            <div className="work__text">
              <h3>Social Network Api</h3>
              <p>
                A back-end social network API using MongoDB.
              </p>
              <ul className="work__list">
                <li>Node Js</li>
                <li>Nosql</li>
                <li>MongoDB</li>
              </ul>

              <div className="work__links">
                <a href={"https://drive.google.com/file/d/1EAbCPktFJRFFxreac-oOf4oqDljtZ8ha/view"} target="_blank" className="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/lconnell1000/SocialNetworkAPI" title="View Source Code" target="_blank">
                  <img src={"./assets/images/github.svg"} className="work__code" alt="GitHub"/>
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src={"./assets/images/socialnetwork.png"} className="work__image" alt="employee tracker" />
            </div>
          </div>
        </div>
      </div>
      <a href="#top" class="back-to-top" title="Back to Top">
       <img src={"./assets/images/arrow-up.svg"} alt="Back to Top" className="back-to-top__image"/>
     </a>
    </section>
    )
}

export default Work;
