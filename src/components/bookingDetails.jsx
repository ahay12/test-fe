import PropTypes from 'prop-types';

const BookingDetails = ({ booking, onClose }) => (
    <div style={{ padding: '10px', border: '1px solid #ddd', marginTop: '10px' }} className='detail'>
        <h3>Booking Details</h3>
        <p>Spot: {booking.spot.number}</p>
        <p>Name: {booking.name}</p>
        <p>Vehicle Number: {booking.vehicleNumber}</p>
        <p>Enter Time: {booking.entryTime}</p>
        <p>Duration: {booking.duration} hours</p>
        <button onClick={onClose}>Close</button>
    </div>
);

BookingDetails.propTypes = {
    booking: PropTypes.shape({
        spot: PropTypes.shape({
            number: PropTypes.string.isRequired
        }).isRequired,
        name: PropTypes.string.isRequired,
        vehicleNumber: PropTypes.string.isRequired,
        entryTime: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired
    }).isRequired,
    onClose: PropTypes.func.isRequired
};

export default BookingDetails;
