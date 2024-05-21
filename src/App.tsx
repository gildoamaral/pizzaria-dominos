import Header from './components/Navbar/Header';
import Delivery from './components/Delivery';
import MainBg from './components/MainBg';
import { IsMobileContextProvider } from './contexts/IsMobileContext';
import Section1 from './components/Section1';


function App() {



    return (
        <IsMobileContextProvider>
            <Header />
            <main className=' flex justify-center'>

                <MainBg col>

                    <Delivery />

                    <Section1 />
                    
                </MainBg>

            </main>
        </IsMobileContextProvider>
    );
}

export default App;
