import React from 'react'
import { Row, Col } from 'react-bootstrap'
import YouTube from 'react-youtube';
import ReactAudioPlayer from "react-audio-player";

const Pick = () => {
    return (
        <div className="picks">
           
            <div className="body d-flex flex-wrap justify-content-center" style={{paddingBottom:"100px"}}>
           
                <Col md={3} xs={12}>
                    <div className="fuck">
                        <img
                        src="https://i1.sndcdn.com/artworks-W6BoTPeHhdfafLiE-lalsYA-t500x500.jpg" 
                        alt="Artist Image" />
                    </div>
                    <div style={{backgroundColor:"#f1f3f4", width:"300px", height:"55px"}}>
                    <ReactAudioPlayer
                            className="player"
                            src="https://sndup.net/85v2/LARRIA+x+AMaj7ing+-+Lau+Dai+Tinh+Ai+%5BBaile%5D.mp3" controls />
                    </div>
                    <div  className="progressbar"  style={{paddingTop:"30px"}}>
                        <h3>20.04.2020</h3>
                        <h3>LARRIA x AMaj7ing</h3>
                        <h3>Lau Dai Tinh Ai</h3>
                    </div>
                </Col>


                <Col md={3} xs={12}>
                    <div className="fuck">
                        <img 
                        src="https://i.ibb.co/k57zZzg/thao.jpg" 
                        alt="Artist Image"/>
                    </div>
                    <div  className="progressbar"  style={{backgroundColor:"#f1f3f4", width:"300px", height:"55px"}}>
                    <ReactAudioPlayer
                            className="player"
                            src="https://cf-media.sndcdn.com/1VV5IDC2bZzD.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMVZWNUlEQzJiWnpELjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTYwMjIxOTB9fX1dfQ__&Signature=DUzycfYUUifCwHxgwVChibI5Q-isHlfUhfELcA8xcAzSzvCRHznoUwy7R2qVJ~CQkjIel~qFTCl1kXixDknos6KnWHHCoVIb9pclueHkWc11Ehn5mdlVF49MZddJU-l59d06ttw3eWx0t1QT8ZatCyWtfef4nhFrQcSPZcYe4YBDyBW4O2eHqUEw2WcKJ6Qs3qYLyTOLEZrCxBH92XrB656faDilszicJO54mG42l5UA6npKwbONOsywqRnkU5P6i8Bf3p20MfRkxvdZP35fC~SbPy1DJTdPiNY5PVG-GZDtqVlaUZIkqmJOESEKYZKAH0JVUOnzW9pCmOiXWgKP1g__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ" controls />

                    </div>
                    <div className="radioname" style={{paddingTop:"30px"}}>
                            <h3>23.07.2020</h3>
                            <h3>MESSDOWNTOWN</h3>
                            <h3>Nonstop Mix 6</h3>
                        </div>
                </Col>


                <Col md={3}>
                    <div className="fuck">
                        <img 
                        src="https://assets.boomkat.com/spree/products/635380/large/3663729107213.jpg" 
                        alt="Artist Image"/>
                    </div>
                    <div  className="progressbar"  style={{backgroundColor:"#f1f3f4", width:"300px", height:"55px" }}>
                    <ReactAudioPlayer
                            className="player"
                            src="https://cf-media.sndcdn.com/27tLgkMprOiS.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMjd0TGdrTXByT2lTLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTYwMjc0MzV9fX1dfQ__&Signature=Kmmafv2xCS3ceC~kQGdYGGE4cI6lA6aDOixNbRikOYZltlCsPi9oezZ3XLtsMvNKNrImoEr-ropY8SIctiZH1qqOpMOZHvJYBxdrlN0EFclVS1o6e3-2He-TQWTD1WFmW0zoIxhvELeLVZSGaHkAxw~7iwJaFVTZ~CgW4aospJ4-ETmnfLrlrycXBA~jJOOwFmHR7DwXs2~Pp61InaXIk6Hn-TL~eUV-ZXwVp-eCea95kou12HI9PmIXPTb7EjJYmgQsS~HYLINKPflJne45E0eqpzVD6COK-durkwHAKnn7nem7tZKgnzicmeGLjpW2ulNWhlOh9vtKbJYsSQu2yA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ" controls />
                    </div>
                    <div className="radioname"style={{paddingTop:"30px"}}>
                            <h3>28.07.2020</h3>
                            <h3>EMERALD</h3>
                            <h3>AFTERS WITH RINSEFM</h3>
                        </div>
                
                </Col>


             </div>
        </div >
    )
}

export default Pick
