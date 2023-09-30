import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Footer.css'
import { Image } from 'react-bootstrap';


function Footer() {
  return (
    // <div>
      <div className=' text-black' style={{backgroundImage:"url('https://img.freepik.com/free-photo/breathtaking-shot-deep-blue-ocean-mountain-range-dark-cloudy-day_181624-12585.jpg')",height:"70vh",backgroundRepeat:"no-repeat",backgroundSize:"cover",objectFit:"contain"}}>

<footer className="container py-5">
<Image src="https://img.freepik.com/fonts/public/323/conversions/Explore-Wonders-preview.jpg" alt="....." style={{height:"120px",width:"120px",borderRadius:"50%",margin:"10px"}}/>
{/* <img src="https://e1.pxfuel.com/desktop-wallpaper/251/999/desktop-wallpaper-nature-editing-background-best-editing.jpg" alt="" /> */}
<span className='fs-1 fw-bold'>Explore Wonders</span>
<div className="row p-4" style={{borderTop:"1px solid white"}}>
  <div className=" col-6 col-md-2 mb-3">
    <h5 className='fs-4'>COMPANY</h5>
    <ul className=" nav flex-column">
      <li className="nav-item mb-2"><a href="#" className="text-black fs-5 mt-2 nav-link p-0 ">About Us</a></li>
      <li className="nav-item mb-2"><a href="#" className="text-black fs-5 mt-2 nav-link p-0 ">Partner With Us</a></li>
      <li className="nav-item mb-2"><a href="#" className="text-black fs-5 mt-2 nav-link p-0 ">Blog</a></li>
      
    </ul>
  </div>

  <div className="col-6 col-md-2 mb-3">
    <h5 className='fs-4'>LEGAL</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2"><a href="#" className="text-black fs-5 mt-2 nav-link p-0 ">Privacy Policy</a></li>
      <li className="nav-item mb-2"><a href="#" className="text-black fs-5 mt-2 nav-link p-0 ">Terms of Use</a></li>
      
    </ul>
  </div>

  <div className="text-black col-6 col-md-2 mb-3">
    <h5 className='fs-4'>CONTACT</h5>
    <ul className="nav flex-column">
      <li className=" nav-item mb-2"><a href="#" className="text-black fs-5 mt-2 nav-link p-0 ">@ExploreWonders.in</a></li>
      <li className="text-black nav-item mb-2"><a href="#" className="text-black fs-5 mt-2 nav-link p-0 ">+91-9879075172</a></li>
      
    </ul>
  </div>

  <div className="col-md-5 offset-md-1 mb-3">
    <form>
      <h5 className='fs-4'>SOCIAL</h5>
      {/* <p>Monthly digest of what's new and exciting from us.</p> */}
      <div className="d-flex flex-column flex-sm-row w-100 gap-2">
      <span><LinkedInIcon fontSize='large'/></span>{" "}&nbsp;<span><InstagramIcon fontSize='large'/></span>{" "}&nbsp;<span><FacebookIcon fontSize='large'/></span>{" "}&nbsp;<span><TelegramIcon fontSize='large'/></span>{" "}&nbsp;<span><WhatsAppIcon fontSize='large'/></span>
        {/* <label for="newsletter1" className="visually-hidden">Email address</label> */}
        {/* <input id="newsletter1" type="text" className="form-control" placeholder="Email address" fdprocessedid="r99wzq"/> */}
        {/* <button className="btn btn-primary" type="button" fdprocessedid="y75np">Subscribe</button> */}
      </div>
    </form>
  </div>
</div>


</footer>
 {/* </div> */}
    </div>
  )
}

export default Footer
