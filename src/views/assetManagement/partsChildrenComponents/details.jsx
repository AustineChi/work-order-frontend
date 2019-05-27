import React from 'react';

const Details = ({testing}) => {
    return (  
        <div>
        <h5>Parts Details</h5>
           <div className="row">
               <div className="col-sm-6">
               <label className="label-style">
               Part Name:
               <p>hello</p>
               </label>
               <label className="label-style">
               Part Description:
               <p>hello</p>
               </label>
               <label className="label-style">
               Quantity:
               <p>hello</p>
               </label>
               </div>
               <div className="col-sm-6">
               <label className="label-style">
               ID:
               <p>hello</p>
               </label>
               <label className="label-style">
              Unit Cost:
               <p>hello</p>
               </label>
               <label className="label-style">
               Minimum Quantity:
               <p>hello</p>
               </label>
               </div>
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