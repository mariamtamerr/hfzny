import React, { useEffect, useState } from 'react'
// import footer from '../assets/images/footer.png'
// import navbarImg from '../assets/images/navbar.png'
// import GoogleMaps from './GoogleMaps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import logo from '../../assets/images/logo.png'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'

const Footer = () => {

  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    axios.get('https://hafzny.online/api/public/api/footer')
    .then((result) => {
      console.log("result is : "  , result.data.data);
      setDetails(result.data.data);
      setLoading(false);
    }).catch((err) => {
      console.log("errors is : " , err);
      setLoading(false);  
    });
  }, [] )


  

  return (
    <>
    
  <footer  className="" style={{backgroundColor:"rgb(0, 60, 44)", color:"white", }}>
    <div className=" container py-5 ">
      <div className=" row footerRow" style={{gap:"-2rem", paddingLeft:380}}>

        {/* <div className="col-lg-4 col-md-6 mb-4 mt-4 mb-lg-0"> */}
        <div className="col-3 align-self-center">
          <h6 className="text-uppercase font-weight-bold mb-4">تواصل معنا</h6>
          
          {
            loading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
               <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">{details ? details[0].phone : 'null' }</a></li>
                <li className="mb-2"><a href="#" className="text-light text-decoration-none">{details[0]?.email}</a></li>
              </ul>
            )
          }
          </div>
          
         

          {/* {
  loading ? (
    <h3>loading</h3>
  ) : (
    <ul className="list-unstyled mb-0">
      <li className="mb-2">
        <a href="#" className="text-light text-decoration-none">
          {details && details.length > 0 ? details[0].phone : ''}
        </a>
      </li>
      <li className="mb-2">
        <a href="#" className="text-light text-decoration-none">
          {details && details.length > 0 ? details[0].email : ''}
        </a>
      </li>
    </ul>
  )
} */}


      

      
        {/* <div className="col-lg-4 col-md-6 mb-4 mt-4 mb-lg-0" >
          <h6 className="text-uppercase font-weight-bold mb-4">الصفحات الرئيسية</h6>
          <ul className="list-unstyled mb-0" >
            <li className="mb-2" ><a href="#" className="text-light text-decoration-none">الرئيسية</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">المعلمون</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">الحجوزات</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">الجلسات</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">القائمة</a></li>
          </ul>
        </div> */}
        
        {/* <div className="col-lg-5 col-md-6 col-sm-5 mb-lg-0" style={{direction:"rtl"}}> */}
        <div className="col-3" style={{direction:"rtl"}}>
          <h6 className="text-uppercase font-weight-bold mb-4">
            <img src={logo} style={{height:"", width:"", marginBottom:"-1rem"}} alt='logo'/>
          </h6>

          {
            loading ? (
              
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (

            <p className=" mb-" style={{height:""}}>      
              {details[0]?.description}
            </p>
            )


          }

         
          {/* <ul className="list-inline mt-4">
            <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fab  fa-2x fa-twitter"></i>
            <FontAwesomeIcon icon={faTwitter}/>
            </a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fab fa-2x fa-facebook-f"></i>
            <FontAwesomeIcon icon={faFacebook}/></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fab fa-2x fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fab fa-2x fa-youtube"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fab fa-2x fa-google"></i></a></li>
          </ul> */}
        
      </div>
    </div>
    </div>
   
    
  </footer>
    </>
  )
}

export default Footer