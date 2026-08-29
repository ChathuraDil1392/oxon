import Category_Card, { type Category } from './Category_Card';
import category_1 from '../assets/placeholder.jpg';
import access_control from '../assets/access_control.jpg'
import cctv from '../assets/cctv.webp'
import fire_alarm from '../assets/fire_alarm.jpg'
import intruder_system from '../assets/Intruder_Alarm.jpg'
import intercom from '../assets/intercom.jpg'
import home_lock from '../assets/home lock.jpg'
import hotel_lock from '../assets/hotel_lock.avif'
import home_automation from '../assets/home_automation.jpg'
import hotel_accesories from '../assets/hotel_accesories.jpg'
import hotel_automation from '../assets/hotel_automation.jpg'


// Dummy data expanded to 7 items to test the wrap-around behavior
const categories: Category[] = [
    { id: 1, topic: 'Access Control', image: access_control },
    { id: 2, topic: 'CCTV Systems', image: cctv },
    { id: 3, topic: 'Fire Alarms', image: fire_alarm },
    { id: 4, topic: 'Intruder Alarms', image: intruder_system },
    { id: 5, topic: 'Intercoms', image: intercom },
    { id: 6, topic: "Home Series Smart Locks", image: home_lock },
    { id: 7, topic: 'Home Automation', image: home_automation },
    { id: 7, topic: 'Hotel Series Smart Locks', image: hotel_lock },
    { id: 7, topic: 'Hotel Automation', image: hotel_automation },
    { id: 7, topic: 'Hotel Accessories', image: hotel_accesories },
    { id: 7, topic: 'Hotel Automation', image: category_1 },
    { id: 7, topic: 'Mifare Encorders', image: category_1 },
    { id: 7, topic: 'Wireless Programmer', image: category_1 },
];

const Product_Categories = () => {
    return (
        <div className="mr-30 ml-30 mt-10 mb-10">
            <div>
                <h1 className="text-center text-4xl font-bold mb-10">Products Categories</h1>
            </div>

            {/* 
        Changed flex to grid. 
        grid-cols-5: Forces exactly 5 columns.
        gap-6: Adds equal horizontal and vertical space between cards.
      */}
            <div className="grid grid-cols-6 gap-5">
                {categories.map(cat => (
                    <Category_Card key={cat.id} topic={cat.topic} image={cat.image} />
                ))}
            </div>
        </div>
    );
};

export default Product_Categories;
