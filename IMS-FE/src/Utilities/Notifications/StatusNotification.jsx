import './statusNotification.css';
import { StatusContext } from '../../Context/StatusContext';
import { useContext } from 'react';

function StatusNotification() {

    const { actionStatus, statusMessage } = useContext(StatusContext);

    return (
        <>
            <div id="status-notification"
                style={{
                    backgroundColor: actionStatus === true ? ('rgb(155, 255, 153)') : actionStatus === false ? ('rgb(255, 112, 112)') : 'black',
                    color: actionStatus === true ? ('black') : 'white',
                    display: actionStatus === true ? ('flex') : actionStatus === false ? ('flex') : 'none'
                }}
            >
                {statusMessage ? <p id='message'>{statusMessage}</p> : <p>no action performed</p>}
            </div>
        </>
    );
}

export default StatusNotification;
