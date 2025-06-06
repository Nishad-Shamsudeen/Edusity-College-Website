import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import { useState } from 'react'

export default function App() {

  const[playVedio,setVideo]=useState(false)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">

      <Title subTitle='our program' title='What we offer'/>
      <Programs/>
      <About setVideo={setVideo}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What student says'/>
      <Testimonials/>
      <Title subTitle='contact us' title='Reach out to us'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playVedio={playVedio} setVideo={setVideo}/>
    </div>
  )
}
