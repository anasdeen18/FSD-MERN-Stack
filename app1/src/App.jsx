import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Login from './components/Login'
import Reg from './components/Reg'
import Navbar from './components/Navbar'
import DataTable from './components/DataTable'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Example from './components/Example'
import ApiData from './components/ApiData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
 <Navbar/> 
  
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/t" element={<DataTable/>}/>
  <Route path="/s" element={<StateBasics/>}/>
  <Route path="/c" element={<Counter/>}/>
  <Route path='/e' element={<Example/>}/>
  <Route path='/a' element={<ApiData/>}/>

</Routes>
      </div>
    </>
  )
}

export default App
