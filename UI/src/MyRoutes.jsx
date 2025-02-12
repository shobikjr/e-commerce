import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Suman from './Suman'
import App from './App'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import UseState from './hooks/UseState'
import UseState1 from './hooks/UseState1'
import Props from './props/Props'

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<AboutUs/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/use" element={<UseState/>}/>
        <Route path="/useto" element={<UseState1/>}/>
        <Route path="/props" element={<Props/>}/>
      </Routes>
      </BrowserRouter> 
    </>
  )
}

export default MyRoutes
