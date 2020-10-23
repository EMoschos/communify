import React from "react";

function Footer() {

    return (
        <footer className="page-footer blue">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Dev Bio</h5>
                        <p className="grey-text text-lighten-4">
                            Terry is a Full-Stack Web Developer.  He has put in countless hours in order to deliver this project before the deadline date.  This project will be continually evolving so watch this space!!!
                         </p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Profile</h5>
                        <ul>
                            <li><i className="fas fa-user"></i> Eleftherios Moschos</li>
                            <li><i className="fas fa-envelope"></i> tmoschos@bigpond.com</li>
                            <li><i className="fas fa-phone-alt"></i> 0400079794</li>
                            <li><a className="navbar-brand" href="https://www.linkedin.com/in/eleftherios-moschos-380409113/">
                                <img src="./img/linkin.png" width="30" height="30" alt="linkedin logo" loading="lazy" />
                            </a>
                                  <a className="navbar-brand" href="https://github.com/EMoschos">
                                    <img src="./img/github.png" width="30" height="30" alt="Github logo" loading="lazy" />
                                </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    Made with <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;