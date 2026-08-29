import smart_home from '../assets/smart_home.webp'
import smart_hotel from '../assets/smart_hotel.png'

const Popular_Products = () => {
    return (
        <div className="m-10">
            <h1 className="text-center text-4xl font-bold mb-10">Popular Products</h1>
            <div className="flex justify-between align-middle gap-2">

                {/* Left Card */}
                <div className="w-1/2 h-96 relative overflow-hidden rounded-xl group cursor-pointer">
                    <img
                        src={smart_home}
                        alt="smart_home"
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.01]"
                    />
                    {/* Light Black Screen (Fades from 45% opacity down to 25% on hover) */}
                    <div className="absolute inset-0 bg-black/35 transition-colors duration-700 ease-in-out group-hover:bg-black/15" />

                    {/* Centered Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10">
                        <h1 className='font-bold text-3xl mb-2'>Smart Home Solution</h1>
                        <p className='text-sm opacity-90 max-w-sm'>Personalized automation, energy management, security, and comfort for modern residences and apartments.</p>
                    </div>
                </div>

                {/* Right Card */}
                <div className="w-1/2 h-96 relative overflow-hidden rounded-xl group cursor-pointer">
                    <img
                        src={smart_hotel}
                        alt="smart_hotel"
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.01]"
                    />
                    {/* Light Black Screen (Fades from 45% opacity down to 25% on hover) */}
                    <div className="absolute inset-0 bg-black/35 transition-colors duration-700 ease-in-out group-hover:bg-black/15" />

                    {/* Centered Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10">
                        <h1 className='font-bold text-3xl mb-2'>Smart Hotel Solution</h1>
                        <p className='text-sm opacity-90 max-w-sm'>In-room automation, lighting and climate control, energy management, and smart device integration tailored for resorts, hotels, and serviced apartments.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Popular_Products
