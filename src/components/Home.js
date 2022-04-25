import React,{useState} from 'react'
import './col.css'
import {Helmet} from "react-helmet";
import { Button, Modal,ModalHeader,FormGroup, ModalBody, Form, Label, Input, ModalFooter } from "reactstrap"
import Nav from './Nav'
import Main from './Main'
import Feature from './Feature'
import Access from './Access';
import Layout from './Layout';
import Like from './Like';
import Plan from './Plan';
import Work from './Work';
import Demo from './Demo';
import Design from './Design';
import SpeedPack from './SpeedPack'
import Details from './Details';
import Tool from './Tool';
import RoadMap from './RoadMap';
import Accord from './Accord';
import Partners from './Partners';
import Quality from './Quality';
import Showcase from './Showcase';
import Offer from './Offer';
import Footer from './Footer';
const Home=()=> {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
<>
    <Helmet>
      <script src="js/app.js"></script>
     <script src="js/common.js"></script>
    </Helmet>
    
      <div className="page">
        <div className="main">
          <Nav/>
          <Main/>      
          <Feature/>
      </div>
      <Access/>
      <Layout/>    
      <Like/>
      <Plan/>
      <Work/>

      {/* <SpeedPack/> */}
      <Demo/>
      {/* <Design/> */}
      {/* <Details/> */}
    <Tool/>
    <RoadMap/>  
    {/* <Accord/> */}
     <Partners/> 
     <Quality/>       
     <Showcase/> 
     <Offer/>
     <Footer/>   

      
 
 



     

      
      
      



     

      
            <div class="popup mfp-hide" id="popup-contact">
        <div class="popup__wrap">
          <div class="popup__head"><a class="popup__logo" href="#"><img class="popup__pic" src="img/logo.svg" alt=""/></a></div>
          <div class="popup__body">
            <div class="popup__title title">Get in touch<span class="title__color">.</span></div>
            <div class="popup__info">Enter your detail below</div>
            <form class="popup__form">
              <div class="popup__field field">
                <div class="field__label">Name</div>
                <div class="field__wrap">
                  <div class="field__icon"><img class="field__pic" src="img/user.svg" alt=""/></div><input class="field__input" type="text" name="name" placeholder="Name"/>
                </div>
              </div>
              <div class="popup__field field">
                <div class="field__label">Email</div>
                <div class="field__wrap">
                  <div class="field__icon"><img class="field__pic" src="img/sending-mail.svg" alt=""/></div><input class="field__input" type="email" name="email" placeholder="Email address"/>
                </div>
              </div>
              <div class="popup__field field field_textarea">
                <div class="field__label">Message</div>
                <div class="field__wrap">
                  <div class="field__icon"><img class="field__pic" src="img/message.svg" alt=""/></div><textarea class="field__textarea" name="Message" placeholder="Message"></textarea>
                </div>
              </div><button class="popup__btn btn btn_purple" type="submit">Send now</button>
            </form>
            <div class="popup__circles">
              <div class="popup__circle"></div>
              <div class="popup__circle"></div>
            </div>
          </div>
          <div class="popup__bg">
            <div class="popup__preview"><img class="popup__pic" src="img/popup-pic-1.png" alt=""/></div>
            <div class="popup__preview"><img class="popup__pic" src="img/cursor-1.png" alt=""/></div>
          </div>
        </div>
      </div>



    </div>  
    </>

  )
}

export default Home