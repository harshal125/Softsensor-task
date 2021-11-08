import React from "react";

import './AddToCart.css'

const AddToCart = (props) => {
    return (
        <div >
            <div className="add-to-cart-title">
                Add To Cart Page
            </div>
            <div style={{justifyContent:'center'}}>
                <button onClick={() =>
                    props.setIsCartContainerOpen(false)
                }
                    className="back">Back</button>
            </div>
        </div>
    )
}

export default AddToCart