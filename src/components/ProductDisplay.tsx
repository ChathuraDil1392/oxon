import { ItemCard, type Product } from './ItemCard';
import lock_1 from '../assets/1.jpg';
import lock_2 from '../assets/2.jpg'
import lock_3 from '../assets/5.jpg'
import lock_4 from '../assets/6.jpg'
import orbita from '../assets/orbita_small.png';

const ProductDisplay = () => {
  // 1. Corrected array brackets, object syntax, and changed ID to a string to match the Product interface
  const sampleProducts: Product[] = [
    {
      id: '1',
      brand: 'Orbita',
      title: 'P7021 ',
      price: 3450.0,
      imageUrl: lock_1,
      isBestSeller: true,
      isOnStock: false,
      brandImageUrl: orbita,
      title_2: 'Bluetooth Fingerprint Lock',
      features: ['fingerprint', 'pin', 'bluetooth', 'key'],
    },
    {
      id: '2',
      brand: 'Nike',
      title: 'P7021 ',
      price: 3450.0,
      imageUrl: lock_2,
      isBestSeller: false,
      isOnStock: true,
      brandImageUrl: orbita,
      title_2: 'Bluetooth Fingerprint Lock',
      features: ['fingerprint', 'pin', 'bluetooth', 'key'],
    },
    {
      id: '3',
      brand: 'Nike',
      title: 'P7021 ',
      price: 3450.0,
      imageUrl: lock_3,
      isBestSeller: false,
      isOnStock: true,
      brandImageUrl: orbita,
      title_2: 'Bluetooth Fingerprint Lock',
      features: ['fingerprint', 'pin', 'bluetooth', 'key'],
    },
    {
      id: '4',
      brand: 'Nike',
      title: 'P7021 ',
      price: 3450.0,
      imageUrl: lock_4,
      isBestSeller: false,
      isOnStock: false,
      isComingSoon: true,
      brandImageUrl: orbita,
      title_2: 'Bluetooth Fingerprint Lock',
      features: ['fingerprint', 'pin', 'bluetooth', 'key'],
    },
    {
      id: '5',
      brand: 'Nike',
      title: 'P7021 ',
      price: 3450.0,
      imageUrl: lock_1,
      isBestSeller: true,
      isOnStock: false,
      brandImageUrl: orbita,
      title_2: 'Bluetooth Fingerprint Lock',
      features: ['fingerprint', 'pin', 'bluetooth', 'key'],
    },
    {
      id: '6',
      brand: 'Nike',
      title: 'P7021 ',
      price: 3450.0,
      imageUrl: lock_2,
      isBestSeller: false,
      isOnStock: false,
      brandImageUrl: orbita,
      title_2: 'Bluetooth Fingerprint Lock',
      features: ['fingerprint', 'pin', 'bluetooth', 'key'],
    },
    {
      id: '7',
      brand: 'Nike',
      title: 'P7021 ',
      price: 3450.0,
      imageUrl: lock_3,
      isBestSeller: false,
      isOnStock: false,
      brandImageUrl: orbita,
      title_2: 'Bluetooth Fingerprint Lock',
      features: ['fingerprint', 'pin', 'bluetooth', 'key'],
    },
    {
      id: '8',
      brand: 'Nike',
      title: 'P7021 ',
      price: 3450.0,
      imageUrl: lock_4,
      isBestSeller: false,
      isOnStock: false,
      brandImageUrl: orbita,
      title_2: 'Bluetooth Fingerprint Lock',
      features: ['fingerprint', 'pin', 'bluetooth', 'key'],
    },
    {
      id: '9',
      brand: 'Nike',
      title: 'P7021 ',
      price: 3450.0,
      imageUrl: lock_1,
      isBestSeller: true,
      isOnStock: false,
      brandImageUrl: orbita,
      title_2: 'Bluetooth Fingerprint Lock',
      features: ['fingerprint', 'pin', 'bluetooth', 'key'],
    },
    {
      id: '10',
      brand: 'Nike',
      title: 'P7021 ',
      price: 3450.0,
      imageUrl: lock_2,
      isBestSeller: false,
      isOnStock: false,
      brandImageUrl: orbita,
      title_2: 'Bluetooth Fingerprint Lock',
      features: ['fingerprint', 'pin', 'bluetooth', 'key'],
    },
    {
      id: '11',
      brand: 'Nike',
      title: 'P7021 ',
      price: 3450.0,
      imageUrl: lock_3,
      isBestSeller: false,
      isOnStock: false,
      brandImageUrl: orbita,
      title_2: 'Bluetooth Fingerprint Lock',
      features: ['fingerprint', 'pin', 'bluetooth', 'key'],
    },

  ];

  return (
    <>
      <div>
        {/* 2. Changed prop name to 'products' and passed the array variable */}
        <ItemCard products={sampleProducts} />
      </div>
    </>
  );
};

export default ProductDisplay;
