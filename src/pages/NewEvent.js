import React, { useState } from 'react'
import { Navigationbar, SigningUp, Footer, } from '../components'
import { Row, Form, InputGroup, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '50ch',

        },
    },
}));

const NewEvent = () => {
    const token = localStorage.getItem("token")
    const classes = useStyles();

    let history = useHistory()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [city, setCity] = useState("");
    const [posterURL, setPosterURL] = useState("");
    const [price, setPrice] = useState(100000);
    const [availableTicket, setAvailableTicket] = useState(0)
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("")
    const [date, setDate] = useState("");
    const [lineup, setLinepUp] = useState([])
    const [minimumAge, setMinimumAge] = useState("")
    const [venue, setVenue] = useState("")
    const [address, setAddress] = useState("")

    const createEvent = async (e) => {
        e.preventDefault();
        const eventData = {
            title,
            description,
            city,
            posterURL,
            price,
            startTime,
            endTime,
            date,
            lineup,
            availableTicket,
            minimumAge, address
        };

        const newEvent = await fetch(`${process.env.REACT_APP_URL}/events`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",

            },
            body: JSON.stringify(eventData),
        });
        if (newEvent.status == 201) {
            history.push({ pathname: '/events' })
        } else {
            alert("U CAN NOT")
        }

    };

    return (
        <div>

            <div className="artistpage body d-column justifycontent-center">
                <div style={{ textAlign: "center" }}>
                    <h1 className="big" style={{ color: "#404040" }}>NEW EVENT</h1>
                </div>

                <div className="d-flex w-100 justify-content-center">

                    <form className="d-column justity-content-center" onSubmit={createEvent} className={classes.root} noValidate autoComplete="off">
                        <Form.Group controlId="formBasicEmail">
                            <input placeholder="Event Title"
                                className="searchbar"
                                type="text"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <textarea
                                placeholder="Description"
                                className="searchbar"
                                row="6"
                                type="text"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <textarea
                                placeholder="Venue"
                                className="searchbar"
                                type="venue"
                                name="venue"
                                value={venue}
                                onChange={(e) => setVenue(e.target.value)} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>


                        <Form.Group controlId="formBasicEmail">
                            <input
                                placeholder="City"
                                className="searchbar"
                                as="textarea"
                                name="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <textarea
                                placeholder="Address"
                                className="searchbar"
                                type="textarea"
                                name="city"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)} />

                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <InputGroup style={{ width: "30vw" }}>
                            <input
                                placeholder="Price"
                                className="searchbar"
                                type="number"
                                name="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                            <InputGroup.Append>
                                <InputGroup.Text>VND</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>

                        <Form.Group controlId="formBasicEmail">
                            <input
                                placeholder="Minimum Age"
                                className="searchbar"
                                type="number"
                                min="13"
                                name="minimumage"
                                value={minimumAge}
                                onChange={(e) => setMinimumAge(e.target.value)} />

                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="breadcrumbs" controlId="formBasicEmail">
                            <div className="body">From</div>
                            <input
                                placeholder="Time"
                                style={{ color: "black" }}
                                type="time"
                                name="time"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)} />

                            <Form.Text className="text-muted">
                            </Form.Text>
                            <div>To</div>
                            <input
                                placeholder="Time"
                                style={{ color: "black" }}
                                type="time"
                                name="time"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)} />

                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <input
                                placeholder="Minimum Age"
                                className="searchbar"
                                type="date"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)} />

                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <textarea
                                placeholder="Line Up"
                                className="searchbar"
                                type="type"
                                name="lineup"
                                value={lineup}
                                onChange={(e) => setLinepUp(e.target.value)} />

                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <textarea
                                placeholder="Available Tickets"
                                className="searchbar"
                                type="number"
                                name="lineup"
                                value={availableTicket}
                                onChange={(e) => setAvailableTicket(e.target.value)} />

                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <textarea
                                placeholder="posterURL"
                                className="searchbar"
                                type="file"
                                name="posterURL"
                                value={posterURL}
                                onChange={(e) => setPosterURL(e.target.value)} />

                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <div>
                            <Button className="btn sharp d-flex justify-content-center" type="submit" value="Create">SUBMIT</Button>
                        </div>
                    </form>
                </div>


            </div>
            <SigningUp />
            <Footer />

        </div >
    )
}

export default NewEvent
