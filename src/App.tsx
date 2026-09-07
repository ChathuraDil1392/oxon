
import './App.css'
import AboutUs from './components/About_us'
import Brands from './components/Brands'
import Carousel from './components/Carousel'
import Company_Services from './components/Company_Services'
import CompanyStats from './components/CompanyStats'
// import Descriptions from './components/Descriptions'
import Footer from './components/Footer'
import HeaderBar from './components/HeaderBar'
import NavBar from './components/NavBar'
import OrbitaReferences from './components/OrbitaReferences'
// import Popular_Products from './components/Popular_Products'
import ProcessSection from './components/ProcessSection'
// import Product_Categories from './components/Product_Categories'
import ProductGrid from './components/ProductGrid'

function App() {


  return (
    <>
      <div>
        <HeaderBar />
        <NavBar />
        <Carousel />
        <Brands />
        {/* <Descriptions /> */}
        {/* <Popular_Products /> */}
        {/* <Product_Categories /> */}
        <Company_Services />
        <AboutUs />
        <ProcessSection />
        <ProductGrid />
        <OrbitaReferences />
        <CompanyStats />
        <Footer />
      </div>
    </>
  )
}

export default App
