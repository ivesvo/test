import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from "react-router-dom";
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"
import { Navigationbar, SigningUp, Footer, Loading } from '../components';
import Moment from 'react-moment';


const EventDetail = (props) => {
    const dispatch = useDispatch()
    let history = useHistory()
    const user = useSelector(s => s.user)
    const cart = useSelector(s => s.cartReducer.purchases)

    let [eventDetail, setEventDetail] = useState([]);
    let { eventId } = useParams();
    let [availableTicket, setAvailableTicket] = useState(eventDetail.availableTicket)
    const [ticket, setTicket] = useState(0)
    let [price, setPrice] = useState(0)
    const loading = useSelector(state => state.app.loading)


    useEffect(() => {
        dispatch({ type: "LOADING" })
        console.log("id is", eventId)
        axios.get(`${process.env.REACT_APP_URL}/events/${eventId}`).then((res) => {
            console.log("single event data is", res.data)
            setEventDetail(res.data.data)
            dispatch({ type: "LOADED" })
        })
    }, []);

    const addTicket = () => {
        setPrice(eventDetail.price * (ticket + 1))
        setTicket(ticket + 1)
        if (ticket === 10) {
            setPrice(price)
            setTicket(10)
        }
    }

    const minusTicket = () => {
        setPrice(eventDetail.price * (ticket - 1))
        setTicket(ticket - 1)
        if (ticket <= 0) {
            setTicket(0)
        }
    }


    if (loading) return <Loading />
    return (
        <div className="body">
            <div className="event">
                <Row style={{ padding: "45px" }}>

                    <Col md={6} style={{ paddingTop: "80px" }}>
                        <h1 style={{ fontSize: "120px" }}>{eventDetail.title}</h1>

                        <div>
                            <div><Moment format="DD/MM/YYYY">{eventDetail.date}</Moment>  /  {eventDetail.startTime} - {eventDetail.endTime}  /  {eventDetail.minimumAge} + </div>
                            <div><i class="fal fa-location"></i>{eventDetail.venue}</div>
                            <Row>
                                <Col md={3}>
                                    Line-Up:
                                 </Col>
                                <Col md={4}>
                                    <div>
                                        {eventDetail.lineup && eventDetail.lineup.map(item => <h4>{item.toUpperCase()}</h4>)}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div style={{ height: "150px" }}>

                        </div>

                        <div style={{paddingBottom:"30px"}}>
                            AVAILABLE TICKET: {eventDetail.availableTicket}
                        </div>

                            <Row className="d-flex align-items-baseline">

                                <Col md={2} xs={2}>
                                  <button className="btn sharp" onClick={() => minusTicket()}>-</button>
                                </Col>

                                <Col md={2} xs={3}>

                                {ticket}

                                </Col>
                              
                                <Col md={2} xs={3}>
                                <button className="btn sharp" onClick={() => addTicket()}>+</button>

                                </Col>
                              
                                <Col md={2} xs={3}>{price} VND</Col>

                                <button className="btn sharp" onClick={() => dispatch({ type: "CART_UPDATE_FROM_LOCAL", payload: { event: eventDetail, count: ticket } })}>Add To Cart</button>
                            </Row>
                        

                    </Col>

                    <Col md={6} className="poster-img">
                        <img className="poster" src={eventDetail.posterURL} />
                    </Col>
                </Row>


                <div style={{ paddingBottom: "30px" }}>

                    <Col lg={12}>
                        <div className="artist-detail">{eventDetail.description}</div>

                        <div className="breadcrumbs body">
                            <Link style={{ textDecoration: "none" }} to="/events"><i class="fal fa-long-arrow-left"></i><span className="tinytext" style={{ marginLeft: "10px" }}>BACK TO EVENTS</span></Link>
                            {user.isAdmin
                                ? <div className="tinytext" style={{ marginRight: "25px", }}>
                                    <i onClick={() => {
                                      
                                        history.push({ pathname: `/events/update/${eventId}`, state: { eventDetail: eventDetail } })
                                    }} class="fa fa-adjust 3x" aria-hidden="true" style={{ marginRight: "20px" }}></i>
                                    <i class="fal fa-trash-alt"></i></div>

                                :
                                <div></div>}

                        </div>

                    </Col>
                </div>

            </div>



            <SigningUp />
            <Footer />

        </div>
    )
}

export default EventDetail
