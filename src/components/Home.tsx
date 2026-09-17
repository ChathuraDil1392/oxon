import { AnnouncementTicker } from './AnnouncementTicker'
import BrandBanner from './Brands'
import Carousel from './Carousel'
import Company_Services from './Company_Services'
import CustomerReviews from './CustomerReviews'
import { NewArrivals } from './NewArrivals'
import ProcessSection from './ProcessSection'
import ProductGrid from './ProductGrid'

const Home = () => {
    return (
        <>
            <Carousel />
            <BrandBanner />
            <AnnouncementTicker />
            <NewArrivals />
            <ProductGrid />
            <Company_Services />
            <CustomerReviews />
            <ProcessSection />
        </>
    )
}

export default Home