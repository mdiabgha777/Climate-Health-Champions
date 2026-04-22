import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyItMatters from './components/WhyItMatters'
import WhatWeDo from './components/WhatWeDo'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About/>
      <WhyItMatters/>
      <WhatWeDo/>
    </div>
  )
}

export default App