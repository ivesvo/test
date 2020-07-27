import React, { useEffect, useState } from 'react'
import { Navigationbar, SigningUp, Footer } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { Alert, Modal, Button } from 'react-bootstrap'
import axios from 'axios'

const Cart = () => {
    const dispatch = useDispatch()
    const user = useSelector(s => s.user)
    const cart = useSelector(s => s.cartReducer.cart)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    // const finishBuying = async ()=>{
    //     if(cart.length==0){
    //         setShowAlert(!showAlert);
    //     } else {
    //          setShowAlert(!showAlert);
    //         alert("THANKS U FOR SUPPORTING US 🤸")
    //         history.push("/")
    //     }


    // }

    return (
        <div>
            <div className="artistpage body justify-content-center">
                {cart
                    ? cart.map(x =>
                        <div className="w-100">
                            <div className="searchbar">
                                <h2 style={{ marginLeft: "-5px" }}>{x.event.title}</h2>
                                <h2>{x.count} ticket(s)</h2>
                            </div>
                        </div>)
                    : <div style={{ textAlign: "center" }}>
                        <h2>NOTHING IN YOUR CART RIGHT NOW.</h2>
                    </div>}


                <div style={{ textAlign: "center" }}>
                    <button onClick={handleShow} className="btn sharp">I F££L RICH</button>


                   {cart.length===0
                   ?  <Alert show={show} onHide={handleClose}>
                   <Modal.Header closeButton>
                       <Modal.Title>👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀</Modal.Title>
                   </Modal.Header>

                   <Modal.Body><h3>MAYBE BUY SOMETHING</h3></Modal.Body>
                   <Modal.Footer>

                   <Modal.Title>👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀</Modal.Title>
 
                   </Modal.Footer>
                  
                 </Alert>
                   : <Alert show={show} onHide={handleClose}>
                   <Modal.Header closeButton>
                       <Modal.Title>✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>THANKS FOR SUPPORTING US!</Modal.Body>
                   <Modal.Footer>
                       <button onClick={handleClose}>
                           Close
                           </button>
                       <button onClick={handleClose}>
                           Save Changes
                           </button>
                   </Modal.Footer>
               </Alert>
                   }
                </div>
            </div>
            <SigningUp />
            <Footer />
        </div>
    )
}

export default Cart
