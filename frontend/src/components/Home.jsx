import { Button, Card, Carousel, Container, Row } from "react-bootstrap";
import pic1 from "./pictures/amb1.jpeg"
import pic2 from "./pictures/amb2.jpeg"
import pic3 from "./pictures/amb3.jpg"
import pic4 from "./pictures/type1.png";
import pic5 from "./pictures/type2.png"
export function Home() {
    return (
        <Container>
            <br /><br />
            <Container style={{ display: "flex", justifyContent: "center" }}>
                <Carousel data-bs-theme="dark" style={{ width: "100%" }} prevIcon="" nextIcon="" wrap="1">
                    <Carousel.Item style={{ width: "100%" }}>
                        <img
                            className="d-block w-100"
                            src={pic1}
                            height={"500px"}
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic2}
                            height={"500px"}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic3}
                            height={"500px"}
                        />
                    </Carousel.Item>
                </Carousel>

            </Container>
            <Container style={{ marginTop: "20px", textAlign: "center" }}>
                <div>
                    <br />
                    <h3>TYPES OF <span style={{ color: "red" }}>AMBULANCES</span> WE OFFER</h3>
                    {/* Add content here */}
                </div>

                <Row className="text-center" style={{ display: "flex", justifyContent: "center" }}>
                    <Card style={{ width: '18rem', margin: '40px', border: 'none', boxShadow: " 0 0 8px 0 rgba(0, 0, 0, 0.4)" }}  >
                        <Card.Img variant="top" src={pic4} className="mt-3" />
                        <Card.Body>
                            <a href="https://en.wikipedia.org/wiki/Advanced_life_support">
                                <button className="btn btn-outline-danger">
                                    Know more
                                </button>
                            </a>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: '40px', border: 'none', boxShadow: " 0 0 8px 0 rgba(0, 0, 0, 0.4)" }} >
                        <Card.Img variant="top" src={pic5} className="mt-3" />
                        <Card.Body>
                            <a href="https://en.wikipedia.org/wiki/Basic_life_support">
                                <button className="btn btn-outline-danger">
                                    Know more
                                </button>
                            </a>
                        </Card.Body>

                    </Card>

                </Row>
                <br /><br />

            </Container>
        </Container>

    )
}