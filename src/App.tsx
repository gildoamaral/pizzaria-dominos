import BarraNavegacao from './components/Navbar/BarraNavegacao'


function App() {


  return (
    <div className="flex bg-slate-200 h-screen flex-col">
      <BarraNavegacao />

      <div className="outlet">
      </div>

    </div>
  )
}

export default App
