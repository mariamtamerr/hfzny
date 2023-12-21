// import React from 'react'
// import './ContactUs.css'

// import { motion } from "framer-motion";

// const ContactUs = () => {
//   return (
//     <>
//      <motion.div className='parent position-relative mt-5 mb-5' style={{height:"1055px", backgroundColor:"#d9d9d9b0"}}
//       animate={{ x:0 }}
//               initial={{x:1000}} // Apply different initial animations
//               transition={{delay:3.5, duration:1.5}} 
//               >

//         <div className='content  position-absolute' style={{width:"580px", height:"813px", right:"285px", top:"125px"}}>


//                 <h1 className='fw-bold mb-4' style={{direction:"rtl", color:"#0E7B60"}}>تواصل معنا</h1>
//                 <h1 className='fw-bold mb-5' style={{direction:"rtl", color:"#003C2C"}}>ارسل لنا استفسارك وسوف يقوم فريقنا بالتواصل معك</h1>
          
          
          
//             <div className='contentTwo position-relative' style={{direction:"rtl", width:"580px", height:"225px", backgroundColor:"white", borderRadius:"1rem"}}>
//                 <div className='contentInside position-absolute' style={{top:"65px", right:"30px"}}>
//                     <h5>رقم الهاتف</h5>
//                     <h3 className='fw-bold' style={{color:"#003C2C"}}>+9661234567890 +9661234567891</h3>        
//                 </div>
//                   </div>

// <br/>
// <br/>


//             <div className='contentTwo position-relative' style={{direction:"rtl", width:"580px", height:"225px", backgroundColor:"white", borderRadius:"1rem"}}>
//                 <div className='contentInside position-absolute' style={{top:"65px", right:"30px"}}>
//                     <h5>البريد الالكتروني</h5>
//                     <h3 className='fw-bold' style={{color:"#003C2C"}}>publictarnsport@email.com</h3>
//                 </div>
//             </div>

//         </div>




// {/* ------------------------- FORMMMM ----------------------------------------------- */}
// <div className="littleParent position-absolute" style={{height:"1500px", }}>
//     <div className="container">
//         <div className="row justify justify-content-center">
//             <div className="col-11 col-md-8 col-lg-6 col-xl-5">
//                 <form className="ContactFrom" onsubmit="event.preventDefault()" style={{width:"700px", height:"1500px !important"}}>
//                     <div className="card contact" style={{direction:"rtl"}}>
//                         <div className="row mt-5">
//                             <div className="col-md-12 ">
//                                 <h1 className="fw-bold">تواصل معنا</h1>
//                                   </div>
//                         </div>
//                         <div className="form-group mt-5 row mb-3">
//                             <div className="col-md-12 mb-0">
//                                 <h4 className="mb-3 fw-bold ">الاسم</h4> <input id="text" type="text" placeholder="ادخل الاسم" name="text" className="form-control input-box rm-border"/>
//                             </div>
//                         </div>
//                         <div className="form-group row mt-4 mb-3">
//                             <div className="col-md-12 mb-0">
//                                 <h4 className="mb-3 fw-bold">البريد الالكتروني</h4> <input id="e-mail" type="text" placeholder="ادخل البريد الالكتروني" name="email" className="form-control input-box rm-border"/>
//                             </div>
//                         </div>
//                         <div className="form-group mt-4 row">
//                             <div className="col-md-12 mb-2">
//                                 <h4 className="mb-3 fw-bold">نص الرساله</h4> <textarea id="message" type="text" placeholder="ادخل رسالتك" name="message" className="form-control input-box rm-border"></textarea>
//                             </div>
//                         </div>
//                         <div className="form-group row justify-content-center mb-0">
//                             <div className="col-md-12 px-3"> <input type="submit" value="ارسال" className="btn btn-block btn-dark fw-bold rm-border"/> </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
// </div>

// {/* ---------------------------------------------------- */}

//      </motion.div>



