import React from 'react'
import '../assets/videosection.css';
import Textpartical from './Textpartical'
export default function (props) {
  return (
    <div>
    <section className="third-section snap" name="thsection" id="third-section-first">
         <div className="container">
            <div className="row d-flex align-items-center row-inverse">
               <div className="col-md-6 col-sm-6">
                  <div className="particle-image-content ">
                  <video autoPlay={true}  loop={true} playsInline muted preload="metadata" height="500">
                        <source src={props.video} type="video/mp4"/>
                      </video>
                  </div>
               </div>
               <div className="col-md-6 col-sm-6">
               <h1 className='textpartical'>{props.textpartical}</h1>
                  <p>{props.para} 
                  </p>
                  <div className="right-inverted-side_content-bottom fadeup">
                     <div className="right-inverted-side_content-bottom-left">
                        <ul className="right-inverted-side_content-bottom-left_container">
                           <li className="pe-3 border-right"><img src="https://dev.valere.io/uploads/portfolio/android.svg"/></li>
                           <li className="ps-3"><img src="https://dev.valere.io/uploads/portfolio/ios.svg" className="ios-img"/></li>
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
