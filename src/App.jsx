import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import { Route, Router, Routes } from 'react-router-dom'
import ProjectLayout1 from './layouts/ProjectLayout1'
import Product from './pages/Product'
import ProjectLayout2 from './layouts/ProjectLayout2'

function App() {

  return (
    <Routes>
      <Route element={<ProjectLayout1 />}>
        <Route path='' element={<Home />}></Route>
        <Route path='product' element={<Product />}></Route>
      </Route>
      <Route element={<ProjectLayout2 />}>
        <Route path='login' element={<Login />}></Route>
      </Route>
    </Routes>
  )
}

export default App
