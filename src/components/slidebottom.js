import React, { useState } from 'react';
import 'react-spring-bottom-sheet/dist/style.css';
import { BottomSheetDialog } from "react-bottom-sheet";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import frame from '../porter/truck-frame.png';
import bikeframe from '../porter/bike-frame.png';
import piggybank from '../porter/piggyBank_large.png';
import giftbox from '../porter/giftbox.png';
const BottomSlide =()=>{
    const [open, setOpen] = useState(true)
    
    return(
        < div className='sheet'>
        
        <BottomSheetDialog
        open={open}
        setOpen={setOpen}
      >
        <div style={{height: 500}}>
            <div className='open'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide >
                <div style={{display:'block',textAlign:'center'}}className="model">
                    <h1 style={{textAlign:'center'}}>How to earn coins?</h1>
                    <img  src={frame} alt="Card image cap" style={{paddingTop:'10%',objectFit:'cover'}}/>
                   
                    <p style={{paddingTop:'30%',paddingBottom:"20%"}}>Earn 7 porter coins with every truck or three-wheeler booking</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{display:'block',textAlign:'center'}}className="model">
                        <h1 style={{textAlign:'center'}}>How to earn coins?</h1>
                        <img  src={bikeframe} alt="Card image cap" style={{paddingTop:'10%',objectFit:'cover'}}/>
                    
                        <p style={{paddingTop:'30%',paddingBottom:"20%"}}>Earn 7 porter coins with every truck or three-wheeler booking</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{display:'block',textAlign:'center'}}className="model">
                            <h1 style={{textAlign:'center'}}>How to earn coins?</h1>
                            <img  src={piggybank} alt="Card image cap" style={{paddingTop:'10%',objectFit:'cover'}}/>
                        
                            <p style={{paddingTop:'30%',paddingBottom:"20%"}}>Earn 7 porter coins with every truck or three-wheeler booking</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{display:'block',textAlign:'center'}}className="model">
                            <h1 style={{textAlign:'center'}}>How to earn coins?</h1>
                            <img  src={giftbox} alt="Card image cap" style={{paddingTop:'10%',objectFit:'cover'}}/>
                        
                            <p style={{paddingTop:'30%',paddingBottom:"20%"}}>Earn 7 porter coins with every truck or three-wheeler booking</p>
                    </div>
                </SwiperSlide>
               
            </Swiper>

            </div>
        
        </div>
      </BottomSheetDialog>
        </div>
    )
}
export default BottomSlide;