/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
//import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Firstscreen from './Firstscreen';
import Second from './Second';
import VideoSection from './VideoSection';
import VideoSectionInverted from './VideoSectionInverted';
import Contact from "./Contact";
import Textpartical from "./Textpartical";

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

class Home extends React.Component {
  constructor (props) {
    super(props)
   
  }
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
      <ReactFullpage
       
        scrollOverflow={false}
        // sectionsColor={["orange", "purple", "green"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
              <Firstscreen/>
              </div>
              
              <div className="section">
                <Second/>
              </div>
              <div className="section">
              <VideoSection video="./Videos/ppn (1).mp4" textpartical={<Textpartical textimage="./Images/sukhi.png"/>}  para="Valere helped PrePay Nation, a fintech company with 600 operators globally, design and build their one-stop application for topping-up prepaid mobile and landline services. Modern and engaging, the Telem app is used by millions of people worldwide to make it easier to add credit or a data plan to any Telem prepaid phone."/>
                
              </div>
              <div className="section">
              <VideoSectionInverted video="./Videos/vind.mp4" textpartical={<Textpartical textimage="./Images/VIND.png"/>}   para="Valere helped PrePay Nation, a fintech company with 600 operators globally, design and build their one-stop application for topping-up prepaid mobile and landline services. Modern and engaging, the Telem app is used by millions of people worldwide to make it easier to add credit or a data plan to any Telem prepaid phone."/>
                
              </div>
              <div className="section">
              <VideoSection video="./Videos/ppn (1).mp4" textpartical={<Textpartical textimage="./Images/VIND.png"/>}  para="Valere helped PrePay Nation, a fintech company with 600 operators globally, design and build their one-stop application for topping-up prepaid mobile and landline services. Modern and engaging, the Telem app is used by millions of people worldwide to make it easier to add credit or a data plan to any Telem prepaid phone."/>
                
              </div>
              <div className="section">
             <Contact/>
                
              </div>

            </div>
          );
        }}
      />
    );
  }
}

export default Home;



