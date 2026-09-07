
import './App.css'
import AboutUs from './components/About_us'
import Brands from './components/Brands'
import Carousel from './components/Carousel'
import Company_Services from './components/Company_Services'
// import Descriptions from './components/Descriptions'
import Footer from './components/Footer'
import HeaderBar from './components/HeaderBar'
import NavBar from './components/NavBar'
// import Popular_Products from './components/Popular_Products'
import ProcessSection from './components/ProcessSection'
// import Product_Categories from './components/Product_Categories'
import CleanProductGrid from './components/CleanProductGrid'
import ProductGrid from './components/ProductGrid'

function App() {


  return (
    <>
      <div>
        <HeaderBar />
        <NavBar />
        <Carousel />
        <Brands />
        <CleanProductGrid />
        <ProductGrid />
        <Company_Services />
        <ProcessSection />
        <AboutUs />
        {/* <Descriptions /> */}
        {/* <Popular_Products /> */}
        {/* <Product_Categories /> */}
        {/* <OrbitaBanner /> */}
        {/* <OrbitaReferences /> */}
        {/* <CompanyStats /> */}
        <Footer />
      </div>
    </>
  )
}

export default App
