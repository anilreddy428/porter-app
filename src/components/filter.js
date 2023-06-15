import { BottomSheetDialog } from "@rakhimgaliyev/react-bottom-sheet";
import { useEffect } from "react";
import { useState } from "react";
const FilterDetails=()=>{
    const [open, setOpen] = useState(true);
   
  
     
    return(
  <div>
    <div className='bottomsheet'>
         <div className='open'>
        <BottomSheetDialog
        open={open}
        setOpen={setOpen} >

        </BottomSheetDialog>
        </div>
        </div>
   </div>
    )
}
export default FilterDetails;