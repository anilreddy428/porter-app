                import truck from '../porter/truck.png';
import coin from '../porter/single_coin.png'; 
import expired from '../porter/expired.png';
import coin1 from '../porter/coin_expired.png';
import wallet from '../porter/wallet.png';
 const NewData =()=> {
    return(
        <div className="history">
            <h2  className="get-help-label fw-600 ff-Lato"style={{padding:"10px" ,fontSize:'medium'}}><b>History</b></h2>
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
            <div style={{paddingTop:'10px'}}>
                <img src={expired} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div  style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45 <h6>Rewards Expired</h6></p>
                <span style={{color:'grey',fontSize:'15px',}}>-5 <img src={coin1} alt='image' ></img></span>
                </div>
            </div>
            <div style={{paddingTop:'10px'}}>
                <img src={wallet} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45<h6>Added to Porter Wallet</h6></p>
                <span style={{color:'blue',fontSize:'15px',}}>+25 <img src={coin} alt='image' ></img></span>
                </div>
            </div>
            <div style={{paddingTop:'10px'}}>
                <img src={expired} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45<h6>Rewards Expired</h6></p>
                <span style={{color:'grey',fontSize:'15px',}}>-5 <img src={coin1} alt='image' ></img></span>
                </div>
            </div>
            <div style={{paddingTop:'10px'}}>
                <img src={wallet} alt="image" className='image' style={{float:'left',padding:'0px 20px 10px 10px'}}></img>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>12 Mar 2021 . 05:45<h6>Added to Porter Wallet</h6></p>
                <span style={{color:'blue',fontSize:'15px',}}>+25 <img src={coin} alt='image' ></img></span>
                </div>
            </div>
            <button type="button" className="btn btn-outline-primary" style={{width:'100%',padding:'10px'}}>
            <a href="/Userdetails" style={{textDecoration: "none",fontSize:"medium"}}><b>View all</b></a></button>
        </div>
    );
 }
 
 export default NewData;