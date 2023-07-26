import React,{useState} from 'react';

let ServerCard = (props)=>{
    return(
        <React.Fragment>
                <div className="card">
                    <div className="card-header bg-success text-white">
                        <p className="h4">Product Details</p>
                    </div>
                    <div className="card-body">
                        <p className="h4">&#8377;{props.total.toFixed(2)}</p>
                    </div>
                </div>
            </React.Fragment>
    )

}
export default ServerCard;