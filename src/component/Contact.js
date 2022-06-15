import React,{useEffect,useState} from 'react'
import axios from 'axios';
export default function Contact() {

const [name,setName] =useState("");
const [email,setEmail] =useState("");
// const [mobile,setMobile] =useState("");
const [about,setAbout] =useState("");
function contact_submit()
{
    console.log({name,email,about});
    let data={name,email,about}
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments",{
method:'POST',
headers:{
    'Accept':'application/json',
    'Content-Type':'application/json',
},
body:JSON.stringify(data)
    }
    ).then((result)=>
    {
        console.log("result",result);
    })
}

  return (
    <div>
    <section className="seventh-section snap" id="seventh-section">
         <div className="seventh-section_content">
            <div className="seventh-section_title">
               <h1>Connect with Valere</h1>
            </div>
            <div className="seventh-section_form">
               <form action="">
                  <div className="form-section">
                     <input  type="text" 
                     name="name" 
                     id="name" 
                     placeholder="Name" 
                     value={name}
                     onChange={(e)=>{setName(e.target.value)}}
                     required=""/>

                     <input type="email" 
                     name="email" 
                     id="email" 
                     placeholder="Email" 
                     value={email}
                     onChange={(e)=>{setEmail(e.target.value)}}
                     required=""/>
                  </div>
                 
                  <div className="form-section">
                     <input type="text" 
                     name="about" 
                     id="about" 
                     value={about}
                     onChange={(e)=>{setAbout(e.target.value)}}
                     placeholder="Your Message"/>
                  </div>
                  <div className="row seventh-section_bottom">
                     <div className="col-md-8 col-sm-8">
                        <h4>By sending this form I confirm that I have read and accept the <span><a href="https://dev.valere.io/privacy-policy">Privacy Policy</a></span> 
                        </h4>
                     </div>
                     <div className="col-md-4 col-sm-4">
                        <button type="button" onClick={contact_submit}>
                           <p>send message</p>
                           <div className="button-back"></div>
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </section>
    </div>
  )
}

