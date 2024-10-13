import Footer from './Components/Footer'
import MainContent from './Components/MainContent'
import Hero from './Components/Hero'
import './App.css'

function App() {
 
  return (
    <>

    <nav className="navbar">
      <div className="navbar-logo">Daao</div>
      <ul className="navbar-links">
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>

  
    <Hero></Hero>
    <MainContent></MainContent>
    <Footer></Footer>
  
    </>
  )
}

export default App
