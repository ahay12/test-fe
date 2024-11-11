import PropTypes from 'prop-types';

const ConfirmationPopup = ({ message, onClose }) => (
    <div className="popup-overlay">
        <div className="popup-content">
            <h3>Confirmation</h3>
            <p>{message}</p>
            <button onClick={onClose}>OK</button>
        </div>
    </div>
);

ConfirmationPopup.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ConfirmationPopup;
