import { ItemCard, type Product } from "./ItemCard";
import lock_1 from '../assets/1.jpg'
import orbita from '../assets/orbita_small.png'
import { PremiumProductCard, type PremiumProduct } from "./Item_card";


const ProductDisplay = () => {
    // 1. Create a mock product object matching your Product interface requirements
    const sampleProduct: Product = {
        id: "1",
        brand: "Nike",
        title: 'P7021 ',
        price: 180.00,
        imageUrl: lock_1, // Replace with your image asset path
        isBestSeller: true,
        brandImageUrl: orbita,
        title_2: 'Bluetooth Fingerprint Lock',
        features: ['fingerprint', 'pin', 'bluetooth', 'key'],
    };

    const MOCK_HEADPHONES: PremiumProduct = {
        id: 'premium-audio-1',
        title: 'P7021',
        tagline: 'Bluetooth Fingerprint Lock',
        price: 89,
        imageUrl: lock_1, // Replace with your headphone asset
        rating: 5,
        features: ['fingerprint', 'pin', 'bluetooth', 'key'],
    };

    const handleCartAction = (id: string) => {
        console.log(`Dispatched item ${id} to store checkout state context.`);
    };
    return (
        <>

            <div>
                {/* 2. Bind the data object to the required product prop */}
                <ItemCard product={sampleProduct} />
            </div>
            <div className="flex min-h-screen items-center justify-center bg-[#070b19] p-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch justify-items-center w-full max-w-7xl">
                    <PremiumProductCard product={MOCK_HEADPHONES} onAddToCart={handleCartAction} />
                </div>
            </div>
        </>
    );
};

export default ProductDisplay;
