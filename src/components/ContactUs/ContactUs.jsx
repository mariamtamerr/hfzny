import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const [alert, setAlert] = useState({
    show: false,
    success : false,
  }); 


  const handleSumbit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://hafzny.online/api/public/api/addMessage",
        formData
      );

      console.log("response : ", response.data);

      setFormData({
        ...formData,
        name: "",
        email: "",
        message: "",
      });

    // success alert
    setAlert({
        show:true,
        success:true,
    });

    // hide alert after 3 seconds 
    setTimeout( ()=> {
        setAlert({
            show:false,
            success: true,
        });
    } , 3000);


    } catch (error) {
      console.log("error : ", error);
    // Show error alert
    setAlert({
        show: true,
        success: false,
      });

      // Hide the alert after a certain time (e.g., 3 seconds)
      setTimeout(() => {
        setAlert({
          show: false,
          success: false,
        });
      }, 3000);
    }
  };



  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>

{alert.show && (
        <div className={`alert ${alert.success ? 'alert-success' : 'alert-danger'}`} role="alert" style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex:9, textAlign:"center", fontSize:20}}>
          {alert.success ? 'Form submitted successfully!' : 'Failed to submit form! Please try again.'}
        </div>
      )}


      <div
        className="container p-5 mb-5"
        style={{ backgroundColor: "#d9d9d9b0" }}
      >
        <Row>
          <Col lg="6" md="12" sm="12">
            <div className="content" style={{ width: "", height: "" }}>
              <h1
                className="fw-bold mb-4"
                style={{ direction: "rtl", color: "#0E7B60" }}
              >
                تواصل معنا
              </h1>
              <h1
                className="fw-bold mb-5"
                style={{ direction: "rtl", color: "#003C2C" }}
              >
                ارسل لنا استفسارك وسوف يقوم فريقنا بالتواصل معك
              </h1>

              <div
                className="contentTwo position-relative"
                style={{
                  direction: "rtl",
                  width: "",
                  height: "225px",
                  backgroundColor: "white",
                  borderRadius: "1rem",
                }}
              >
                <div
                  className="contentInside position-absolute"
                  style={{ top: "65px", right: "30px" }}
                >
                  <h5>رقم الهاتف</h5>
                  <h3 className="fw-bold" style={{ color: "#003C2C" }}>
                    +9661234567890 +9661234567891
                  </h3>
                </div>
              </div>

              <br />
              <br />

              <div
                className="contentTwo position-relative"
                style={{
                  direction: "rtl",
                  width: "",
                  height: "225px",
                  backgroundColor: "white",
                  borderRadius: "1rem",
                }}
              >
                <div
                  className="contentInside position-absolute"
                  style={{ top: "65px", right: "30px" }}
                >
                  <h5>البريد الالكتروني</h5>
                  <h3 className="fw-bold" style={{ color: "#003C2C" }}>
                    publictarnsport@email.com
                  </h3>
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
            <form
              className="ContactFrom"
              onSubmit={handleSumbit}
              style={{ width: "", height: "1500px !important" }}
            >
              <div className="card contact" style={{ direction: "rtl" }}>
                <div className="row mt-5">
                  <div className="col-md-12 ">
                    <h1 className="fw-bold">تواصل معنا</h1>
                  </div>
                </div>
                <div className="form-group mt-5 row mb-3">
                  <div className="col-md-12 mb-0">
                    <h4 className="mb-3 fw-bold ">الاسم</h4>
                    <input
                      id="text"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="ادخل الاسم"
                      name="name"
                      className="form-control input-box rm-border"
                    />
                  </div>
                </div>
                <div className="form-group row mt-4 mb-3">
                  <div className="col-md-12 mb-0">
                    <h4 className="mb-3 fw-bold">البريد الالكتروني</h4>
                    <input
                      id="e-mail"
                      type="text"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ادخل البريد الالكتروني"
                      name="email"
                      className="form-control input-box rm-border"
                    />
                  </div>
                </div>
                <div className="form-group mt-4 row">
                  <div className="col-md-12 mb-2">
                    <h4 className="mb-3 fw-bold">نص الرساله</h4>
                    <textarea
                      id="message"
                      type="text"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="ادخل رسالتك"
                      name="message"
                      className="form-control input-box rm-border"
                    ></textarea>
                  </div>
                </div>
                <div className="form-group row justify-content-center mb-0">
                  <div className="col-md-12 px-3">
                    <input
                      type="submit"
                      value="ارسال"
                      className="btn btn-block btn-dark fw-bold rm-border"
                    />{" "}
                  </div>
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
    </>
  );
};

export default ContactUs;

