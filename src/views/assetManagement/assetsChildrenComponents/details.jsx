import React from 'react';

const Details = ({assetDetails}) => {
    return (  
        <div>
        <h5>Asset Details</h5>
           <div className="row">
               <div className="col-sm-6">
               <label className="label-style">
               Asset Name:
               <p>{assetDetails.assetName}</p>
               </label>
               <label className="label-style">
                Description:
               <p>{assetDetails.description}</p>
               </label>
               <label className="label-style">
               Asset Category:
               <p>{assetDetails.assetCategory}</p>
               </label>
               <label className="label-style">
               Parent Asset:
               <p>{assetDetails.parentAsset}</p>
               </label>
               </div>
               <div className="col-sm-6">
               <label className="label-style">
               Model:
               <p>{assetDetails.model}</p>
               </label>
               <label className="label-style">
             Serial Number:
               <p>{assetDetails.serialNumber}</p>
               </label>
               <label className="label-style">
               Primary User:
               <p>{assetDetails.primaryUser}</p>
               </label>
               </div>
            </div> 
            <h5>Asset Status</h5>
              
            <div className="form-check form-check-inline mb2">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
  <label className="form-check-label  label-style" htmlFor="inlineCheckbox1">Active</label>
</div>
            <h5>Area Details</h5>
            <div className="row">
               <div className="col-sm-6">
               <label className="label-style">
               Area:
               <p>{assetDetails.area}</p>
               </label>
               </div>
               <div className="col-sm-6">
               <label className="label-style">
               Assigned Location:
               <p>{assetDetails.location}</p>
               </label>
               </div>
            </div> 
        </div>
    );
}
 
export default Details;