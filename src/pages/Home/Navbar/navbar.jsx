import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Image } from 'react-bootstrap';

const Navbar = ()=>{
  let mystyle = {
    container: {
        backgroundImage:`url("https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg")`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundImageOpacity:0.5,
        height:300,
    },
    backCover: {
      opacity: 0.9,
      // zIndex:50;
    },
    header:{
      backgroundColor:"Grey",
      opacity:0.9,
      marginTop: "10vh",
      borderRadius:"10px",
    },
    name:{
      fontFamily:"Segoe UI",
    }
  };
  return (
    <div className="" style={mystyle.container}>
    
      <div className="">
      <div className="nav-tabs">

      <div className="float-start ms-5" >
        <Image src="https://cdn.gencraft.com/prod/user/a325e320-f604-42ea-9195-8f04f6464996/62d2857e-d91a-4dbf-9170-9ac6953397d9/images/image0_0.jpg?Expires=1695389580&Signature=e3rk4sJgeOb-I7UeWrv9z9M5P8RSIhLGp6SzAwjKGTuu0hQ5S2bU-6v4q2rCccy2vyMv3gEtZQBnEdRYKIS0KWgLUBxhvoDcgdIg~xduU7b2PVBOrWHXWK7XiI7JapYajKFUw-DwzXR-fRaYHzMGOzPgl~iGnzx896SPe6Ae~TSgxWhHptXNImAeQz-8hoBZ56NU9T0sGf7W5tubvPubRuaosqSAfQMn56XsDc-Cu3dYTrpAyVDr9xzBHU94dNeT8vFmoGR8Mt2iHrqMc~I0RjqEDpCgcY7yeR1N2EoqWMuWGDztTv0DyPVP49oSdAmcEUWeZzNHxlsXfW9EtQCrIA__&Key-Pair-Id=K3RDDB1TZ8BHT8" alt="....." style={{height:"50px",width:"50px",borderRadius:"50%",margin:"10px",marginTop:0}}/>
        <span className="fw-bold fs-1 mt-5 m-3" style={mystyle.name} >Explore Wonders</span>
      </div>

      
        <ul class="nav  justify-content-end  mx-3" >
        
        
          <li class="nav-item m-2">
            <Link class="nav-link text-light fs-3 fw-bolder" aria-current="page" to="/trip">
              Home <ArrowDropDownIcon/>
            </Link>
          </li>
          <li class="nav-item m-2">
            <Link class="nav-link text-light fs-3 fw-bolder " to="/nav">
              About <ArrowDropDownIcon/>
            </Link>
          </li>
          <li class="nav-item m-2">
            <Link class="nav-link text-light fs-3 fw-bolder" to="#">
              Popular Places <ArrowDropDownIcon/>
            </Link>
          </li>
          <li class="nav-item m-2">
            <Link class="nav-link text-light fs-3 fw-bolder" to="#">
              Contact Us <ArrowDropDownIcon/>
            </Link>
          </li>
        </ul>
        </div>
        <div className="container z-50 p-3" style={mystyle.header}>
            <span className="fs-2 fw-bold text-light m-0 font-monospace align-bottom">
                Cure Your Depression
            </span>
            {/* <hr /> */}
            <p className="fs-6 fw-bold text-light m-0" style={mystyle.backCover}>Are you struggling with depression or low self-esteem? Are you feeling anxious or stressed? If you have answered yes to any of these, this retreat is for you.</p>
        </div>
      </div>
    </div>
  );
      }
export default Navbar;
