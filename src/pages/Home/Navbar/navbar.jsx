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
        <Image src="https://img.freepik.com/fonts/public/323/conversions/Explore-Wonders-preview.jpg" alt="....." style={{height:"50px",width:"50px",borderRadius:"50%",margin:"10px",marginTop:0}}/>
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
