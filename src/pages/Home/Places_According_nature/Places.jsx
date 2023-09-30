import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img_Place from "./Img_Place";
import Intro from "./Intro";

function Places() {
  let mystyle = {
    div: {
      backgroundImage: `url("https://www.honeymoonbug.com/blog/wp-content/uploads/2020/03/bhutan-tour.jpg")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    container: {
      opacity: 0.8,
    },
    img: {
      height: "300px",
      width: "300px",
      borderRadius: 150,
    },
  };
  return (
    <div style={mystyle.div}>
      <div className="bg-dark-subtle" style={mystyle.container}>
        <div className="bg-dark text-light d-block">
          <span className="fs-1 fw-bold  font-monospace m-3">
            Explore More Places According to your interests
          </span>
        </div>

        <div className="container position-relative">
          <Container className="p-3">
            <Row className="mt-3">
              <Col xs={4}>
                <a
                  href="https://www.oyorooms.com/travel-guide/hill-stations-in-north-india/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://dp5zphk8udxg9.cloudfront.net/wp-content/uploads/2017/07/shutterstock_654945901-e1499612490628.jpg"
                    alt="Image not Loaded"
                    style={mystyle.img}
                    className="m-3 shadow-lg d-inline"
                  />
                </a>
              </Col>
              <Col>
                <Intro
                  img1={
                    <Img_Place
                      link={`https://twocircles.net/2020jul22/438237.html`}
                      name={"Kashmir"}
                      image={`http://twocircles.net/wp-content/uploads/2020/07/FB_IMG_1595362972681.jpg`}
                      style={mystyle.name}
                    />
                  }
                  img2={
                    <Img_Place
                      link={`https://www.karnatakatourism.org/must-visit-hill-stations-in-karnataka/`}
                      name={"Karnatka Hills"}
                      image={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64AOx0nFHRNKCMxb8jrDn2rc1zWz10cICr9Lli40vu7hQAxUnJkGeMzKySojT2nS67gw&usqp=CAU`}
                    />
                  }
                  img3={
                    <Img_Place
                      link={`https://nomadicweekends.com/blog/hill-stations-near-kolkata/`}
                      name={"Kerala"}
                      image={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyyRGr0tMM0tb6-b-Rb4xi_JBXr90B-nYlIA&usqp=CAU`}
                    />
                  }
                  img4={
                    <Img_Place
                      link={`https://www.allnepal.com/why-you-should-visit-nepal-for-inner-peace-and/trekking-in-hilly-region-in-nepal/`}
                      name={"Nepal"}
                      image={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd06p_VEgLDzH_eEXnlQtIiCHYjzT1k5gXHQ&usqp=CAU`}
                    />
                  }
                  img5={
                    <Img_Place
                      link={`https://www.newsclick.in/uttarakhand-polls-ghost-villages-symbols-govt-failure-and-neglect-hilly-areas`}
                      name={"Uttrakhand"}
                      image={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-B28Z72DB_hp01E58brxK6QU3PkdyVbFS8A&usqp=CAU`}
                    />
                  }
                  area={"Hilly Areas"}
                  definition={
                    " Are you the one, who is bored of the usual schedule of life" +
                    "and yearning to get rid of them for a couple of days Or do" +
                    "you wish to settle down and enjoy a peaceful life in a" +
                    "blissful location If you are one of them and looking for a" +
                    "serene dwelling, your search ends here"
                  }
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Intro
                  img1={
                    <Img_Place
                      link={`https://travel.usnews.com/Bora_Bora/`}
                      name={"Bora-Bora"}
                      image={`https://travel.usnews.com/dims4/USNEWS/472cf27/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/borabora_445x280_dtTOVY1.jpg`}
                    />
                  }
                  img2={
                    <Img_Place
                      link={`https://travel.usnews.com/Fiji/`}
                      name={"Fizzi"}
                      image={`https://travel.usnews.com/dims4/USNEWS/589cad7/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/primary_destination_photo_445x280_f6n6CVE.jpg`}
                    />
                  }
                  img3={
                    <Img_Place
                      link={`https://travel.usnews.com/Maldives/`}
                      name={"Maldives"}
                      image={`https://travel.usnews.com/dims4/USNEWS/00e9466/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/gettyimages-520025941_5j9mOtt.jpg`}
                    />
                  }
                  img4={
                    <Img_Place
                      link={`https://travel.usnews.com/Tahiti_French_Polynesia/`}
                      name={"Tahiti"}
                      image={`https://travel.usnews.com/dims4/USNEWS/a600cb2/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/tahiti_main_getty_samantha_t_photography_edited_445x280_v43QKbF.jpg`}
                    />
                  }
                  img5={
                    <Img_Place
                      link={`https://travel.usnews.com/Bahamas/`}
                      name={"Bahamas"}
                      image={`https://travel.usnews.com/dims4/USNEWS/675a40f/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/129-BMOT-Exumas_jpCc10d.jpg`}
                    />
                  }
                  area={"Beaches"}
                  definition={
                    "What makes a great beach all depends on the traveler. Some prefer wide stretches of sand with ample activities and throngs of people to watch, while others desire deserted shorelines with calm waters. U.S. News took this and other factors – such as unique scenery, beach quality and overall accessibility – into consideration to determine the best beaches in the world."
                  }
                />
              </Col>
              <Col xs={4}>
                <a
                  href="https://travel.usnews.com/rankings/best-beaches-in-the-world/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://travel.usnews.com/dims4/USNEWS/494a2fa/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_cropped_445x280_OGCJEry.jpg"
                    alt="Image not Loaded"
                    style={mystyle.img}
                    className="m-3 shadow-lg d-inline"
                  />
                </a>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs={4}>
                <a
                  href="https://www.thrillophilia.com/holy-places-in-india"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://images.thrillophilia.com/image/upload/s--1OL9p1UZ--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/383/821/original/1652085924_shutterstock_1432458749.jpg.jpg"
                    alt="Image not Loaded"
                    style={mystyle.img}
                    className="m-3 shadow-lg d-inline"
                  />
                </a>
              </Col>
              <Col>
                <Intro
                  img1={
                    <Img_Place
                      link={`https://www.thrillophilia.com/cities/rishikesh`}
                      name={"Rishikesh"}
                      image={`https://images.thrillophilia.com/image/upload/s--1OL9p1UZ--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/383/821/original/1652085924_shutterstock_1432458749.jpg.jpg`}
                    />
                  }
                  img2={
                    <Img_Place
                      link={`https://www.thrillophilia.com/cities/haridwar`}
                      name={"Haridvar"}
                      image={`https://images.thrillophilia.com/image/upload/s--EY2aA1Bk--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/383/816/original/1652078216_shutterstock_1148438246.jpg.jpg`}
                    />
                  }
                  img3={
                    <Img_Place
                      link={`https://www.thrillophilia.com/cities/badrinath`}
                      name={"Badrinath"}
                      image={`https://images.thrillophilia.com/image/upload/s--0u21M9b2--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/383/822/original/1652079967_shutterstock_569748046.jpg.jpg`}
                    />
                  }
                  img4={
                    <Img_Place
                      link={`https://www.thrillophilia.com/cities/pushkar-rajasthan`}
                      name={"Pushkar"}
                      image={`https://images.thrillophilia.com/image/upload/s--v3H_MDdX--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/383/825/original/1652080794_shutterstock_214765936.jpg.jpg`}
                    />
                  }
                  img5={
                    <Img_Place
                      link={`https://www.thrillophilia.com/cities/kedarnath`}
                      name={"Kedarnath"}
                      image={`https://images.thrillophilia.com/image/upload/s--S5WlhZpD--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/383/807/original/1652072104_shutterstock_2071560989.jpg.jpg`}
                    />
                  }
                  area={"Holy Places"}
                  definition={
                    "In India there are thousands of tirthas (places of pilgrimage) visited by millions of people every year. Each is somehow special, often associated with a particular deity or saint, and offering its own particular boon or blessing."
                  }
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Intro
                  img1={
                    <Img_Place
                      link={`https://traveltriangle.com/blog/adventure-activities-in-thailand/`}
                      name={"Thailand"}
                      image={`https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/images2/program_content/top-adventure-travel-destinations-thailand-1-1515089386.png`}
                    />
                  }
                  img2={
                    <Img_Place
                      link={`https://www.worldnomads.com/explore/oceania/australia/australias-top-8-adventure-activities`}
                      name={"Australia"}
                      image={`https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/images2/program_content/top-adventure-travel-destinations-australia-2-1515089424.png`}
                    />
                  }
                  img3={
                    <Img_Place
                      link={`https://www.indianholiday.com/blog/best-places-in-india-for-adventure/`}
                      name={"India"}
                      image={`https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/images2/program_content/top-adventure-travel-destinations-india-3-1515089442.png`}
                    />
                  }
                  img4={
                    <Img_Place
                      link={`https://www.newzealand.com/sg/feature/new-zealand-must-do-top-10-adventure-experiences/`}
                      name={"New Zealand"}
                      image={`https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/images2/program_content/top-adventure-travel-destinations-new-zealand-4-1515089478.png`}
                    />
                  }
                  img5={
                    <Img_Place
                      link={`https://www.prettywildworld.com/adventurous-things-to-do-in-spain/`}
                      name={"Spain"}
                      image={`https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/images2/program_content/top-adventure-travel-destinations-spain-5-1515089490.png`}
                    />
                  }
                  area={"Adventurous Places"}
                  definition={
                    "So what exactly is adventure travel? Although it sounds like a neat little summary of certain travel experiences, it covers a wide range of activities. Think mountain trekking, bungee jumping, canoeing, scuba diving, ziplining, sandboarding, snowboarding, and more."
                  }
                />
              </Col>
              <Col xs={4}>
                <a
                  href="https://www.goabroad.com/articles/adventure-travel-abroad/best-adventure-travel-destinations-worldwide-2018"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/h3rQxbHz_wg/maxresdefault.jpg"
                    alt="Image not Loaded"
                    style={mystyle.img}
                    className="m-3 shadow-lg d-inline"
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Places;
