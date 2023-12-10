import React, { useEffect, useState } from "react";
import server from "../server";
import BookingCard from "./BookingCard";
import { Container, Row } from "react-bootstrap";

export default function Bookings({ isAuthenticated }) {
  const [bookingData, setBookingData] = useState([]);
  const [isBookingUpdated, setBookingUpdated] = useState();

  const getBookings = () => {

    if(isAuthenticated){
      server
      .get("/ambulance/bookings")
      .then((response) => {
        setBookingData(response.data.userBookings);
      })
      .catch((error) => {
        alert("Can't get bookings");
      });
    }
    
  };

  useEffect(() => {
    if (isBookingUpdated) {
      getBookings();
      setBookingUpdated(false); // Reset the flag after making the call
    }
  }, [isBookingUpdated]);

  useEffect(() => {
    getBookings(); // Initial call to get bookings when the component mounts
  }, []);

  const bookings = bookingData.map((booking, index) => (
      <BookingCard booking={booking} setBookingUpdated={setBookingUpdated} />
  ));

  return (
    <Container className="mt-5">
      {isAuthenticated ? (
        <div className="mt-2">
          <h2 className="text-center">Your Bookings</h2>
          <Row style={{
            display: 'flex',
            gap:'2rem'
          }}>{bookings.length!=0?bookings:<p>You have no bookings till now.</p>}</Row>
        </div>
      ) : (
        <div className="mt-5">
          <h1 className="text-center">Login to View Your Bookings</h1>
        </div>
      )}
    </Container>
  );
}
