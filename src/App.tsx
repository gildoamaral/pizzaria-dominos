import Header from './components/Navbar/Header';
import Delivery from './components/Delivery';
import MainBg from './components/MainBg';
import { IsMobileContextProvider } from './contexts/IsMobileContext';


function App() {


    return (
        <IsMobileContextProvider>
            <Header />
            <main className='w-screen flex justify-center'>

                <MainBg>
                    <Delivery />




                </MainBg>

            </main>
        </IsMobileContextProvider>
    );
}

export default App;
