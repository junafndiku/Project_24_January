import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import img1 from './images/albania.jpg';
import img2 from './images/europe.jpg';
import img3 from './images/middleeast.jpg';
import img4 from './images/fareast.jpg';
import OurDestinations from "./OurDestinations";

const DestinationInfo = () => {

    const infos = [
        {
            id:1,
            title:"Albania",
            region: "Albania",
            desc: "Discover Albania’s hidden gems—from pristine beaches along the Ionian coast to breathtaking mountains, rich history, and vibrant local culture waiting to be explored. ",
            image:img1,
        },
        {
            id:2,
            title:"Europe",
            region: "Europe",
            desc: "Explore the wonders of Europe, from romantic cities and iconic landmarks to scenic countryside and vibrant cultures. ",
            image:img2,
        },
        {
            id:3,
            title:"Middle East",
            region: "Middle East",
            desc: " Discover the Middle East’s rich history and vibrant cultures.",
            image:img3,
        },
        {
            id:4,
            title:"Far East",
            region: "Far East",
            desc: " Experience the Far East’s vibrant cultures, ancient traditions, and breathtaking landscapes. ",
            image:img4,
        },
    ];

  return (
    <Container className="mt-5">
        
        <Row >
            {infos.map((info) => {
                return (
                    <Col md={6} className="mb-5" key={info.id}>
                        <OurDestinations {...info} />
                    </Col>
                );
            })}
        </Row>
    </Container>
  );
}

export default DestinationInfo;