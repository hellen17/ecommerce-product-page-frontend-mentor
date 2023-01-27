import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Product from './pages/Product'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="max-w-6xl mx-auto">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
    
      <Product />
    </div>
  )
}

export default App
