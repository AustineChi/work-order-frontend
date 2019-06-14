import React from 'react';

const Parts = ({parts}) => {

     const _part = parts.length ? (
      parts.map(data => {
        return (
            <div className="card">
            <div className="card-body">
            {data}
            </div>
          </div> 
        );
      })
    ) : (
      <div> No parts assigned to this Asset!</div>
    );
    return <div className="card-box">{_part}</div>;
}
 
export default Parts;