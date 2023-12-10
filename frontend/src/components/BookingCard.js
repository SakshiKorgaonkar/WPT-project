import React from "react";
import server from "../server";

const BookingCard = ({ booking, setBookingUpdated }) => {
  // Function to format the date as dd-mm-yyyy
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleCancel = async (bookingId) => {
    try {
      const response = await server.post(`/ambulance/cancel/${bookingId}`);
      if (response.status === 200) {
        setBookingUpdated(true);
      }
    } catch (error) {
      alert("Error cancelling booking:", error);
    }
  };

  return (
    <div
      className="card"
      style={{
        width: "25rem",
        marginTop: "2rem",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{booking.bookingType}</h5>
        <p className="card-text">
          <strong>Patient Name:</strong> {booking.patientName}
        </p>
        <p className="card-text">
          <strong>Contact:</strong> {booking.contactNumber}
        </p>
        <p className="card-text">
          <strong>Date:</strong> {formatDate(booking.bookingDate)}
        </p>

        <p className="card-text">
          <strong>Status:</strong>{" "}
          {booking.isCancelled ? "Cancelled" : "Scheduled"}
        </p>
        {!booking.isCancelled && (
          <button
            className="btn btn-outline-danger" 
            onClick={() => handleCancel(booking._id)}
          >
            Cancel
          </button>
          
        )}
        <br></br>
      </div>
      <br></br>
    </div>
    
  );

};
<br></br>
export default BookingCard;
