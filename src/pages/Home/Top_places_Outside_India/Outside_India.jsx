import React from 'react'
import Card_outside from './Card_outside'
import Card from './Card_outside'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

function Outside_India() {
  return (
    <div>
      <div className="text-center bg-dark text-light  " >
         <span className="fs-3 font-monospace text-decoration-underline fw-bolder">
            Top Destination Outside India
         </span>
         <Container>
         <Carousel>
      
      <Carousel.Item>
      <Row className='mt-3 mb-5'>
        <Col className='mt-3'> <Card_outside img="https://www.honeymoonbug.com/blog/wp-content/uploads/2020/03/bhutan-tour.jpg" title="Paris"/> </Col>
        <Col className='mt-3'> <Card_outside img="https://www.honeymoonbug.com/blog/wp-content/uploads/2020/03/bhutan-tour.jpg" title="Switzerland"/> </Col>
        <Col className='mt-3'> <Card_outside img="https://www.honeymoonbug.com/blog/wp-content/uploads/2020/03/bhutan-tour.jpg" title="Dubai"/> </Col>
     </Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row className='mt-3 mb-5'>
        <Col className='mt-3'> <Card_outside img="https://www.honeymoonbug.com/blog/wp-content/uploads/2020/03/bhutan-tour.jpg" title="Paris"/> </Col>
        <Col className='mt-3'> <Card_outside img="https://www.honeymoonbug.com/blog/wp-content/uploads/2020/03/bhutan-tour.jpg" title="Switzerland"/> </Col>
        <Col className='mt-3'> <Card_outside img="https://www.honeymoonbug.com/blog/wp-content/uploads/2020/03/bhutan-tour.jpg" title="Dubai"/> </Col>
     </Row>
      </Carousel.Item>
    </Carousel>
    </Container>
      </div>
    </div>
  )
}

export default Outside_India
