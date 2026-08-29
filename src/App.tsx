
import './App.css'
import Carousel from './components/Carousel'
import Descriptions from './components/Descriptions'
import HeaderBar from './components/HeaderBar'
import NavBar from './components/NavBar'
import Popular_Products from './components/Popular_Products'

function App() {
  

  return (
    <>
      <div>
        <HeaderBar/>
        <NavBar/>
        <Carousel/>
        <Descriptions/>
        <Popular_Products/>
      </div>
    </>
  )
}

export default App
