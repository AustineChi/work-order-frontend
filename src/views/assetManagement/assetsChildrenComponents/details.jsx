import React from 'react';

const Details = ({testing}) => {
    return (  
        <div>
        <h5>Asset Details</h5>
           <div className="row">
               <div className="col-sm-6">
               <label className="label-style">
               Asset Name:
               <p>hello</p>
               </label>
               <label className="label-style">
                Description:
               <p>hello</p>
               </label>
               <label className="label-style">
               Additional Details:
               <p>hello</p>
               </label>
               </div>
               <div className="col-sm-6">
               <label className="label-style">
               Model:
               <p>hello</p>
               </label>
               <label className="label-style">
             Serial Number:
               <p>hello</p>
               </label>
               <label className="label-style">
               Primary User:
               <p>hello</p>
               </label>
               </div>
            </div> 
            <h5>Asset Status</h5>
              
            <div className="form-check form-check-inline mb2">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
  <label className="form-check-label  label-style" for="inlineCheckbox1">Active</label>
</div>
            <h5>Area Details</h5>
            <div className="row">
               <div className="col-sm-6">
               <label className="label-style">
               Area:
               <p>hello</p>
               </label>
               </div>
               <div className="col-sm-6">
               <label className="label-style">
               Assigned Location:
               <p>hello</p>
               </label>
               </div>
            </div> 
        </div>
    );
}
 
export default Details;