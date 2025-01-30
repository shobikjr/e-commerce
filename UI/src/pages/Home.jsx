import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import GridCard from '../components/GridCard'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='text-danger'>Home</h1>
      <Carousel/>
      <GridCard/>
      
      <footer/>
    </div>
  )
}

export default Home
