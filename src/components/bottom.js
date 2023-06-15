import React, { useEffect, useState } from 'react';
import 'react-spring-bottom-sheet/dist/style.css';
import { BottomSheetDialog } from "@rakhimgaliyev/react-bottom-sheet";
import styled from "styled-components";
import SliderComponent from './slidercomponent';
import CloseButton from 'react-bootstrap/CloseButton';
import image2 from '../porter/single_coin.png';
const Bottempad =()=>{
  
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(0);
    const [redeemvalue, setRedeemvalue]=useState(0);
    // const[remainingvalue,setRemainingvalue]=useState(0);
    const[totalcoins,setTotalcoins]=useState(990);
    const [stepper, setStepper]=useState(0);
    const[step,setStep]=useState(0);
   
    // useEffect(() => {
    //   if(totalcoins <200){
    //     stepper(25);
    //   }else{
    //     setStepper((totalcoins/8)-((totalcoins/8)%25));
    //     setRemainingvalue((totalcoins-(stepper*8))); 
    //   }
    // });

    const handleShowClick = () => {
      setOpen(true);
    };
    const handleHide = () => {
      setOpen(false);
      setValue(0);
    };
  
    
    
    const handleChange = (event) => {
      setValue(event.target.value);
      setRedeemvalue(event.target.value)
      // if(remainingvalue>stepper){
      //    setStep(redeemvalue/stepper);
      //   if(step==7){
      //     setStepper((stepper+(remainingvalue-(remainingvalue%25))));
          
      //   }
      // }
      
    };
   
    
const changeEvent=()=>{
setTotalcoins((totalcoins-redeemvalue));
setValue(0);
setStepper(0);


  }
    
    return(
        < div >
        <div className='main'>
                <h2 style={{textAlign:'center',fontSize:"64px",fontFamily:'Lato,sans-serif'}}>{totalcoins}</h2>
                <h4>COINS</h4>   
                <p className="card-text">1 <img src={image2} alt="missing" height={30}></img> =  &#8377; 1 </p>
                <button   className="btn btn-warning" onClick={handleShowClick}>Redeem 25 coins now</button> 
                <h6 style={{paddingTop:'10px'}}>You need 5 more coins to redeem all</h6>
        
        </div>
        <div className='bottomsheet'>
        <BottomSheetDialog
        open={open}
        setOpen={setOpen} 
       
      >
        <div style={{height: '500px'}}>
        <CloseButton onClick={handleHide} style={{display:'flex',float:'right',padding:'10% 10% 0% 0%'}}/>
        <div style={{textAlign:'center',paddingTop:'20%'}}>
          <p style={{textAlign:'center',fontSize:'40'}}><span style={{fontSize:'50px'}}>{value}</span>/{totalcoins}</p>
          <h6>COINS</h6>
      <AppContainer>
      <h2>{value}</h2>

      <SliderComponent
        value={value}
        handleChange={handleChange}
        min={0}
        max={totalcoins}
        step={25}
        
      />
    </AppContainer>
    <p style={{textAlign:'center',marginTop:'8%',paddingBottom:'10%'}}>You can redeem in the miltiples of 25</p>
    <div style={{margin:'10%'}}>
   
   { (value === 0)?(<button onClick={changeEvent} className='btn btn-success'>Redeem now</button>)
      
:(<button onClick={changeEvent} className='btn btn-primary'>Redeem now</button>)
     }
    
  
   </div>
        </div>
        </div>
      </BottomSheetDialog>
        </div>
        </div>
    )
}
export default Bottempad;
const AppContainer = styled.div`
  width: 90%;
  padding-left:10%;
  justify-content: center;
 
  color: #ffffff;
`;