import React, { useState } from "react";
import truck from '../porter/truck (1).png';
import bike from '../porter/bike.png';
import piggy from '../porter/piggyBank.png';
import gift from '../porter/giftbox.png';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import star from '../porter/star_group.png';
import 'react-spring-bottom-sheet/dist/style.css';
import { BottomSheetDialog } from "@rakhimgaliyev/react-bottom-sheet";
import frame from '../porter/truck-frame.png';
import bikeframe from '../porter/bike-frame.png';
import piggybank from '../porter/piggyBank_large.png';
import giftbox from '../porter/giftbox.png';

const DemoCarousel=()=> {
  const [open, setOpen] = useState(false);
  const handleShowClick = () => {
      setOpen(true);
    };
    
  return (
    <div className="swipe"  >
     
     <Swiper >
      
        <SwiperSlide >
       
        <div className='points' onClick={handleShowClick}>
              <div role="button" >
                  <p style={{fontSize:'medium',paddingRight:'5%'}}>Earn 7 porter coins with every truck or 3-wheeler booking.</p>
                  <a style={{float:'left',paddingLeft:'5%' ,fontSize:"small"}} href='linkurl'>Know more</a>
                  <img style={{float:'left',paddingLeft:'30%'}} src={star} alt="Card image cap" />
                </div>
                
                <div>
                <img  src={truck} alt="Card image cap" />
              </div>
        </div>
           
        </SwiperSlide>
        
      
     
        <SwiperSlide>
        <div className='points' onClick={handleShowClick} >
              <div>
                <p style={{fontSize:'medium',paddingRight:'5%'}}>Earn 3 porter coins with every truck or 2-wheeler booking.</p>
                <a style={{float:'left',paddingLeft:'5%',fontSize:"small"}}href='linkurl'>Know more</a>
                <img style={{float:'left',paddingLeft:'30%'}} src={star} alt="Card image cap" />
              </div>
              
              <div>
              <img  src={bike} alt="Card image cap" />
              </div>
              </div>
        </SwiperSlide>
        
      
      
        <SwiperSlide>
        <div className='points' onClick={handleShowClick} >
              <div >
                <p style={{fontSize:'medium',paddingRight:'5%'}}>Earn 2 porter coins with every &#8377;100 spent.</p>
                <a style={{float:'left',paddingLeft:'5%',fontSize:"small"}}href='linkurl'>Know more</a>
                <img style={{float:'left',paddingLeft:'30%'}} src={star} alt="Card image cap" />
              </div>
              
              <div>
              <img  src={piggy} alt="Card image cap" />
              </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='points' onClick={handleShowClick}>
              <div >
                <p style={{fontSize:'large',paddingRight:'5%'}}>Redeem coins in porter credit in the multiples of 25.</p>
                <a style={{float:'left',paddingLeft:'5%',fontSize:"small"}}href='linkurl'>Know more</a>
                <img style={{float:'left',paddingLeft:'30%'}} src={star} alt="Card image cap" />
              </div>
              
              <div>
              <img  src={gift} alt="Card image cap" height='100px' width='100px' />
              </div>
              </div>
        </SwiperSlide >
       
      </Swiper>
      

      < div className='sheet'>
        
        <BottomSheetDialog
        open={open}
        setOpen={setOpen}
      >
        <div style={{height:'500px'}}>
        
            <div className='open'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwipe">
                <SwiperSlide >
                <div style={{display:'block',textAlign:'center'}}className="model">
                    <h2 style={{textAlign:'center',fontsize:'22px',paddingTop:'10px'}}>How to earn coins?</h2>
                    <img  src={frame} alt="Card image cap" style={{paddingTop:'10%',width:'100%',height:'100%'}}/>
                   
                    <h3 style={{paddingTop:'5%'}}>Earn <span style={{color:"#A37F41"}}>7 porter coins</span> with every truck or three-wheeler booking.</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{display:'block',textAlign:'center'}}className="model">
                        <h2 style={{textAlign:'center',paddingTop:'10px',fontsize:'22px'}}>How to earn coins?</h2>
                        <img  src={bikeframe} alt="Card image cap" style={{paddingTop:'10%',width:'100%',height:'100%'}}/>
                    
                        <h3 style={{paddingTop:'5%'}}>Earn <span style={{color:"#A37F41"}}>3 porter coins</span> with every truck or three-wheeler booking.</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{display:'block',textAlign:'center',}}className="model">
                            <h2 style={{textAlign:'center',paddingTop:'10px'}}>How to earn coins?</h2>
                            <img  src={piggybank} alt="Card image cap" style={{paddingTop:'10%',objectFit:'cover'}}/>
                        
                            <h3 style={{paddingTop:'5%',paddingBottom:"10%"}}>Earn <span style={{color:"#A37F41"}}>2 porter coins</span> with every truck or three-wheeler booking.</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{display:'block',textAlign:'center'}}className="model">
                            <h2 style={{textAlign:'center',paddingTop:'10px'}}>How to Redeem coins?</h2>
                            <img  src={giftbox} alt="Card image cap" style={{paddingTop:'10%',objectFit:'cover'}}/>
                        
                            <h3 style={{paddingTop:'5%',paddingBottom:"10%"}}><span style={{color:"#A37F41"}}>Reedem</span> coins into porter credits in the multiples of <span style={{color:"#A37F41"}}>25</span>.</h3>
                    </div>
                </SwiperSlide>
               
            </Swiper>

            </div>
        
        </div>
      </BottomSheetDialog>
        </div> 
    </div>
  );
}
export default DemoCarousel;