import React from 'react'
import './Testimonial.css'
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <>

    <motion.div className='parent mt-5 mb-5' style={{backgroundColor:"#0E7B60", height:"548px" }}
      animate={{ x:0 }}
              initial={{x:-1000}} // Apply different initial animations
              transition={{delay:3.5, duration:1.5}} >

    
      <div className="container testimonial position-">

<div className='title testimonial position- mt-5' style={{width:"1268px", height:"116px",  }}>
   <h1 className='mt-5' style={{fontSize:"30px", fontWeight:"700", color:"white", direction:"rtl", paddingTop:"35px"}}>
اراء العملاء
</h1>

<h1 style={{fontSize:"30px",  fontWeight:"700",color:"black",direction:"rtl", textAlign:"right"}}>
بعض اراء العملاء الذي شرفنا بالعمل معهم
</h1> 
</div>


	<div className="row ">
		<div className="col-md-8 col-center m-auto ">
			
			<div id="myCarousel" className="carousel slide " style={{paddingTop: "7rem!important"}} data-ride="carousel">
				{/* <!-- Carousel --> */}
				<div className="carousel-inner" style={{    backgroundColor: "white",
    borderRadius: "4rem",
    padding: "1rem",
   }}>

					<div className="item carousel-item active">
						<div className="img-box"><img src="https://i.ibb.co/d5DY64w/img1.jpg" alt=""/></div>
						<p className="testimonial fw-bold">شكرا لكم من اجل خدمتكم تطبيق 
جميل مزيد من التالق</p>
						<p className="overview"><b>Jennifer Smith</b>, Office Worker</p>
					</div>
					<div className="item carousel-item">
						<div className="img-box"><img src="https://i.ibb.co/5FF1vqz/img2.jpg" alt="" /></div>
						<p className="testimonial fw-bold">شكرا لكم من اجل خدمتكم تطبيق 
جميل مزيد من التالق</p>
						<p className="overview"><b>Dauglas McNun</b>, Financial Advisor</p>
					</div>
					<div className="item carousel-item">
						<div className="img-box"><img src="https://i.ibb.co/Trv7hDv/img3.jpg" alt="" /></div>
						<p className="testimonial fw-bold">شكرا لكم من اجل خدمتكم تطبيق 
جميل مزيد من التالق</p>
						<p className="overview"><b>Hellen Wright</b>, Athelete</p>
					</div>
				</div>
				{/* <!-- Carousel Controls --> */}
				<a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
					<i className="fa fa-angle-left"></i>
				</a>
				<a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
					<i className="fa fa-angle-right"></i>
				</a>
			</div>
		</div>
	</div>
</div>
</motion.div>
    </>
  )
}

export default Testimonial
