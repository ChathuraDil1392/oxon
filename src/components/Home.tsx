import { AnnouncementTicker } from './AnnouncementTicker'
import BrandBanner from './Brands'
import Carousel from './Carousel'
import Company_Services from './Company_Services'
import CustomerReviews from './CustomerReviews'
import { NewArrivals } from './NewArrivals'
import ProcessSection from './ProcessSection'
import ProductGrid from './ProductGrid'
import backgroundImage from '../assets/back_7.jpg';

const Home = () => {
    return (
        <>
            <main className='relative min-h-screen overflow-hidden'>

                {/* Full Page Background */}
                <div
                    className='fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-15'
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                    }}
                />
                <Carousel />
                <BrandBanner />
                <AnnouncementTicker />
                <NewArrivals />
                <ProductGrid />
                <Company_Services />
                <CustomerReviews />
                <ProcessSection />

            </main >
        </>
    )
}

export default Home