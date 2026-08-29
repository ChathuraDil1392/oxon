import Description_Card, { type Card } from "./Description_Card";
import image_1 from '../assets/image_1.jpg';
import image_2 from '../assets/images_2.jpg';
import image_3 from '../assets/images_3.jpg';
import image_4 from '../assets/images_4.jpg';
import { RiGlobalFill } from "react-icons/ri";
import { SiCloudfoundry } from "react-icons/si";

const Descriptions = () => {
  // Example icon path imports (or replace with your own icons)
  const cards: Card[] = [
    {
      id: 1,
      topic: "Global Reach",
      text: "Serves over 20,000 hotels in more than 120 countries worldwide.",
      image: image_1,
      icon: <SiCloudfoundry />, // Passing an asset path for the icon
      hashTag_1: "hospitality",
      hashTag_2: "global"
    },
    {
      id: 2,
      topic: "Smart Solutions",
      text: "Offers integrated smart-hotel systems including RFID locks, safes, minibars.",
      image: image_2,
     icon: <RiGlobalFill/>, // Passing an asset path for the icon
      hashTag_1: "hospitality",
      hashTag_2: "global"},
    {
      id: 3,
      topic: "Factory Standards",
      text: "Operates a 46,000 m² garden-style factory and maintains quality manufacturing.",
      image: image_3,
      icon: <RiGlobalFill/>, // Passing an asset path for the icon
      hashTag_1: "hospitality",
      hashTag_2: "global"},
    
    {
      id: 4,
      topic: "Product Diversity",
      text: "Provides a wide array of items: hotel locks, bathroom locks, safe boxes, minibar units and more.",
      image: image_4,
       icon: <RiGlobalFill/>, // Passing an asset path for the icon
      hashTag_1: "hospitality",
      hashTag_2: "global"},
  ];

 return (
    /* 
      FIXES APPLIED HERE:
      1. 'px-12 md:px-24 lg:px-32' adds clean, breathing margin spaces on the left and right sides.
      2. 'max-w-6xl mx-auto' clamps the entire card section so it stays smaller and centers beautifully.
    */
    <div className="w-full bg-gray-50 py-12 px-8 sm:px-16 md:px-24 lg:px-32">
      <div className="max-w-5xl mx-auto">
        
        {/* The grid container remains items-stretch to keep heights perfectly uniform */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {cards.map((card) => (
            <Description_Card key={card.id} {...card} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Descriptions;
