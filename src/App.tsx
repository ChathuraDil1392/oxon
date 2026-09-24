
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
// import Descriptions from './components/Descriptions'

import ContactusPage from './components/ContactusPage'
import Footer from './components/Footer'
import HeaderBar from './components/HeaderBar'
import NavBar from './components/NavBar'
import Home from './components/Home'
import OurProjetcs from './components/OurProjetcs'
import ProductDisplay from './components/ProductDisplay'
// import Popular_Products from './components/Popular_Products'
// import Product_Categories from './components/Product_Categories'
//import CleanProductGrid from './components/CleanProductGrid'

function App() {


  return (
    <>

      <BrowserRouter>
        <HeaderBar />
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />,
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactusPage />} />
          <Route path='/our_projects' element={<OurProjetcs />} />
          <Route path='/products' element={<ProductDisplay />} />
        </Routes>
        <Footer />
      </BrowserRouter>


      {/* <ContactusPage /> */}
      {/* <Carousel />
        <Brands />
        <AnnouncementTicker />
        <NewArrivals />
        <ProductGrid />
        <Company_Services />
        <CustomerReviews />
        <ProcessSection />
        <AboutUs /> */}

      {/* <CleanProductGrid /> */}
      {/* <Descriptions /> */}
      {/* <Popular_Products /> */}
      {/* <Product_Categories /> */}
      {/* <OrbitaBanner /> */}
      {/* <OrbitaReferences /> */}
      {/* <CompanyStats /> */}


    </>
  )
}

export default App
