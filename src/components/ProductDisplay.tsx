import { ItemCard, type Product } from './ItemCard';
import lock_1 from '../assets/1.jpg';
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
      brandImageUrl: orbita,
      title_2: 'Bluetooth Fingerprint Lock',
      features: ['fingerprint', 'pin', 'bluetooth', 'key'],
    },
    {
      id: '2',
      brand: 'Nike',
      title: 'P7021 ',
      price: 3450.0,
      imageUrl: lock_1,
      isBestSeller: true,
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
