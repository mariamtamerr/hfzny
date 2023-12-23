// import React from "react";
// import heroImage from "../../assets/images/hero.png";
// import { motion } from "framer-motion";


// const HeroItem = () => {
//   return (
//     <header  style={{
//       backgroundImage: `url(${heroImage})`, backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           // backgroundColor: "rgba(0, 0, 0, 0.7)",
//           height: "952px",
//           overflow:"hidden"}} >
//       <style>
//         {`
//           /* Default height for small devices */
//           #intro-example {
//             height: 400px;
//           }

//           /* Height for devices larger than 992px */
//           @media (min-width: 992px) {
//             #intro-example {
//               height: 600px;
//             }
//           }
//         `}
//       </style>

//       {/* <div
//         id="intro-example"
//         className="p-5 text-center bg-image"
//         style={{
//           backgroundImage: `url(${heroImage})`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           backgroundColor: "rgba(0, 0, 0, 0.7)",
//           height: "952px",
//           position:"relative",
//           top:"-12dvh",
//         }}
//       > */}


// <div className="container">



//         <div
//           className="content hero"
//           style={{
//             width: "849px",
//             height: "304px",
//             top: "341px",
//             left: "587px",
//             position:"absolute",
//           }}
//         >
//           <div
//             className="mask"
//             style={{
//               // position: "relative",
//             }}
//           >
//             <div className="d-flex justify-content-center align-items-center h-100">
//               <div className="text-white">
               
//                {/* ---------- title div ------------------------ */}

//                <div className="title" style={{
//                 width:"849px",
//                 height:"120px",
//                 // position: "absolute",
//                 top:"241px",
//                 left:"527px",
//                 left:"250px",
//                }}>


              
               
//                 <motion.h1
//                   className=" "
//                   style={{
                    
//                     // right: "0",
//                     color: "#017457",
//                     fontSize: "64px",
//                     fontWeight: "900",
//                     lineHeight: "119.94px",
//                   }}
//                   animate={{ x:0 }}
//               initial={{x:1000}} // Apply different initial animations
//               transition={{delay:0.5, duration:1}} 
//                 >
//                   حفظنى معك فى تعلم القرأن
//                 </motion.h1>

//                   </div>

//                     {/* ------------------- paragraph div ------------------- */}


//               <div className="paragraph" style={{
//                 width:"849px",
//                 height:"120px",
//                 position: "absolute",
//                 left: "250px",
//                  top: "-153px",
//                }}>

             

//                 <motion.h5
//                   className="mb-4 "
//                   style={{
//                     position: "absolute",
//                     right: "0",
//                     bottom: "-370px",
//                     color: "#00000080",
//                     lineHeight: "40px",
//                     // font: "Cairo",
//                     // fontFamily: "Courier New, monospace", // Use a monospaced font
//       fontWeight: "700",
//       fontSize: "32px",
//       width: "626px",
//       // display: "flex",
//       // flexDirection: "column", // Align text vertically
//                   }}

//                   animate={{ x:0 }}
//               initial={{x:-1000}} // Apply different initial animations
//               transition={{delay:0.5, duration:1}} 
//                 >
//                   هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
//                   سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
//                   الفقرات في الصفحة التي يقرأها
//                 </motion.h5>
//                 {/* <a
//                 data-mdb-ripple-init
//                 className="btn btn-outline-light btn-lg m-2"
//                 href="https://www.youtube.com/watch?v=c9B4TPnak1A"
//                 role="button"
//                 rel="nofollow"
//                 target="_blank"
//               >
//                 One Button
//               </a> */}


//               <motion.a
//                 data-mdb-ripple-init
//                 className="btn btn-outline-light btn-lg m-2"
//                 href="https://mdbootstrap.com/docs/standard/"
//                 target="_blank"
//                 role="button"
//                 style={{
//                   position: "absolute",
//                   right: "50px",
//                   bottom: "-472px",
//                   color: "#017457",
//                   borderColor: "#017457",
//                 }}
//                 animate={{ x:0 }}
//               initial={{x:1000}} // Apply different initial animations
//               transition={{delay:0.5, duration:1}} 
//               whileHover={{scale:1.3, delay:0.1}}
//               >
//                 تواصل معنا
//               </motion.a>
//               </div>
//  </div>


// {/* --- button tawasl m3na ------- */}

            
//             </div>
//           </div>
//         </div>
//         </div>
//       {/* </div> */}
//     </header>
//   );
// };

// export default HeroItem;


// import React from "react";
import heroImage from "../../assets/images/hero.png";
import { motion } from "framer-motion";

import React from 'react'

const HeroItem = () => {
  return (
    <>
       <header  style={{
      backgroundImage: `url(${heroImage})`, backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          // backgroundColor: "rgba(0, 0, 0, 0.7)",
          height: "952px",
          marginTop:"-5rem",
          overflow:"hidden"}} >
      <style>
        {`
          /* Default height for small devices */
          #intro-example {
            height: 400px;
          }

          /* Height for devices larger than 992px */
          @media (min-width: 992px) {
            #intro-example {
              height: 600px;
            }
          }
        `}
      </style>



      <div className="container">

            <div className="row">

            <div className="col-9">

            </div>

            <div className="col-3 heroContent" style={{paddingTop:"230px", paddingRight:"-2rem !important", direction:"rtl"}} >

         

           <motion.h1
                  className=" "
                  style={{
                    
                    // right: "0",
                    color: "#017457",
                    fontSize: "64px",
                    fontWeight: "900",
                    lineHeight: "119.94px",
                    width:"849px",
//                 height:"120px",
                  }}
                  animate={{ x:0 }}
              initial={{x:1000}} // Apply different initial animations
              transition={{delay:0.5, duration:1}} 
                >
                  حفظنى معك فى تعلم القرأن
          </motion.h1>
          


          <motion.h5
                  className="mb-4 "
                  style={{
                    // position: "absolute",
                    right: "0",
                    bottom: "-370px",
                    color: "#00000080",
                    lineHeight: "40px",
                    // font: "Cairo",
                    // fontFamily: "Courier New, monospace", // Use a monospaced font
      fontWeight: "700",
      fontSize: "32px",
      width: "626px",
      // display: "flex",
      // flexDirection: "column", // Align text vertically
                  }}

                  animate={{ x:0 }}
              initial={{x:-1000}} // Apply different initial animations
              transition={{delay:0.5, duration:1}} 
                >
                  هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                  سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                  الفقرات في الصفحة التي يقرأها
                </motion.h5>
                {/* <a
                data-mdb-ripple-init
                className="btn btn-outline-light btn-lg m-2"
                href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                role="button"
                rel="nofollow"
                target="_blank"
              >
                One Button
              </a> */}


              <motion.a
                data-mdb-ripple-init
                className="btn btn-outline-light btn-lg m-2"
                onClick={(e) => {e.preventDefault(); window.location.replace('/#contact-us');}}
                target="_blank"
                role="button"
                style={{
                  // position: "absolute",
                  right: "50px",
                  bottom: "-472px",
                  color: "#017457",
                  borderColor: "#017457",
                }}
                animate={{ x:0 }}
              initial={{x:1000}} // Apply different initial animations
              transition={{delay:0.5, duration:1}} 
              whileHover={{scale:1.3, delay:0.1}}
              >
                تواصل معنا
              </motion.a>

      </div></div>
      </div>
      </header>





    </>
  )
}

export default HeroItem
