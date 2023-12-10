import {Card, Container, Row } from "react-bootstrap";
import pic from "./pictures/sakshi.jpeg"
import pic1 from "./pictures/aniket.jpg"
import pic2 from "./pictures/suraj.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function About() {
    return (
        <Container>
           
                <h3 className="mt-5 text-center">Our Members</h3>
                <hr />
            
            <Row className="text-center" style={{display:"flex" ,justifyContent:"center"}}>
            <Card style={{ width: '18rem',margin:'45px', border:'none', boxShadow:" 0 0 8px 0 rgba(0, 0, 0, 0.4)"}}  >
                    <Card.Img variant="top" src={pic1} style={{ height:200, width:200, borderRadius:200,alignSelf:"center"}} className="mt-3" />
                    <Card.Body>
                        <Card.Title>Aniket Tawade</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <a href="https://www.linkedin.com/in/aniket-tawade-2007b521b/"><FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl"/>               </a>    
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem',margin:'45px', border:'none', boxShadow:" 0 0 8px 0 rgba(0, 0, 0, 0.4)"}} >
                    <Card.Img  variant="top" src={pic} style={{ height:200, width:200, borderRadius:200,alignSelf:"center"}} className="mt-3"/>
                    <Card.Body>
                        <Card.Title>Sakshi Korgaonkar</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        
                       <a href="https://www.linkedin.com/in/sakshi-korgaonkar/"><FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl"/>               </a>    
                        </Card.Body>

                </Card>
                <Card style={{ width: '18rem',margin:'45px', border:'none', boxShadow:" 0 0 8px 0 rgba(0, 0, 0, 0.4)"}} >
                    <Card.Img variant="top" src={pic2} style={{ height:200, width:200, borderRadius:200,alignSelf:"center"}} className="mt-3" />
                    <Card.Body>
                        <Card.Title>Suraj Gupta</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <a href="https://www.linkedin.com/in/suraj-gupta-876915199/"><FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl"/>               </a>    
                    </Card.Body>
                </Card>
            </Row>
            <br /><br />
        </Container>

    )
}