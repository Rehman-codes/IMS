import './loadingScreen.css';
import animation from '../../assets/loadingScreenAnimation.mp4';

function LoadingScreen() {
    return (
        <section id='loading-screen'>
            <video src={animation} autoPlay muted loop></video>
        </section>
    );
}

export default LoadingScreen;
