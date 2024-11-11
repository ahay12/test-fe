import PropTypes from 'prop-types';
import { useState } from 'react';

const BookingForm = ({ spot, onConfirmBooking, onCancel }) => {
    const [name, setName] = useState('');
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Tetapkan entryTime ke waktu saat ini
        const currentDate = new Date();
        const entryTime = currentDate.toLocaleString('id');

        onConfirmBooking({
            spot,
            name,
            vehicleNumber,
            duration,
            entryTime,

        });
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit} style={{ display: 'grid', padding: '10px', border: '1px solid #ddd' }}>
                <h3>Booking for Spot {spot.number}</h3>

                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Vehicle Number:</label>
                <input type="text" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} required />

                <label>Duration (hours):</label>
                <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />

                <button type="submit" style={{ marginTop: '10px', backgroundColor: 'green' }}>Confirm Booking</button>
                <button type="button" onClick={onCancel} style={{ marginTop: '10px', backgroundColor: 'red' }}>Cancel</button>
            </form>
        </div>
    );
};

BookingForm.propTypes = {
    spot: PropTypes.object.isRequired,
    onConfirmBooking: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default BookingForm;
