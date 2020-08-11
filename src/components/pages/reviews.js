import React, { Component } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
};
class Reviews extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          name: "Brandon Johnson",

          desc:
            "Best Ford Diesel mechanic shop in Spokane Washington, very easy going guys that are very easy to work with",
        },
        {
          name: "Raymond Leonard",

          desc: "This shop is the best.   The first time I needed help Alvin actually talked me through doing the repair on the phone just to get me back on the road.  I wasn't  even a customer yet and he was willing to take the time.  Since then I have had several things looked at and repaired on my old 7.3 F350 and excursion.   Always helpful and reasonable prices and great work from the team.",
        },
        {
          name: "JoLyn Blancher",

          desc: "Called into the shop this morning to ask some general questions about an issue with our F-350. Alvin was so awesome!!! He was full of knowledge, kindness, honesty, and very helpful when both my husband and I called in. We will absolutely be going to Spokane PowerStoke with any needs or problems that arise with our truck. Great first impression!!! Thanks, Alvin!",
        },
        {
          name: "STEAM BROTHERS LLC",

          desc: "Do the job rite, honest and great service. Would definitely recommend.👍👍👍",
        },
        {
          name: "Chris Harper",

          desc: "Alvin always does a great job at a fair price.  Super experienced and has a quick turnaround.",
        },
        {
          name: "Rowdy Bovan",

          desc: "Great service and communication from Alvin. He got my truck back on the road quickly and at a fair price. I really appreciate it thanks again!",
        },
        {
          name: "Kent Firestone",

          desc: "Great job truck runs perfect",
        },
        {
          name: "Timothy Daniels",

          desc: "These guys are great.  They diagnosed the problem and had it fixed promptly.  And the price was fair!",
        },
        {
          name: "Pamela Murray",

          desc: "Spokane powerstroke service is top notch.  Unfortunately,  we have had to visit many Spokane diesel shops for repairs and this shop is by far the best. The service and diesel expertise this shop gave us was unprecedented.  This is the best diesel shop in town!!!",
        },
        {
          name: "Dave Benham",

          desc: "These guys are solid and one stop place for powerstroke work and repair.  Talk to Brandon hes 100% knowledgable and honest.",
        },
        {
          name: "Robert Weathermon",

          desc: "Talk to Brandon or Alvin. They are the best.",
        },
        {
          name: " Dale I",

          desc: "Alvin is one of the best mechanics I know. Honest and willing to take the effort to solve the cause of the problem. Fair rates and top service equals quality.",
        },
        {
          name: "Brady Kriegh",

          desc: "Alvin is great. Fast service at very fair price. Highly recommend taking your vehicle to him.",
        },
      ],
    };
  }
  render() {
    return (
      <motion.div
        className="mysingle"
        initial="exit"
        animate="enter"
        exit="exit"
        variants={backVariants}
      >
       <h1 className="centertext">Our latest google reviews</h1> 
       <Container className="row">
        
        
          {this.state.items.map(({ name, desc, id }) => (
            <Card key={id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src="./images/stars.png" />
              <Card.Body>
                <Card.Title className="title">{name}</Card.Title>
                <Card.Text className="cardtext">{desc}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </motion.div>
    );
  }
}

export default Reviews;