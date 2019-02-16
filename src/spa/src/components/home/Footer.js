import React from 'react';

const Footer = () => {
    return(
        <footer class="page-footer indigo">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5>About Us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Contact</h5>
                        <ul>
                            <li><a class="grey-text text-lighten-3" href="#">Facebook</a></li>
                            <li><a class="grey-text text-lighten-3" href="#">Twitter</a></li>
                            <li><a class="grey-text text-lighten-3" href="#">Linked In</a></li>
                            <li><a class="grey-text text-lighten-3" href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright grey darken-4">
                <div class="container center-align">&copy; 2019 ONVIF Compliance Tester</div>
            </div>
        </footer>    
    )
}

export default Footer;