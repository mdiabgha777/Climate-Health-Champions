import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyItMatters from './components/WhyItMatters'
import WhatWeDo from './components/WhatWeDo'
import GetInvolved from './components/GetInvolved'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About/>
      <WhyItMatters/>
      <WhatWeDo/>
      <GetInvolved/>
      <Footer />
    </div>
  )
}

export default App