import React from 'react'
import './CarouselItem.css'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselImg from '../../assets/images/1.png'
import carouselImg2 from '../../assets/images/4.png'
import carouselImg3 from '../../assets/images/5.png'
import logo from '../../assets/images/logo2.png'

const CarouselItem = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };


  return (
    <div>

      <div className='' style={{backgroundColor:"rgb(206 255 207 / 45%)", width:"100vw", height:"80vh", opacity:"", marginLeft:"-17rem", position:"relative"}}>
    
        <img src={logo} style={{width:"60%", height:"100%", position:"absolute", opacity:"10%" }} alt='logo'/>

        <div className='little' style={{position:"absolute", }}>

        </div>

    <div className='content' style={{position:"absolute", margin:"20rem 10rem"}} >
    {/* <img src={logo} alt='logo'/> */}
      <h1 className='mb-5' style={{ transform: "translate(30%, 50%)", fontSize:"3rem" }}>
            حفظني
      </h1>

      <p style={{color:"gray" , fontSize:"1.6rem"}}>
      تطبيق القرآن الكريم
ابحث، استمع، استكشف، فكر، افهم، خصص، شارك!
      </p>
    </div>
   <div className='grayDiv' style={{backgroundColor:"red", width:"30%", height:"100%", position:"absolute"}}>

</div>


<a className='btn btn-primary'>
  DOwnload Now
</a>


      </div>









    {/* ------------------------------------------------ */}
       <Carousel activeIndex={index} style={{position:"absolute", top:"7rem", right:"20rem"}} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={carouselImg} text="First slide" height="700"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carouselImg2} text="Second slide" height="700" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carouselImg3} text="Third slide" height="700" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

{/* ------------------------------------------------------------------------ */}
    



    </div>
  )
}

export default CarouselItem
