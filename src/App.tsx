import BarraNavegacao from './components/BarraNavegacao';
import MainBg from './components/MainBg';
// import MainBg from './components/MainBg';
import { IsMobileContextProvider } from './contexts/IsMobile';

function App() {
    return (
        <IsMobileContextProvider>
            <BarraNavegacao />
            <main className='w-screen flex justify-center'>

                <MainBg>

                    <div className='bg-yellow-200 flex flex-col items-center max-w-7xl'>
                        dasda

                    </div>

                </MainBg>

            </main>
        </IsMobileContextProvider>
    );
}

export default App;
