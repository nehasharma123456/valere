import React from 'react'
import '../assets/videosection.css';
import Textpartical from './Textpartical'
export default function (props) {
  return (
    <div>
    <section class="third-section snap" name="thsection" id="third-section-first">
         <div class="container">
            <div class="row d-flex align-items-center row-inverse">
               <div class="col-md-6 col-sm-6">
                  <div class="particle-image-content ">
                    <video autoplay="true" muted="" loop="true" playsinline="" preload="metadata" height="500">
                        <source src={props.video} type="video/mp4"/>
                      </video>
                  </div>
               </div>
               <div class="col-md-6 col-sm-6">
               <h1 className='textpartical'>{props.textpartical}</h1>
                  <p>{props.para} 
                  </p>
                  <div class="right-inverted-side_content-bottom fadeup">
                     <div class="right-inverted-side_content-bottom-left">
                        <ul class="right-inverted-side_content-bottom-left_container">
                           <li class="pe-3 border-right"><img src="https://dev.valere.io/uploads/portfolio/android.svg"/></li>
                           <li class="ps-3"><img src="https://dev.valere.io/uploads/portfolio/ios.svg" class="ios-img"/></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}
