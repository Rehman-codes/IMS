import './App.css'
// import LoadingScreen from './Utilities/ScreenLoaders/LoadingScreen';
import StatusNotification from './Utilities/Notifications/StatusNotification';
import Home from './Components/Home';

function App() {

  return (
    <>
      <Home />
      {/* <LoadingScreen/> */}
      <StatusNotification/> 
    </>
  )
}

export default App;
