import './statusNotification.css';
import successImage from '../../assets/success.png';
import failureImage from '../../assets/failure.png';
import { StatusContext } from '../../Context/StatusContext';
import { useContext } from 'react';

function StatusNotification() {

    const { actionStatus, statusMessage } = useContext(StatusContext);

    return (
        <>
            <div id="status-notification"
                style={{
                    backgroundColor: actionStatus === true ? ('rgb(155, 255, 153)') : actionStatus === false ? ('rgb(255, 112, 112)') : 'black',
                    display: actionStatus === true ? ('flex') : actionStatus === false ? ('flex') : 'none'
                }}
            >

                <div className='sub-status-notification' id="status-image-section">
                    {actionStatus === true ? (<img src={successImage} />) : actionStatus === false ? (<img src={failureImage} />) : null}
                </div>

                <div className='sub-status-notification' id='status-message-section'>
                    {statusMessage ? <p className='message'>{statusMessage}</p> : <p className='message'>no action performed</p>}
                </div>

            </div>
        </>
    );
}

export default StatusNotification;