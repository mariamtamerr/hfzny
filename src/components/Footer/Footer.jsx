import React from 'react'
// import footer from '../assets/images/footer.png'
// import navbarImg from '../assets/images/navbar.png'
// import GoogleMaps from './GoogleMaps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <>
    
  <footer  className="" style={{backgroundColor:"rgb(0, 60, 44)", color:"white", }}>
    <div className="container py-5">
      <div className="row py-3">

        <div className="col-lg-4 col-md-6 mb-4 mt-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">واصل معنا</h6>
          <ul className="list-unstyled mb-0">
          <li className="mb-2"><a href="#" className="text-light text-decoration-none">+9661234567891</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">publictarnsport@email.com</a></li>
          </ul>
        </div>

      
        <div className="col-lg-4 col-md-6 mb-4 mt-4 mb-lg-0" >
          <h6 className="text-uppercase font-weight-bold mb-4">الصفحات الرئيسية</h6>
          <ul className="list-unstyled mb-0" >
            <li className="mb-2" ><a href="#" className="text-light text-decoration-none">الرئيسية</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">المعلمون</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">الحجوزات</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">الجلسات</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">القائمة</a></li>
          </ul>
        </div>
        
        <div className="col-lg-4 col-md-6 mb-lg-0" style={{direction:"rtl"}}>
          <h6 className="text-uppercase font-weight-bold mb-4">
            <img src={logo} style={{height:"5rem", width:"10rem"}} alt='logo'/>
          </h6>
          <h3 className=" mb-4 ">هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</h3>
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