//     </>
//   )
// }

// export default ContactUs



// -------------------------------------------------------------



import React from 'react'
import './ContactUs.css'

import { motion } from "framer-motion";
import { Col, Container, Row } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <>
     {/* <div className='parent  mt-5 mb-5' style={{height:"1055px", backgroundColor:"#d9d9d9b0"}}
      animate={{ x:0 }}
              initial={{x:1000}} // Apply different initial animations
              transition={{delay:3.5, duration:1.5}} 
              > */}




<div className='container p-5 mb-5' style={{backgroundColor:"#d9d9d9b0"}} >


    <Row>
        <Col lg="6" md="12" sm="12">
                <div className='content' style={{width:"", height:"", }}>


                <h1 className='fw-bold mb-4' style={{direction:"rtl", color:"#0E7B60"}}>تواصل معنا</h1>
                <h1 className='fw-bold mb-5' style={{direction:"rtl", color:"#003C2C"}}>ارسل لنا استفسارك وسوف يقوم فريقنا بالتواصل معك</h1>



                <div className='contentTwo position-relative' style={{direction:"rtl", width:"", height:"225px", backgroundColor:"white", borderRadius:"1rem"}}>
                <div className='contentInside position-absolute' style={{top:"65px", right:"30px"}}>
                    <h5>رقم الهاتف</h5>
                    <h3 className='fw-bold' style={{color:"#003C2C"}}>+9661234567890 +9661234567891</h3>        
                </div>
                </div>

                <br/>
                <br/>


                <div className='contentTwo position-relative' style={{direction:"rtl", width:"", height:"225px", backgroundColor:"white", borderRadius:"1rem"}}>
                <div className='contentInside position-absolute' style={{top:"65px", right:"30px"}}>
                    <h5>البريد الالكتروني</h5>
                    <h3 className='fw-bold' style={{color:"#003C2C"}}>publictarnsport@email.com</h3>
                </div>
                </div>

                </div>


        </Col>



        <Col lg="6" md="12" sm="12">
{/* ------------------------- FORMMMM ----------------------------------------------- */}
{/* <div className="littleParent " style={{height:"1500px", }}>
    <div className="container">
        <div className=" justify justify-content-center">
            <div className=""> */}
                <form className="ContactFrom" onsubmit="event.preventDefault()" style={{width:"", height:"1500px !important"}}>
                    <div className="card contact" style={{direction:"rtl"}}>
                        <div className="row mt-5">
                            <div className="col-md-12 ">
                                <h1 className="fw-bold">تواصل معنا</h1>
                                  </div>
                        </div>
                        <div className="form-group mt-5 row mb-3">
                            <div className="col-md-12 mb-0">
                                <h4 className="mb-3 fw-bold ">الاسم</h4> <input id="text" type="text" placeholder="ادخل الاسم" name="text" className="form-control input-box rm-border"/>
                            </div>
                        </div>
                        <div className="form-group row mt-4 mb-3">
                            <div className="col-md-12 mb-0">
                                <h4 className="mb-3 fw-bold">البريد الالكتروني</h4> <input id="e-mail" type="text" placeholder="ادخل البريد الالكتروني" name="email" className="form-control input-box rm-border"/>
                            </div>
                        </div>
                        <div className="form-group mt-4 row">
                            <div className="col-md-12 mb-2">
                                <h4 className="mb-3 fw-bold">نص الرساله</h4> <textarea id="message" type="text" placeholder="ادخل رسالتك" name="message" className="form-control input-box rm-border"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-center mb-0">
                            <div className="col-md-12 px-3"> <input type="submit" value="ارسال" className="btn btn-block btn-dark fw-bold rm-border"/> </div>
                        </div>
                    </div>
                </form>
            {/* </div>
        </div>
    </div>
</div> */}

{/* ---------------------------------------------------- */}
</Col>




    </Row>

      
</div>



     {/* </div> */}



    </>
  )
}

export default ContactUs
