import React from 'react'
import {Navigationbar,SigningUp,Footer,ShopNow,Jumbotron, Pick} from '../components'
import '../App.css'

const LandingPage = () => {
    return (
        <div className="body">
            <div className="ivy">
            </div>
            <Jumbotron/>
            
         
           <ShopNow/>
           <div className="lastpage">
            <SigningUp/>

            <Footer/>


           </div>
           
        
          
        </div>
    )
}

export default LandingPage
