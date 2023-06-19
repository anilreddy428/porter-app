import React, { useEffect,useState} from 'react';
// import { useParams } from 'react-router';
import image from '../porter/close.png';
import image1 from '../porter/coins_bg.png';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DemoCarousel from '../components/slide.js';
import NewData from './history';
import 'react-spring-bottom-sheet/dist/style.css';
import Bottempad from './bottom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
const PorterPort=()=> {
  // const conditions = useParams();
 
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 450px)").matches
  )
  
  const [open, setOpen] = useState(false);
  const handleShowClick = () => {
  setOpen(true);
    };                        
  useEffect(() => {
    window
    .matchMedia("(min-width: 450px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
  
    return(
      <div >
        
      {matches && (<h1 style={{textAlign:'center',width:'auto',fontSize:'medium',marginTop:'25%'}}>Please rotate your device, We do not support landscape mode, Please use the app in portrait mode for best experience</h1>)}
   <div className='header'>
    
      {!matches && (
        <div>
          
        <h4 style={{padding:"10px 0px 10px 10px",}}>Porter Rewards       
        <img src={image} alt="image" className='image'></img></h4>
    <div className='page1'>
      <div className='rewards'>
          <img src={image1} alt="something"  style={{float:'right',margin:'0px'}}/>
        <div style={{paddingTop:'100px'}}>
          <h6 style={{color:"white", textAlign:"left"}}>Welcome to</h6>
          <h1 style={{color:"white"}}>Porter <span style={{color:"#deb604"}}>Rewards</span></h1>
        <div  style={{ color:"#deb604",backgroundColor:"#4037B64D" ,height:"40px" ,marginTop:"10px",fontSize:"20px" ,paddingLeft:"10px" }}><span style={{paddingTop:'1rem'}}>&#8377;2460 saved till now!</span></div>
        </div>
        <Bottempad/>
        
        <div onClick={handleShowClick}>
       <DemoCarousel />
       </div>
    </div>
    
      
        <NewData />
    <div style={{ backgroundColor: "#f8f9fa" ,  width:'auto', padding:'20px',marginTop:'30px'}}>
      <div className="help">
        <h2 className="get-help-label fw-600 ff-Lato"style={{fontSize:'large'}}>
         <b>NEED HELP?</b> 
        </h2>
      </div>       
    <div style={{ backgroundColor: "#f8f9fa",fontFamily:'Lato,sans-serif'  }}>
        <Accordion style={{ backgroundColor: "#f8f9fa",fontFamily:'Lato,sans-serif' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography style={{ fontSize: "14px" }}>
              Do the Portor coins expire?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontSize: "14px", color: "#818281" }}>
              yes,Portor coins expire afterone year i.e 365 days from the date
              of credit.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ backgroundColor: "#f8f9fa" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontSize: "14px" }}>
              What is the value of a Portor coin in Rupees?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontSize: "14px", color: "#818281" }}>
              Each Portor coin translates to Re.1.if 50 Portor coins are
              redeemed.Rs.50 is added to Portor Credits.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ backgroundColor: "#f8f9fa" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontSize: "14px" }}>
              How can i use Portor coins?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontSize: "14px", color: "#818281" }}>
              Portor coins can be redeemed in multiples of 25 and they get added
              to Portor Credits.This amount can be used to pay for rides or
              services on Portor.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ backgroundColor: "#f8f9fa" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontSize: "14px" }}>
              When are the Portor coins awarded?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontSize: "14px", color: "#818281" }}>
              Portor coins are awarded as soon as the custumer completes the
              trip,it is the reflected on the Portor rewards page.
            </Typography>
          </AccordionDetails>
         
        </Accordion>
      </div>
    </div>
<div> 
   
</div>

</div>
<h6 style={{padding:"20px"}}><a href="/conditions" style={{textDecoration: "none",color:"black",fontSize:"medium"}}>Terms and Conditions</a></h6>
<div class="social-container">
<h3 className='follow' >Social Follow</h3>
<div className='media'>
      <a href="https://www.youtube.com/@porter4293"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="1x" />
      </a>
      <a href="https://www.facebook.com/porterindia/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a href="https://twitter.com/porterit_" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a href="https://www.instagram.com/porter_it/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
      </div>
</div>
</div>

)}

</div>

</div>
    );
}
export default PorterPort;