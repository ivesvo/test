import React from 'react'
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Row, Col } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50%',

    },
  },
}));

const Navigationbar = () => {


  const classes = useStyles();


  return (
    <div className="fixed-top" style={{padding:"20px 40px"}}>
      <div className="d-flex justify-content-between">
           <div>
              <NavLink to="/" style={{textDecoration:"none"}}><h2 style={{fontWeight: "bolder",textDecoration:"none", marginLeft:"5px"}}>BEYOND</h2></NavLink>
            </div>
             <div className="d-flex justify-content-end menu">
              <Link to="/cart"><i class="far fa-shopping-cart" style={{ color: "white", margin: "0px 10px" }}></i></Link>
              <Link to="/user"><i class="fa fa-sign-in" style={{ color: "white", margin: "0px 10px" }}></i></Link>
              <Link to="/me"><i class="far fa-head-side" style={{ color: "white", margin: "0px 10px" }} ></i></Link>
          </div>
      </div>


      <Row>
        <Col xs={8} md={7} className="col-12">
        
        </Col>

       
      </Row>

      <Row className="breadcrumbs" style={{ margin: "5px"}}>
        <Link to="/artists" style={{textDecoration:"none"}}><h2 className="navlink">ARTISTS</h2></Link>
        <Link to="/explore" style={{textDecoration:"none"}}><h2 className="navlink">EXPLORE</h2></Link>
        <Link to="/events" style={{textDecoration:"none"}}><h2 className="navlink">EVENTS</h2></Link>
      
      </Row>

    </div>


  )
}

export default Navigationbar

