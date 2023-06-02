import "../Styles/home.css";
import Subtitle from "../shared/Subtitle"
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonaryImagesGallery from "../components/Image-gallery/MasonaryImagesGallery";
import Testimonials from "../components/Testimonials/Testimonials";
import NewsLetter from "../shared/NewsLetter";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";



function Home() {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-items-center">
                                    <Subtitle subtitle={"Know Before You Go"} />
                                    <img src={worldImg} alt="worldImg" />
                                </div>
                                <h1>Travelling opens the door to creating <span className="highlight">memories</span></h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla esse debitis ab molestiae assumenda aspernatur commodi praesentium, sit quisquam possimus. Dolores necessitatibus, praesentium debitis distinctio magni velit obcaecati pariatur!</p>

                            </div>
                        </Col>

                        <Col lg="2">
                            <div className="hero__img-box">
                                <img src={heroImg} alt="heroImg1" />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero__img-box hero__video-box mt-4">
                                <video src={heroVideo} alt="video1" controls />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero__img-box mt-5">
                                <img src={heroImg2} alt="heroImg2" />
                            </div>
                        </Col>

                        <SearchBar />
                    </Row>
                </Container>
            </section>


            <section>
                <Container>
                    <Row>
                        <Col lg="3">
                            <h5 className="services__subtitle">What we serve</h5>
                            <h2 className="services__title">We offer our best services</h2>
                        </Col>
                        <ServiceList />
                    </Row>
                </Container>
            </section>


            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <Subtitle subtitle={"Explore"} />
                            <h2 className="featured__tour-title">Our featured tours</h2>
                        </Col>
                        <FeaturedTourList />
                    </Row>
                </Container>
            </section>


            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="experience__content">
                                <Subtitle subtitle={"Experience"} />
                                <h2>With our all experience <br /> we will serve you</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                                    Reiciendis reprehenderit autem minima ullam.</p>
                            </div>

                            <div className="counter__wrapper d-flex align-items-center gap-5">
                                <div className="counter__box">
                                    <span>12k+</span>
                                    <h6>Successful trips</h6>
                                </div>
                                <div className="counter__box">
                                    <span>2k+</span>
                                    <h6>Regular clients</h6>
                                </div>
                                <div className="counter__box">
                                    <span>15</span>
                                    <h6>Years experience</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="experience__img">
                                <img src={experienceImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <Subtitle subtitle={"Gallery"} />
                            <h2 className="gallery__title">Visit our customers tour gallery</h2>
                        </Col>
                        <Col lg="12">
                            <MasonaryImagesGallery />
                        </Col>
                    </Row>
                </Container>
            </section>


            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <Subtitle subtitle={"Fans Love"} />
                            <h2 className="testimonials__title">What our fans say about us</h2>
                        </Col>
                        <Col lg="12">
                            <Testimonials />
                        </Col>
                    </Row>
                </Container>
            </section>

            <NewsLetter />
        </>
    )
}

export default Home;