import React from "react";
import './TP_India.css';
import shimla from './pics/Shimla.jpg'
import goa from './pics/goa.jpg'
import banglore from './pics/Bangalore.jpg'
import delhi from './pics/delhi.jpg'
import hyderabad from './pics/hyderabad.jpg'
import mumbai from './pics/mumbai.jpg'
import kolkata from './pics/kolkata.jpg'
import jaipur from './pics/jaipur.jpg'
import nanital from './pics/nanital.jpg'
import pondicherry from './pics/pondicherry.webp'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "bootstrap";
import Component_TPI from "./component_TPI";
import { color, height, positions } from "@mui/system";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ArrowBackwardIosIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const TP_India = ()=>{
        return (

          <div className="main-box">
            
           
           <div>
            <h1 className="TDI">Top Destination in India</h1>
           </div>
              <div id="carouselExampleAutoplaying"  className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" >
  <div className="carousel-item active xyz" >
      <div className="Pic-container">
      <Component_TPI img={shimla} text="Shimla"/>
      <Component_TPI img={goa} text="Goa"/>
      <Component_TPI img={banglore} text="Banglore"/>
      {/* <Component_TPI img={delhi} text="New Delhi"/> */}
      {/* <Component_TPI img={hyderabad} text="Hyderabad"/> */}
      </div>
    </div>
    <div className="carousel-item xyz" >
      <div className="Pic-container">
      <Component_TPI img={nanital} text="Nanital"/>
      <Component_TPI img={mumbai} text="Mumbai"/>
      <Component_TPI img={pondicherry} text="Pondicherry"/>
      {/* <Component_TPI img={jaipur} text="Jaipur"/> */}
      {/* <Component_TPI img={kolkata} text="Kolkata"/> */}
      </div>
    </div>
    <div className="carousel-item xyz" >
      <div className="Pic-container">
      {/* <Component_TPI img={nanital} text="Nanital"/>
      <Component_TPI img={mumbai} text="Mumbai"/> */}
      <Component_TPI img={pondicherry} text="Pondicherry"/>
      {/* <Component_TPI img={jaipur} text="Jaipur"/>  */}
            <Component_TPI img={hyderabad} text="Hyderabad"/>
       <Component_TPI img={kolkata} text="Kolkata"/>
      </div>
    </div>

  </div>
  <div className="arrow-container">
              <button className="carousel-control-prev " style={{ width:"3%"} }  type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
             <img src="https://cdn.onlinewebfonts.com/svg/img_354491.png" className="carousel-control-prev-icon" aria-hidden="true"></img>
              {/* <span className="visually-hidden">Previous</span> */}
            </button>
            </div>  
 

  <div className="arrow-container">
  <button className="carousel-control-next " style={{ width:"3%"} }  type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    {/* <span className="carousel-control-next-icon" style={{border:"2px solid green"}} aria-hidden="true"></span> */}
    <img src="https://th.bing.com/th/id/OIP.NZl35SJ4lsJuMoZYheCDqAHaMW?pid=ImgDet&w=588&h=980&rs=1" className="carousel-control-next-icon" aria-hidden="true"></img>
    {/* <span className="visually-hidden">Next </span> */}
  </button>
  </div>
 
  
</div> 
         

          </div>
        )
      }
export default TP_India;


{/* <ArrowBackIcon className='arrow' onClick={()=>handleMove("l")}/>
<div className="sliderWrapper">
 <img src={photos[slideNumber].src} alt="" className='sliderImg'/>
</div>
<ArrowForwardIcon className='arrow' onClick={()=>handleMove("r")}/> */}


// npm install google-maps-react
