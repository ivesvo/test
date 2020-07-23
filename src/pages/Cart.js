import React, { useEffect } from 'react'

import { Navigationbar, SigningUp, Footer } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

const Cart = () => {
    const dispatch = useDispatch()
    const user = useSelector(s => s.user)
    const cart = useSelector(s => s.cartReducer.cart)
    // const vv = useSelector(s => s.cartReducer)
    // console.log(vv)
    let history = useHistory()

    useEffect(() => {
        checkCart()
    }, [])

    const checkCart = async () => {
        const token = localStorage.getItem("token")
        const res = await axios.get(`${process.env.REACT_APP_URL}/cart`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        console.log("SHIT", res.data.data.items)
        dispatch({ type: "CART_UPDATE_FROM_SERVER", payload: res.data.data })
    }
    console.log(cart)

    const finishBuying = async ()=>{
        if(cart.length==0){

            alert("BUY SOMETHING MAYBE 👀")
        } else {
            alert("THANKS U FOR SUPPORTING US 🤸")
            history.push("/")
        }
       
       
    }

    return (
        <div>

            <div className="artistpage body justify-content-center">

                {cart
                    ? cart.map(x =>
                        <div className="w-100">
                            <div className="searchbar">  
                            <h2>{x.event.title}</h2></div>
                            <h2>{x.count} ticket(s)</h2>
                         </div>)
                    : <div style={{ textAlign: "center" }}>
                            <h2>NOTHING IN YOUR CART RIGHT NOW.</h2>
                        </div>}

                {/* {!user.isAuthenticate
                    ? <div className="artistpage body" style={{ textAlign: "center" }}>
                        <h2>PLEASE LOG IN TO SEE YOUR CART.</h2>
                    </div>
                    : <div className="artistpage body" style={{ textAlign: "center" }}>
                        <h2>NOTHING IN YOUR CART RIGHT NOW.</h2>
                    </div>
                } */}

                <div style={{ textAlign: "center" }}>
                    <button onClick={()=>finishBuying()} className="btn sharp">I F££L RICH</button>
                </div>

            </div>
            <SigningUp />
            <Footer />
        </div>
    )
}

export default Cart
