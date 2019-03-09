import React, { Component } from 'react';
import M from 'materialize-css'
import beach from './images/beach.jpg'
import city from './images/city.jpg'
import stars from './images/stars.jpg'
import street from './images/street.jpg'
import cheetah from './images/cheetah.jpg'


class Content extends Component {

    componentDidMount() {
      let elems = document.querySelectorAll('.parallax');
      M.Parallax.init(elems);  
      let mboxes = document.querySelectorAll('.materialboxed');
      M.Materialbox.init(mboxes);
      let tabs = document.querySelectorAll('.tabs');
      M.Tabs.init(tabs); 
    }
    
    render() {
      return(
        <div className="content">     
          <section class="container section" id="photos">
            <div class="row">
              <div class="col s12 l4">
                <div class="video-container responsive-video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/wv6dt_SWszs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
              <div class="col s12 l6 offset-l1">
                <h2 class="indigo-text text-darken-4">Презентация</h2>
                  <p>Видеоролик для презентации проекта: "Программный тестер соответствия спецификациям ONVIF" в МИЭМ 12 ноября 2018 года</p>
              </div>
            </div>
            <div class="row">
              <div class="col s12 l4 offset-l1 push-l7">
                <img src={cheetah} alt="" class="responsive-img materialboxed"/>
              </div>
              <div class="col s12 l6 offset-l1 pull-l5 right-align">
                <h2 class="indigo-text text-darken-4">Cheetah</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
              </div>
            </div>
            <div class="row">
              <div class="col s12 l4">
                <img src={city} alt="" class="responsive-img materialboxed"/>
              </div>
              <div class="col s12 l6 offset-l1">
                <h2 class="indigo-text text-darken-4">Night City</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
              </div>
            </div>
           </section>  
          <div class="parallax-container">
            <div class="parallax">
              <img src={street} alt="" class="responsive-img"/>
            </div>
          </div>          
          <section class="section container" id="services">
            <div class="row">
              <div class="col s12 l4">
                <h2 class="indigo-text text-darken-4">ONVIF Camera</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                  <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
              </div>
              <div class="col s12 l6 offset-l2">        
                <ul class="tabs">
                  <li class="tab col s6">
                    <a href="#photography" class="active indigo-text text-darken-4">Analytics</a>
                  </li>
                  <li class="tab col s6">
                    <a href="#editing" class="indigo-text text-darken-4">PTZ</a>
                  </li>
                </ul>
                <div id="photography" class="col s12">
                  <p class="flow-text indigo-text text-darken-4">Analytics</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                  <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
                </div>
                <div id="editing" class="col s12">
                  <p class="flow-text indigo-text text-darken-4">PTZ</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                  <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
                </div>
            </div>
            </div>    
          </section>
          <div class="parallax-container">
            <div class="parallax">
              <img src={stars} alt="" class="responsive-img"/>
            </div>
          </div>
        </div>
        )
    }
}

export default Content;