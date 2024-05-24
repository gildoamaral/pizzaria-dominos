import Header from './components/Navbar/Header';
import { IsMobileContextProvider } from './contexts/IsMobileContext';
import Footer from './components/Footer/Footer';
import MainContainer from './components/Main/contents/MainContainer';
import Main from './components/Main/Main';

function App() {



    return (
        <IsMobileContextProvider>
            <Header />

            <MainContainer>
                <Main />

            </MainContainer>
            <Footer />

        </IsMobileContextProvider>
    );
}

export default App;
