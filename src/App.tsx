import BarraNavegacao from './components/BarraNavegacao'
import MainBg from './components/MainBg'
import { IsMobileContextProvider } from './contexts/IsMobile'


function App() {


  return (
    <IsMobileContextProvider>

      <MainBg>

        <div className="flex bg-slate-200 h-screen flex-col">

          <BarraNavegacao />


        </div>
      </MainBg>
    </IsMobileContextProvider>
  )
}

export default App
