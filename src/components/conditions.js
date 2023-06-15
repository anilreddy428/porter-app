import image from '../porter/close.png';



const Conditions=()=> {
    
    return(
        <div className='header1'>
            
            <h4 style={{padding:"20px",}}>Porter Rewards
                
            <a href='/' ><img src={image} alt="image" className='image1'></img></a></h4>
            <div style={{ backgroundColor: "#f8f9fa" ,  paddingTop:'20px'}}>   
           
         
            <h5  style={{marginTop:"10px" ,fontSize: "14px",backgroundColor: "#f8f9fa" ,marginLeft:"30px"}}><b>Terms and Conditions</b> </h5>
                <ul style={{listStyleType:"square",marginRight:'10px'}}>
                    <li>Please keep all the valuable items like cash,jewellery etc.under your custody before the shifting process starts</li>
                    <li>please highlight the timings during which external vehicles are allowed inside the premisis.</li>
                    <li>some socities have shifting restrictions in morning/evening/sundays,so please check with the society before the shifting date.Permissions,if any,should be taken by you in advance with RWA.</li>
                    <li>Any goods which have to be transferres through ropes will be done at the sole discretion of the custemor.PORTER will not be responsible for any damage to the goods in such a case.Please highlight any concerns immediatly.  </li>
                    <li>Refrigerators must be defrosted 24 hours prior to the packing to avoid water seepage.</li>
                    <li>The loking/Unlocking of machines/appliances and any other electronic gadgets which requires the technical assistance of the manufacturer or their authorized  dealer, should be arranged by the custemor themselves. </li>
            <h5  style={{marginTop:"10px" ,fontSize: "14px",backgroundColor: "#f8f9fa"}}><b>Things to know about Shifting</b> </h5>
                    <li>The following goods are not acceptable for movement-jewelery,Arms & Ammunitions, Hazzardous materials like Crackers,Explosives,Chemicals,Battery Acids,and inflammable Oils; such as diesel,Petrol,Kerosene,Gasoline,Narcotics &Counter brand items.</li>
                    <li>The prie is inclusive of taxes and subject to change based on slot availability. </li>
                    <li>The vendor has the right to collect all the packing material after the hifting is over.If you wish to retain any carton box, You can do so by paying Rs.50 per box.</li>
                    <li>Insatalltion of any electrical equipment is not included in the scope of this serviece after the unloading at the destination.</li>
                    <li>The quatation provided is based  on the details provided by the custemor which includes material list/movemnt date/distance.if there is any deviation in material list/movement date/distance, a revised quatation will be offered based on the changes.For any revised quatation, the custemor is expected to contact porter custemor care instead of trying to negitiate with the vendor directly.</li>
            <h5  style={{marginTop:"10px" ,fontSize: "14px",backgroundColor: "#f8f9fa"}}><b>Other things to know</b></h5>   
                    <li>Tolls, if any, would be charged extra on actuals.</li>
                </ul>
            </div>
        </div>
    )
}
export default Conditions;