import React, { useEffect } from 'react'
import { useState } from 'react';
import  './style.css';
const ProductCard = ({productItems,selectedAllProduct}) => {
const eventTime = productItems.event_time * 60;
const [seconds, setSeconds] = useState(eventTime);

const timer = () => {
    if(seconds > 0){
        setTimeout(() => setSeconds(seconds - 1),1000) 
    }else{
        setSeconds('Your time is over');
    }
}

useEffect(() => {
    timer();    
});

const redZone = {
    backgroundColor:"red",
}

return (  
        
    <div className="container mt-5 mb-5">
    <div className="d-flex justify-content-center row">
        <div className="col-md-10">
            {
                seconds && seconds.Number < 1 ?  
                (
                <div   className="row p-2 bg-white border rounded">
                <div style={redZone} className="col-md-3 mt-1">
                    <img className="img-fluid img-responsive rounded product-image" src={productItems.event_image} />
                </div>
                <div className="col-md-6 mt-1">
                    <h5>{productItems.event_title}</h5>
                    <p className="text-justify text-truncate para mb-0">{productItems.event_descriptio}<br /><br /></p>
                    <h6 className="text-danger">Date: {productItems.event_date}  Time: {seconds} 
                    </h6>
                </div>  
                <div className="align-items-center align-content-center col-md-3">
                    <div className="form-check mt-4"><input className="form-check-input" disabled type="checkbox" checked={selectedAllProduct} /></div>
                </div>
            </div>
            ) : 
            (
                <div className="row p-2 bg-white border rounded">
                <div className="col-md-3 mt-1">
                    <img className="img-fluid img-responsive rounded product-image" src={productItems.event_image} />
                </div>
                <div className="col-md-6 mt-1">
                    <h5>{productItems.event_title}</h5>
                    <p className="text-justify text-truncate para mb-0">{productItems.event_descriptio}<br /><br /></p>
                    <h6 className="text-success">Date: {productItems.event_date}  Time: {seconds} 
                    </h6>
                </div>  
                <div className="align-items-center align-content-center col-md-3">
                    <div className="form-check mt-4"><input className="form-check-input" type="checkbox" checked={selectedAllProduct} /></div>
                </div>
            </div>
            )
            }
        </div>
    </div>
</div>   

    )
}

export default ProductCard;
