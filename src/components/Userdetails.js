import React, { useRef, useLayoutEffect } from 'react'
import left from '../porter/left_arrow.png';
import filter from '../porter/filter_icon.png';
import truck from '../porter/truck.png';
import coin from '../porter/single_coin.png'; 
import expired from '../porter/expired.png';
import coin1 from '../porter/coin_expired.png';
import wallet from '../porter/wallet.png';
import bike from '../porter/scooter.png';
import CloseButton from 'react-bootstrap/CloseButton';
import { useState } from 'react';
import { BottomSheetDialog } from "@rakhimgaliyev/react-bottom-sheet";
const UserDetails=()=> {
    const [open, setOpen] = useState(false);
    const stickyHeader = useRef()
    useLayoutEffect(() => {
      const mainHeader = document.getElementById('mainHeader')
      let fixedTop = stickyHeader.current.offsetTop
      const fixedHeader = () => {
        if (window.pageYOffset > fixedTop) {
          mainHeader.classList.add('fixedTop')
        } else {
          mainHeader.classList.remove('fixedTop')
        }
      }
      window.addEventListener('scroll', fixedHeader)
    }, [])
    const handleShowClick = () => {
        setOpen(true);
      };
      const handleHide = () => {
        setOpen(false);
      };
    
    return(
        <div>
        <div className="mainHeader" id="mainHeader" ref={stickyHeader}>
         <div style={{backgroundColor: 'rgb(9, 9, 179)',height:'100px'}}>
                <div className="inner">
                <a href='/' ><img src={left} alt="image" style={{paddingRight:'50px'}} ></img></a>
                <div className="rating">
                <h4>History</h4>

                </div>
                </div>
              <span onClick={handleShowClick}><img src={filter} alt="image" className='image'style={{paddingTop:'60px',paddingRight:'14%'}}></img>
                    <h6 style={{paddingTop:'60px',color:'white',paddingLeft:'70%'}} > Filter</h6></span>
            </div>
      </div>
      <h6 style={{fontsize:'small',backgroundColor:'#e9ecef',padding:'5px 20px 5px 20px'}}>This month</h6>
            <div className="history">
            <div>
                <img src={truck} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45 . &#8377;350 <h6>Truck or 3-Wheeler</h6></p>
                <span style={{color:'green',fontSize:'15px',}}>+5 <img src={coin} alt='image' ></img></span>
                </div>
            </div>
            <div style={{fontsize:'small',backgroundColor:' #f8f9fa', border:'10px solid white'}}>
                <h6 style={{fontSize:'small',color:'grey'}}>Pickup From</h6>
                <p style={{fontSize:'small'}}><b>3213a,Hosur Rd,Madiwala,1st Stage,BTM Layout,Be...</b></p>
            </div>
            <div style={{paddingTop:'5px'}}>
                <img src={expired} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div  style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45 <h6>Rewards Expired</h6></p>
                <span style={{color:'grey',fontSize:'15px',}}>-5 <img src={coin1} alt='image' ></img></span>
                </div>
            </div>
            <div style={{paddingTop:'5px'}}>
                <img src={wallet} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45<h6>Added to Porter Wallet</h6></p>
                <span style={{color:'blue',fontSize:'15px',}}>+25 <img src={coin} alt='image' ></img></span>
                </div>
            </div>
            <div style={{paddingTop:'5px'}}>
                <img src={expired} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45<h6>Rewards Expired</h6></p>
                <span style={{color:'grey',fontSize:'15px',}}>-5 <img src={coin1} alt='image' ></img></span>
                </div>
            </div>
            <div style={{paddingTop:'5px'}}>
                <img src={wallet} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45<h6>Added to Porter Wallet</h6></p>
                <span style={{color:'blue',fontSize:'15px',}}>+25 <img src={coin} alt='image' ></img></span>
                </div>
            </div>
            <div>
                <img src={bike} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45 . &#8377;350 <h6>2-Wheeler</h6></p>
                <span style={{color:'green',fontSize:'15px',}}>+5 <img src={coin} alt='image' ></img></span>
                </div>
            </div>
            <div style={{fontsize:'small',backgroundColor:' #f8f9fa', border:'10px solid white'}}>
                <h6 style={{fontSize:'small',color:'grey'}}>Pickup From</h6>
                <p style={{fontSize:'small'}}><b>3213a,Hosur Rd,Madiwala,1st Stage,BTM Layout,Be...</b></p>
            </div>
            <div style={{paddingTop:'5px'}}>
                <img src={expired} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div  style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45 <h6>Rewards Expired</h6></p>
                <span style={{color:'grey',fontSize:'15px',}}>-5 <img src={coin1} alt='image' ></img></span>
                </div>
            </div>
            <div style={{paddingTop:'5px'}}>
                <img src={wallet} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45<h6>Added to Porter Wallet</h6></p>
                <span style={{color:'blue',fontSize:'15px',}}>+25 <img src={coin} alt='image' ></img></span>
                </div>
            </div>
            <div style={{paddingTop:'5px'}}>
                <img src={expired} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45<h6>Rewards Expired</h6></p>
                <span style={{color:'grey',fontSize:'15px',}}>-5 <img src={coin1} alt='image' ></img></span>
                </div>
            </div>
            <div style={{paddingTop:'5px'}}>
                <img src={wallet} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45<h6>Added to Porter Wallet</h6></p>
                <span style={{color:'blue',fontSize:'15px',}}>+25 <img src={coin} alt='image' ></img></span>
                </div>
            </div>
            <div>
                <img src={bike} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45 . &#8377;350 <h6>2-Wheeler</h6></p>
                <span style={{color:'green',fontSize:'15px',}}>+5 <img src={coin} alt='image' ></img></span>
                </div>
            </div>
            <div style={{fontsize:'small',backgroundColor:' #f8f9fa', border:'10px solid white'}}>
                <h6 style={{fontSize:'small',color:'grey'}}>Pickup From</h6>
                <p style={{fontSize:'small'}}><b>3213a,Hosur Rd,Madiwala,1st Stage,BTM Layout,Be...</b></p>
            </div>
            <div>
                <img src={truck} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45 . &#8377;350 <h6>Truck or 3-Wheeler</h6></p>
                <span style={{color:'green',fontSize:'15px',}}>+5 <img src={coin} alt='image' ></img></span>
                </div>
            </div>
            <div style={{fontsize:'small',backgroundColor:' #f8f9fa', border:'10px solid white'}}>
                <h6 style={{fontSize:'small',color:'grey'}}>Pickup From</h6>
                <p style={{fontSize:'small'}}><b>3213a,Hosur Rd,Madiwala,1st Stage,BTM Layout,Be...</b></p>
            </div>
            <div style={{paddingTop:'5px'}}>
                <img src={expired} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div  style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45 <h6>Rewards Expired</h6></p>
                <span style={{color:'grey',fontSize:'15px',}}>-9 <img src={coin1} alt='image' ></img></span>
                </div>
            </div>
            <div style={{paddingTop:'5px'}}>
                <img src={wallet} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45<h6>Added to Porter Wallet</h6></p>
                <span style={{color:'blue',fontSize:'15px',}}>+50 <img src={coin} alt='image' ></img></span>
                </div>
            </div>
            <div style={{paddingTop:'5px'}}>
                <img src={expired} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45<h6>Rewards Expired</h6></p>
                <span style={{color:'grey',fontSize:'15px',}}>-9 <img src={coin1} alt='image' ></img></span>
                </div>
            </div>
            <div style={{paddingTop:'5px'}}>
                <img src={wallet} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45<h6>Added to Porter Wallet</h6></p>
                <span style={{color:'blue',fontSize:'15px',}}>+50 <img src={coin} alt='image' ></img></span>
                </div>
            </div>
            <div>
                <img src={bike} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45 . &#8377;350 <h6>2-Wheeler</h6></p>
                <span style={{color:'green',fontSize:'15px',}}>+5 <img src={coin} alt='image' ></img></span>
                </div>
            </div>
            <div style={{fontsize:'small',backgroundColor:' #f8f9fa', border:'10px solid white'}}>
                <h6 style={{fontSize:'small',color:'grey'}}>Pickup From</h6>
                <p style={{fontSize:'small'}}><b>3213a,Hosur Rd,Madiwala,1st Stage,BTM Layout,Be...</b></p>
            </div>
            <div>
                <img src={truck} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45 . &#8377;350 <h6>Truck or 3-Wheeler</h6></p>
                <span style={{color:'green',fontSize:'15px',}}>+5 <img src={coin} alt='image' ></img></span>
                </div>
            </div>
            <div style={{fontsize:'small',backgroundColor:' #f8f9fa', border:'10px solid white'}}>
                <h6 style={{fontSize:'small',color:'grey'}}>Pickup From</h6>
                <p style={{fontSize:'small'}}><b>3213a,Hosur Rd,Madiwala,1st Stage,BTM Layout,Be...</b></p>
            </div>
            <div style={{paddingTop:'5px'}}>
                <img src={expired} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div  style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45 <h6>Rewards Expired</h6></p>
                <span style={{color:'grey',fontSize:'15px',}}>-5 <img src={coin1} alt='image' ></img></span>
                </div>
            </div>
            <div style={{paddingTop:'5px'}}>
                <img src={wallet} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45<h6>Added to Porter Wallet</h6></p>
                <span style={{color:'blue',fontSize:'15px',}}>+25 <img src={coin} alt='image' ></img></span>
                </div>
            </div>
            <div style={{paddingTop:'5px'}}>
                <img src={expired} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45<h6>Rewards Expired</h6></p>
                <span style={{color:'grey',fontSize:'15px',}}>-5 <img src={coin1} alt='image' ></img></span>
                </div>
            </div>
            <div style={{paddingTop:'5px'}}>
                <img src={wallet} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45<h6>Added to Porter Wallet</h6></p>
                <span style={{color:'blue',fontSize:'15px',}}>+25 <img src={coin} alt='image' ></img></span>
                </div>
            </div>
            <div>
                <img src={bike} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45 . &#8377;350 <h6>2-Wheeler</h6></p>
                <span style={{color:'green',fontSize:'15px',}}>+5 <img src={coin} alt='image' ></img></span>
                </div>
            </div>
            <div style={{fontsize:'small',backgroundColor:' #f8f9fa', border:'10px solid white'}}>
                <h6 style={{fontSize:'small',color:'grey'}}>Pickup From</h6>
                <p style={{fontSize:'small'}}><b>3213a,Hosur Rd,Madiwala,1st Stage,BTM Layout,Be...</b></p>
            </div>
            <div className='bottomsheet'>
                <BottomSheetDialog
                open={open}
                setOpen={setOpen} >
                    <div style={{height: '300px'}}>
                     <CloseButton onClick={handleHide} style={{display:'flex',float:'right',padding:'10% 10% 0% 0%'}}/>
                    
                     <div className="form-group" style={{paddingTop:'15%',display:'block'}}>
                        <div style={{display:'flex',justifyContent:"space-between",padding:'20px'}}>
                        <label className="form-check-label" for="inlineCheckbox1">something</label>
                        <input className="form-check-input" type="checkbox"  value="option1"/>
                        </div>
                        <div  style={{display:'flex',justifyContent:"space-between",padding:'20px'}}>
                        <label className="form-check-label" for="inlineCheckbox1">something</label>
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                        </div>
                        <div  style={{display:'flex',justifyContent:"space-between",padding:'20px'}}>
                        <label className="form-check-label" for="inlineCheckbox1">something</label>
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                        </div> 
                        <button className='btn btn-success' style={{float:'right',marginRight:'20px'}}>Filter</button>        
                     </div>
                    </div>
                </BottomSheetDialog>
            </div>
            </div>
            
            </div>
           
            );
        

    }
    export default UserDetails;