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
                    <div style={{backgroundColor:"#f1f3f4", width:"300px"}}>
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
                    <div  className="progressbar"  style={{backgroundColor:"#f1f3f4", width:"300px"}}>
                    <ReactAudioPlayer
                            className="player"
                            src="https://cf-media.sndcdn.com/1VV5IDC2bZzD.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMVZWNUlEQzJiWnpELjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTU4NDk5MTh9fX1dfQ__&Signature=JKdRiHnF~xBUaz1oAV1cIkb~P2PdGl-Q3VUidE0Bk9gP0aCmmBqNuut3YXXUNkyjtcIVfwm70kv2KkxvOukK~ckBAlvVIWtC0pMateFxjABCOrJuoq6othWLybWx1NSnGbytU0vgOf8BStSy3nsOwvgv6Hb7UBr00MzT6revYKlaLxxpZ5v2Bk1mIYucnWLpu0k1th257XjW63oW3MvWQ7EDKVcwrVryu9ivpb5vvHpKqoFV5qoJYSVlkUTlUiMKjtzR5zJLCWcCeD5P5~sJi6GT-F~CfHP4GZ72EF3hmTEPOcSA59Wjr4Sb6L~OX~LOrQBNERUVfLv1qq9yUNc66A__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ" controls />

                    </div>
                    <div className="radioname" style={{paddingTop:"30px"}}>
                            <h3>27.07.2020</h3>
                            <h3>GÃY</h3>
                            <h3>Nonstop Mix 6</h3>
                        </div>
                </Col>


                <Col md={3}>
                    <div className="fuck">
                        <img 
                        src="https://instagram.fvca1-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/91410336_2683683291907380_4004753817772452278_n.jpg?_nc_ht=instagram.fvca1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=JftWiw-EfgcAX-fVDrU&oh=a17d967545dc07845dfbcf76e2cb7ff6&oe=5F497002" 
                        alt="Artist Image"/>
                    </div>
                    <div  className="progressbar"  style={{backgroundColor:"#f1f3f4", width:"300px"}}>
                    <ReactAudioPlayer
                            className="player"
                            src="https://cf-media.sndcdn.com/1VV5IDC2bZzD.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMVZWNUlEQzJiWnpELjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTU4NDk5MTh9fX1dfQ__&Signature=JKdRiHnF~xBUaz1oAV1cIkb~P2PdGl-Q3VUidE0Bk9gP0aCmmBqNuut3YXXUNkyjtcIVfwm70kv2KkxvOukK~ckBAlvVIWtC0pMateFxjABCOrJuoq6othWLybWx1NSnGbytU0vgOf8BStSy3nsOwvgv6Hb7UBr00MzT6revYKlaLxxpZ5v2Bk1mIYucnWLpu0k1th257XjW63oW3MvWQ7EDKVcwrVryu9ivpb5vvHpKqoFV5qoJYSVlkUTlUiMKjtzR5zJLCWcCeD5P5~sJi6GT-F~CfHP4GZ72EF3hmTEPOcSA59Wjr4Sb6L~OX~LOrQBNERUVfLv1qq9yUNc66A__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ" controls />
                    </div>
                    <div className="radioname"style={{paddingTop:"30px"}}>
                            <h3>27.06.2020</h3>
                            <h3>GÃY</h3>
                            <h3>Nonstop Mix 6</h3>
                        </div>
                
                </Col>


             </div>
        </div >
    )
}

export default Pick
