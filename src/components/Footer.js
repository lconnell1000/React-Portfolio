import React from 'react';
import '../index.css';

function Footer () {
    return (
        <footer role="contentinfo" className="footer">
        <div className="row">
          <ul className="footer__social-links">
            <li className="footer__social-link-item">
              <a href="https://github.com/lconnell1000/" title="Link to Github Profile">
                <img src={"/assets/images/github.svg"} className="footer__social-image" alt="Github"/>
              </a>
            </li>
            <li className="footer__social-link-item">
              <a href="https://www.linkedin.com/in/lachlan-connell-87280392/">
                <img src={"/assets/images/linkedin.svg"} title="Link to Linkedin Profile" className="footer__social-image" alt="Linkedin"/>
              </a>
            </li>
          </ul>
        </div>
        <a href="#top" class="back-to-top" title="Back to Top">
       <img src={"/assets/images/arrow-up.svg"} alt="Back to Top" className="back-to-top__image"/>
     </a>
      </footer>
    )
}

export default Footer;