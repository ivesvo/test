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
                            src="https://cf-media.sndcdn.com/pRtFbtbMSlL5.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vcFJ0RmJ0Yk1TbEw1LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTYwMTA5MzR9fX1dfQ__&Signature=YNufsTXlu-Lal1QeYZ54oGy9iJMam7l0KbFMsAb3Zw4XBXUuXXtCBcSQZoBj182m7w-UyT9GXVaETxvQytAiyHcwQgwyU3vZjVkG4uzW0~zWWzj6AVpGWWWDI1VIWM67cb2e5wnsvVNSuFixXeUCmaLIZXX3hTKmDVnaLbfx57kRcB-g53PLIutYY25WReYh5YGEXvtwHcioFJ2GpVHsZTFRWWXzyrzJ12Jl3P5ezpLZ-YrQxBnWxHoKig-BqulcTKku5ce5kkpo6PI03yNP2daUghixmEoXSJrvX-~SihnD2t05iv0aJHbQKZnEkKVaxnadjOjVbKs5BfXFeUM4fg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ" controls />

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
                            src="https://cf-media.sndcdn.com/27tLgkMprOiS.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMjd0TGdrTXByT2lTLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTYwMTc5ODh9fX1dfQ__&Signature=WUM7n0GCp0YwxTx2zwksRTc7ChMmWgle05DtvoIaYdpsoWA0~nzeozMNg6CY24m7QBfznwKsMAHop3H7VXV-Ub1lEyd6IJhHbWVBgUIejikwOuemQ7XSOH52wn2tDQ~K5mvya46SJaMnvhlB203~UMUqaSxPoJRGxlYWTcBEVHfqlrnC5NWvtR-cc0cF0aJBQ6HIdugF9bBWXUfEejGCcEIwkjBWlKpXJiPfGiMrtNJsXnHLXReuyIVM1pN4oCKwlJWoyQTlTasxYTdLXLT361D2NrAUkoC9RdZ2w20loKzAUq14jhjtJI61SsovRRXyAn5GrJRdimX0wzzjTTz-sA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ" controls />
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
