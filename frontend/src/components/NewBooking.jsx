// AmbulanceBookingPage.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./css/AmbulanceBookingPage.css";
import server from "../server";
import { useNavigate}  from 'react-router-dom';

const AmbulanceBookingPage = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const [bookingType, setBookingType] = useState("Basic Life Support Ambulance - 400Rs/10Km");
  const [patientName, setPatientName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [bookingDate, setBookingDate] = useState("");

  const handleBookingTypeChange = (e) => {
    setBookingType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform booking logic here
  

    let bookingData = {
      bookingType,patientName,contactNumber,bookingDate
    }

    server.post("/ambulance/book", bookingData)
    .then(response => {
      if(response.status === 201){
        alert("Booking Successful.");
        setBookingDate("");
        setBookingType("");
        setPatientName("");
        setContactNumber("");
        navigate("/bookings");
      }
    })
    .catch(err => {
      alert("Something went wrong! Please try again later.");
    })
  };

  return (
    <>
      {isAuthenticated ? (
        <Container className="ambulance-booking-container" >
          <h1 style={{display:"flex",justifyContent:"center"}}>Emergency Ambulance Services</h1>
          <p style={{display:"flex",justifyContent:"center"}}>Your safety is our priority. Book an ambulance now.</p>
          <hr />
          <Row className="mb-4">
            <Col md={6}>
              <h2 style={{color:"red"}}>Why Choose Us?</h2>
              <ul>
                <li>24/7 Emergency Service</li>
                <li>Experienced Medical Professionals</li>
                <li>Quick Response Time</li>
                <li>Modern and Well-equipped Ambulances</li>
              </ul>
            </Col>

            <Col md={6}>
              <h2 style={{color:"red"}}>Book an Ambulance</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBookingType" className="mb-2">
                  <Form.Label>Choose Ambulance Type</Form.Label>
                  <Form.Control
                    as="select"
                    value={bookingType}
                    onChange={handleBookingTypeChange}
                  >
                    <option value="Basic Life Support Ambulance - 400Rs/10Km">
                      Basic Life Support Ambulance - 400Rs/10Km
                    </option>
                    <option value="Advanced Life Support - 700Rs/10Km">
                      Advanced Life Support - 700Rs/10Km
                    </option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formCustomerName" className="mb-2">
                  <Form.Label>Enter Patient Name</Form.Label>
                  <Form.Control
                    type="text"
                    pattern="[A-Za-z\s]+"
                    placeholder="Enter your name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBookingDate" className="mb-2">
                  <Form.Label>Booking Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formContactNumber" className="mb-2">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter your contact number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </Form.Group>

                <Button variant="outline-danger" type="submit" className="mt-2" size="lg">
                  Book Ambulance
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="mt-5">
          <h1 className="text-center">Login to Book Ambulance</h1>
        </div>
      )}
    </>
  );
};

export default AmbulanceBookingPage;
