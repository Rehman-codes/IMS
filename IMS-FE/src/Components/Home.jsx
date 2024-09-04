import './home.css';
import SideBarLeft from './Sidebar/SideBarLeft';
import Main from './Main';

function Home() {

    return (
        <>
            <section id='home'>
                    <div id='home-1'>
                        <SideBarLeft />
                    </div>
                    <div id='home-2'>
                        <Main />
                    </div>
            </section>
        </>
    )
}

export default Home;