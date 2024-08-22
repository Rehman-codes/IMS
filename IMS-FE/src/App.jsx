import './App.css'
import { useState } from 'react';
import StatusNotification from './Utilities/Notifications/StatusNotification';


function App() {

  const [actionStatus, setActionStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  
  return (
    <>
      <StatusNotification
        actionStatus = {actionStatus}
        statusMessage = {statusMessage}
      />
    </>
  )
}

export default App;
