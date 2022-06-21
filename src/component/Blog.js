import React from 'react'
import { Link } from 'react-router-dom';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Contact from "./Contact";

export default function Blog() {
  const Option={
  
    items:2,
    loop:true,
    autoplay:true,
    margin:20,
    responsive:{
      0:{
        items:1
    },
        600:{
            items:2
        },
        1000:{
          items:2
      }
    }        
  }
  return (
    <div className='full-blog-wrapper'>
    <div className='' style={{backgroundColor:'#fff'}}>
    <section>
    <div className='bolg-bg'></div>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-md-1'></div>
    <div className='col-md-11 px-0'>
    <OwlCarousel className="owl-theme blog-slider"  nav {...Option}>
  <Blogslider/>
  <Blogslider/>
  <Blogslider/>
  <Blogslider/>
  </OwlCarousel></div>
    </div>
   
    </div>
    </section>
    <section className='pt-5'>
    <div className='container'>
    <div className='row'>
    <div className='col-xl-4 col-lg-4'>
    <div className='widget-catogory'>
    <h1>Category</h1>
    <ul className='p-0'>
    <li>
    <Link to=''>All</Link>
    </li>
    <li>
    <Link to=''>Technology</Link>
    </li>
    <li>
    <Link to=''>App Development</Link>
    </li>
    <li>
    <Link to=''>Mobile App</Link>
    </li>
    </ul>
    </div>
    <div className="widget-latest">
    <h1>Popular Blog</h1>
    <ul className="block-list p-0">
    <Popularblog/>
    <Popularblog/>
    <Popularblog/>
    </ul>
    </div>
    
    </div>
    <div className='col-xl-8 col-lg-8 p-0'>
    <div className='row'>
    <div className='col-md-6'>
      <Blogitem 
      itemimg={process.env.PUBLIC_URL + "/Images/images.png"}
       itemtitle="What Makes Valere’s Sports Training IoT App So Great?"
       itemdescription="Is IoT Sports Training the next big thing? Find out what is it and what are the benefits for anyone..."
       />
       <Blogitem 
       itemimg={process.env.PUBLIC_URL + "/Images/images.png"}
        itemtitle="What Makes Valere’s Sports Training IoT App So Great?"
        itemdescription="Is IoT Sports Training the next big thing? Find out what is it and what are the benefits for anyone..."
        />
        <Blogitem 
        itemimg={process.env.PUBLIC_URL + "/Images/images.png"}
         itemtitle="What Makes Valere’s Sports Training IoT App So Great?"
         itemdescription="Is IoT Sports Training the next big thing? Find out what is it and what are the benefits for anyone..."
         />
    </div>
    <div className='col-md-6 pt-5 mt-5'>
    <Blogitem 
    itemimg={process.env.PUBLIC_URL + "/Images/images.png"}
     itemtitle="What Makes Valere’s Sports Training IoT App So Great?"
     itemdescription="Is IoT Sports Training the next big thing? Find out what is it and what are the benefits for anyone..."
     />
     <Blogitem 
     itemimg={process.env.PUBLIC_URL + "/Images/images.png"}
      itemtitle="What Makes Valere’s Sports Training IoT App So Great?"
      itemdescription="Is IoT Sports Training the next big thing? Find out what is it and what are the benefits for anyone..."
      />
      <Blogitem 
      itemimg={process.env.PUBLIC_URL + "/Images/images.png"}
       itemtitle="What Makes Valere’s Sports Training IoT App So Great?"
       itemdescription="Is IoT Sports Training the next big thing? Find out what is it and what are the benefits for anyone..."
       />
    </div>
    </div>
    </div>
    </div>
    

    
    </div>
    </section>
    
    </div>
    <Contact/>
    </div>
  )
}
export  function Blogslider() {
  
  return (
   
   
    <div class="item">
    
    <img src={process.env.PUBLIC_URL + "/Images/images.png"} ></img>
    <div className='item-content w-80'>
    <h2 className='text-white'> How much does it cost to build an app like Slack?</h2>
    <div className='row'>
    <div className='col-md-6'>
   <Link to=''> READ MORE</Link>
    </div>
    <div className='col-md-6 d-flex justify-content-end align-items-center'>
    <span className="badge bg-secondary text-white">New</span>
    </div>
    </div>
    </div>
    </div>
   

  )
}
export function Blogitem(props){
  return(
    <div className="blog-box-layout1 pb-5">
    <div className="item-img">
     <img src={props.itemimg} alt="blog" className="w-100"/>
    </div>
    <div className="item-content">
      <h3 className="item-title titile01">{props.itemtitle}</h3>
        <ul className="entry-meta meta-color-dark">
           <li><i className="fas fa-calendar-alt"></i>23rd November 2021
            </li>
            </ul>  
            <p>{props.itemdescription}</p>                                             
              <button  className=" item-btn-black">READ MORE</button>
              </div>
              </div>
  )
}
export function Popularblog(){
  return(
    <>
                        
                                                                                 
                            <li className="single-item d-flex py-2">
                               <div className="item-img">
                                    <img src="https://valere.io/../uploads/topics/16514762612600.png" alt="Post"/>
                                 </div>
                                 <div className="popularblog-content">
                                    
                                    <h6 className="item-title fw-normal"> Your app’s checkout optimization is key to a great conversion rate. Here’s how!</h6>
                                    <Link to=''>Read More..</Link>
                          
                           </div>
                           </li>                                                     
                       
                        </>
                   
  )
}