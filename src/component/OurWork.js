import React from 'react'
import Contact from './Contact'

export default function OurWork() {
  return (
    <div className='portfolio-div'>
    <section className='portfolio-banner pt-5 '>
    <div className='container'>
    <div className='row d-flex'>
    <div className='col-md-10'>
    <h1>
    See Our Work that Bends the Universesw
    </h1>
    <p>Valerians build market penetrating applications for the people of Earth</p>
    <button type="button" className="btn btn-contact" >Start Project</button>

    </div>
    </div>
    </div>
    </section>
    <section className='pt-5 pb-5'>
    <div className='container'>
    <div className="row">
    <div className="col-lg-4 col-md-4 m-0">
      <div className="new_product left">
        <div className="image_product">
           <img src="https://valere.io/uploads/portfolio/port-sec-1.png" className="product_img img-fluid"/>
           <div className="description_product">
             <img width="82" height="82" src="https://valere.io/uploads/portfolio/icon-3.png" className="attachment-full size-full" alt="b" loading="lazy"/>
          <h1>100+</h1>
          <p>Live Apps</p>
        </div>
        </div>
        
      </div>
    </div>
    <div className="col-lg-4 col-md-4 m-0 ">
      <div className="new_product mid">
        <div className="image_product">
           <img src="https://valere.io/uploads/portfolio/port-sec-1.png" className="product_img img-fluid"/>
           <div className="description_product">
             <img width="82" height="82" src="https://valere.io/uploads/portfolio/icon-3.png" className="attachment-full size-full" alt="b" loading="lazy"/>
          <h1>10+</h1>
          <p>Industry Sectors</p>
        </div>
        </div>
        
      </div>
    </div>
    <div className="col-lg-4 col-md-4 m-0 ">
      <div className="new_product right">
        <div className="image_product">
           <img src="https://valere.io/uploads/portfolio/port-sec-1.png" className="product_img img-fluid"/>
           <div className="description_product">
             <img width="82" height="82" src="https://valere.io/uploads/portfolio/icon-3.png" className="attachment-full size-full" alt="b" loading="lazy"/>
          <h1>1M+</h1>
          <p>Hours of Development Experience</p>
        </div>
        </div>
        
      </div>
    </div>
   </div>
    </div>
    </section>
    <section>
    <div className='container px-5'>
    <div className='row d-flex justify-content-between'>
    <div className='col-md-5'>
     <Portfolioitem/>
     <Portfolioitem/>
     <Portfolioitem/>
    </div>
    <div className='col-md-5 mt--200'>
    <Portfolioitem/>
    <Portfolioitem/>
    <Portfolioitem/>
    </div>
    </div>
    </div>
    </section>
    <Contact/>
    </div>
  )
}
export function Portfolioitem(){
  return(
    <div className="port-mob_style_app_sec_inn mt-0 FLYVIRGA">
    <h2 className="port_style_app_sec_heading" >POACH AI</h2>
    <p>A web platform, powered by AI, for recruiters to discover "sentiment scores" that convey how employees feel about their company. Used by recruiters to “poach” employees from companies.</p>
    <div className="port_style_app_img_inn image">
     <img src="https://valere.io/public/images/portfolio_new/POACH.png" className="img-fluid inner"/>
    </div>
 </div>
  )
}
