import { useState } from 'react';
import ParkingMap from './parkingMaps';
import BookingForm from './components/bookingForm';
import BookingDetails from './components/bookingDetails';
import ConfirmationPopup from './components/comfirmationPopUp';
import './App.css';

function App() {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [booking, setBooking] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleSelectSpot = (spot) => {
    console.log('Spot selected:', spot);
    setSelectedSpot(spot);
  };

  const handleCancelBooking = () => {
    setSelectedSpot(null);
  };

  const handleConfirmBooking = (bookingData) => {
    setBooking(bookingData);
    setSelectedSpot(null);
    setShowPopup(true);
  };

  setTimeout(() => {
    setShowPopup(false);
  }, 1000); 

  const handleCloseDetail = () => {
    window.location.reload();
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <ParkingMap onSelectSpot={handleSelectSpot} />
      {selectedSpot && (
        <BookingForm
          spot={selectedSpot}
          onConfirmBooking={handleConfirmBooking}
          onCancel={handleCancelBooking}
        />
      )}
      {booking && <BookingDetails booking={booking} onClose={handleCloseDetail} />}
      {showPopup && (
        <ConfirmationPopup
          message="Booking successful!"
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}

export default App;
