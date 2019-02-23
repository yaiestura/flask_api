import React, { Component } from 'react';
import M from 'materialize-css'
import Navbar from '../home/Navbar'
import './Docs.css'

class Docs extends Component {

    componentDidMount() {
        let elems = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(elems);
    }

    render() {
      return (
        <div>
          <Navbar/>
          <div className="card">  
            <h1>Docs Component</h1> 
            <div class="row">
              <div class="col s12 m9 l10">
                  <div id="introduction" class="section scrollspy">
                    <p>Content </p>
                  </div>
                  <div id="structure" class="section scrollspy">
                    <p>Content </p>
                  </div>
                  <div id="initialization" class="section scrollspy">
                    <p>Content </p>
                  </div>
              </div>
              <div class="col hide-on-small-only m3 l2">
                <ul class="section table-of-contents">
                  <li><a href="#introduction">Introduction</a></li>
                  <li><a href="#structure">Structure</a></li>
                  <li><a href="#initialization">Intialization</a></li>
                </ul>
              </div>
            </div>                    
          </div>
        </div>
      );
    }
}

export default Docs;

  
      