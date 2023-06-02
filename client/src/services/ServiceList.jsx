import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

// Materials
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
    { imgUrl: weatherImg, title: "Calculate Weather", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { imgUrl: guideImg, title: "Best Tour Guide", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { imgUrl: customizationImg, title: "Customization", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }
]

function ServiceList() {
    return (
        <>
            {servicesData.map((item, ind) => {
                return (
                    <Col lg="3" md='6' sm="12" className="mb-4" key={ind}>
                        <ServiceCard item={item} />
                    </Col>
                )
            })}
        </>
    )
}

export default ServiceList;