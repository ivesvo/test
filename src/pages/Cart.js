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

    return (
        <div>
            <div className="artistpage body justify-content-center">
                {cart
                    ? cart.map(x =>
                        <div className="w-100">
                            <div className="searchbar">
                                <h2>{x.event.title}</h2>
                                <h2>{x.count} ticket(s) VND</h2>
                            </div>
                        </div>)
                    : <div style={{ textAlign: "center" }}>
                        <h2>NOTHING IN YOUR CART RIGHT NOW.</h2>
                    </div>}


                <div style={{ textAlign: "center" }}>
                    <button onClick={handleShow} className="btn sharp">I F££L RICH</button>


                   {cart.length===0
                   ?  <Alert show={show}>
                        <Modal.Header>
                         <Modal.Title></Modal.Title>
                         </Modal.Header>

                        <Modal.Body>
                            <h3>MAYBE BUY SOMETHING</h3>
                        </Modal.Body>
                        <Modal.Footer>

                        <button className="btn sharp" onClick={handleClose}>
                            CLOSE
                        </button>
 
                        </Modal.Footer>
                  
                    </Alert>

                   : <Alert show={show} onHide={handleClose}>
                        <Modal.Header>
                       <Modal.Title>✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <h3>THANKS FOR SUPPORTING US! CHECK YOUR INBOX FOR YOUR TIXS!</h3>
                        </Modal.Body>
                        <Modal.Footer>
                      
                       <button className="btn sharp" onClick={handleClose}>
                            CLOSE
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
