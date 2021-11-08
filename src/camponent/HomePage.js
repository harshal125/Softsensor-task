import axios from "axios";
import React, { useEffect, useState } from "react";
import './HomePage.css'
import Navbar from "./Navbar";
import AddToCart from "./AddToCart";


const HomePage = () => {

    const [cartData, setCartData] = useState([])
    // console.log(cartData)

    const [isCartContainerOpen, setIsCartContainerOpen] = useState(false)

    useEffect(async () => {
        await axios.get('http://localhost:5000/api/cartlist').then((res) => {
            setCartData(res.data)
        })
    }, [])

    return (
        <div>

            {!isCartContainerOpen ?


                <div>
                    <Navbar />
                    <div className="main-container">
                        {
                            cartData ? cartData.map((item, index) => {
                                return (

                                    <div className="cart-item">
                                        <div className="category-container">
                                            <div className="category">{item.category}</div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <img style={{ width: '200px', height: '200px', border: '1px solid lightgray', borderRadius: '3px', boxShadow: '3px 5px 6px grey' }} src={item.image}></img>
                                            <div className="cost-title">Cost : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {item.price}</div>
                                        </div>
                                        <div style={{ width: 'fit-content' }}>
                                            <div className="descreption">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</div>
                                        </div>
                                        <div>
                                            <button onClick={() =>
                                                setIsCartContainerOpen(!isCartContainerOpen)
                                            }
                                                className="add-to-cart">Add To Cart</button>
                                        </div>
                                    </div>
                                )
                            }) : null
                        }
                    </div>
                </div> : <AddToCart setIsCartContainerOpen={setIsCartContainerOpen} />}
        </div>
    )
}

export default HomePage