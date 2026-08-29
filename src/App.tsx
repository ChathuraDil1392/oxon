
import './App.css'
import Carousel from './components/Carousel'
import Descriptions from './components/Descriptions'
import HeaderBar from './components/HeaderBar'
import NavBar from './components/NavBar'
import Popular_Products from './components/Popular_Products'
import Product_Categories from './components/Product_Categories'

function App() {


  return (
    <>
      <div>
        <HeaderBar />
        <NavBar />
        <Carousel />
        <Descriptions />
        <Popular_Products />
        <Product_Categories />
      </div>
    </>
  )
}

export default App
