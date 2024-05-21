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
            <main className='w-screen flex justify-center'>

                <MainBg col>
                    <Delivery />
                    <div className='bg-yellow-200 w-full flex gap-4 flex-wrap m-8 '>
                        <a href=""><img src={publi1} alt=""  className=''/></a>
                        <a href=""><img src={publi2} alt="" className='h-10'/></a>
                        <a href=""><img src={publi3} alt="" /></a>
                        <a href=""><img src={publi4} alt="" /></a>
                    </div>



                </MainBg>

            </main>
        </IsMobileContextProvider>
    );
}

export default App;
