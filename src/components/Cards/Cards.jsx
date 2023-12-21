import React from 'react';
import './Cards.css';
import { Card, Col, Row } from 'react-bootstrap';
import rec1 from '../../assets/images/rec1.png';
import rec2 from '../../assets/images/rec2.png';
import rec3 from '../../assets/images/rec3.png';
import rec4 from '../../assets/images/rec4.png';

import { motion } from "framer-motion";

const imageArray = [rec1, rec2, rec3, rec4]; // Array containing the image paths

const titleArray = [
  'اكثر من معلم ومعلمة',
  'اكثر من معلم ومعلمة',
  'مختلف الاعمار والمستويات',
  'حفظنى معك فى تعلم القرأن',
];

const Cards = () => {
  const animations = [
    { x: -900 },
    { x: 900 },
    { x: -900 },
    { x: 900 }
  ];

  const transitions = [
    { delay: 1.4, duration:1.5, type: 'spring', stiffness: 120 },
    { delay: 1.8, duration:1.5, type: 'spring', stiffness: 120 },
    { delay: 2.2, duration:1.5, type: 'spring', stiffness: 120 },
    { delay: 2.6, duration:1.5,type: 'spring', stiffness: 120 }
  ];

  return (
    <>
      <div className='container'>
        <h1 className='mb-5' style={{ fontSize: "64px", direction: "rtl" }}>من نحن</h1>
        <Row xs={1} md={2} className="g-4">
          {imageArray.map((image, idx) => (
            <motion.Col key={idx}
              animate={{ x: 0, y: 0 }}
              initial={animations[idx]} // Apply different initial animations
              transition={transitions[idx]} // Apply different transition timings
            >
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title style={{ color: "#017457", fontWeight: "700", fontSize: "32px", lineHeight: "60px", direction: "rtl" }}>{titleArray[idx]}</Card.Title>
                  <Card.Text style={{ color: "#545F71", fontSize: "24px", lineHeight: "32px", fontWeight: "400", direction: "rtl" }}>
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Cards;
