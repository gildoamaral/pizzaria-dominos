import Header from './components/Navbar/Header';
import Delivery from './components/Delivery';
import MainBg from './components/MainBg';
import { IsMobileContextProvider } from './contexts/IsMobileContext';
import publi1 from './assets/publi1.png'
import publi2 from './assets/publi2.png'
import publi3 from './assets/publi3.png'
import publi4 from './assets/publi4.png'

function App() {


    return (
        <IsMobileContextProvider>
            <Header />
            <main className=' flex justify-center'>

                <MainBg col>

                    <Delivery />


                    <div className="flex flex-col  gap-4 mt-10 items-center">

                        <div className='flex justify-center  gap-4'>

                            <div>
                                <img src={publi1} alt="Image 1" />
                            </div>

                            <div className=" flex flex-col gap-4">

                                <img src={publi2} alt="Image 2" />

                                <img src={publi3} alt="Image 3" />

                            </div>
                        </div>

                        <img src={publi4} alt="Image 4" />

                    </div>


                </MainBg>

            </main>
        </IsMobileContextProvider>
    );
}

export default App;
