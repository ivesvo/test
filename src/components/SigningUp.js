import React, { useState } from 'react'
import { Button, Row, Form, Col } from 'react-bootstrap'




import { Link } from 'react-router-dom'

import '../App.css';
import axios from 'axios';

export default function SigningUp() {
    const [email, setEmail] = useState("EMAIL")
    const [password, setPassword] = useState("✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧")
    const [name, setName] = useState("")

    const createUser  = async (e) =>{
        await axios.post(`${process.env.REACT_APP_URL}/users`,{
            email: email, password: password, name:name
        })
          alert("USER CREATED")
    
        
    } 
    


    return (
        <div className="signing-up d-flex justify-content-center flex-column">
                <div className="d-flex align-items-">
                        If not you, then
                            <Form.Group controlId="formBasicPassword">
                              <input
                                  placeholder="who?"
                                  className="emailbar"
                                  type="text"
                                  value={name}
                                  autoComplete="off"
                                  onChange={(e) => setName(e.target.value)} />
                              <Form.Text className="text-muted">
                              </Form.Text>
                          </Form.Group>
                    </div> 
                    
                    
                    <Row md={12} xs={12} className="breadcrumbs">
                       
                    <Col md={5} xs={3} className="emailtext">
                            
                            <Form.Group controlId="formBasicEmail">
                               <input
                                  
                                   placeholder="EMAIL"
                                   className="emailbar"
                                   type="text"
                                   value={email}
                                   autoComplete="off"
                                   onChange={(e) => setEmail(e.target.value)} />

                            
                               <Form.Text className="text-muted">
                               </Form.Text>
                           </Form.Group>
                    </Col>

                     <Col md={3} xs={3} className="emailtext">
                            <Form.Group controlId="formBasicPassword">
                              
                              <input
                                
                                  placeholder="hiphopnevadie"
                                  className="emailbar"
                                  type="password"
                                  value={password}
                                  autoComplete="off"
                                  onChange={(e) => setPassword(e.target.value)} />

                           
                              <Form.Text className="text-muted">
                              </Form.Text>
                          </Form.Group>

                    </Col>


                        <Col md={4} xs={3} className="d-flex justify-content-end">
                        <button className="btn sharp 1" style={{ fontFamily: "TimesNow", fontSize: "50px" }} type="submit" onClick={createUser}>SIGN UP NOW</button>
                    </Col>



                    </Row>
                    <div>
                    GDPR-proof. We don’t spam
                    </div>
          

        </div>

    )
}


