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
<Image src="https://cdn.gencraft.com/prod/user/a325e320-f604-42ea-9195-8f04f6464996/62d2857e-d91a-4dbf-9170-9ac6953397d9/images/image0_0.jpg?Expires=1695389580&Signature=e3rk4sJgeOb-I7UeWrv9z9M5P8RSIhLGp6SzAwjKGTuu0hQ5S2bU-6v4q2rCccy2vyMv3gEtZQBnEdRYKIS0KWgLUBxhvoDcgdIg~xduU7b2PVBOrWHXWK7XiI7JapYajKFUw-DwzXR-fRaYHzMGOzPgl~iGnzx896SPe6Ae~TSgxWhHptXNImAeQz-8hoBZ56NU9T0sGf7W5tubvPubRuaosqSAfQMn56XsDc-Cu3dYTrpAyVDr9xzBHU94dNeT8vFmoGR8Mt2iHrqMc~I0RjqEDpCgcY7yeR1N2EoqWMuWGDztTv0DyPVP49oSdAmcEUWeZzNHxlsXfW9EtQCrIA__&Key-Pair-Id=K3RDDB1TZ8BHT8" alt="....." style={{height:"120px",width:"120px",borderRadius:"50%",margin:"10px"}}/>
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
