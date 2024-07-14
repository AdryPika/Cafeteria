import { useState } from 'react'

import './App.css'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import MainContent from './Componentes/MainContent'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <MainContent />
      <Footer /> 
    </div>
  )
}

export default App;
