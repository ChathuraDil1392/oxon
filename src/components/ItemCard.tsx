import React, { useMemo, useState } from 'react';
import {
  LuBluetooth,
  LuClipboardList,
  LuCreditCard,
  LuFingerprint,
  LuKey,
  LuSlidersHorizontal,
} from 'react-icons/lu';

export type FeatureType =
  | 'fingerprint'
  | 'pin'
  | 'card'
  | 'bluetooth'
  | 'key';

export interface Product {
  id: string;
  brand: string;
  brandImageUrl?: string;
  title: string;
  title_2: string;
  price: number;
  imageUrl: string;
  isBestSeller?: boolean;
  isOnStock: boolean,
  isComingSoon?: boolean,
  features: FeatureType[];
  category?: string;
}

export interface ProductCardProps {
  products: Product[];
  onBuyNow?: (id: string) => void;
}

/* ---------------------------------
   FEATURE ICON
---------------------------------- */

export const FeatureIcon: React.FC<{ type: FeatureType }> = ({ type }) => {
  const iconClass =
    'w-5 h-5 border rounded-md m-1 p-0.5 border-blue-900 text-blue-900';

  switch (type) {
    case 'fingerprint':
      return <LuFingerprint className={iconClass} />;

    case 'pin':
      return <LuClipboardList className={iconClass} />;

    case 'card':
      return <LuCreditCard className={iconClass} />;

    case 'bluetooth':
      return <LuBluetooth className={iconClass} />;

    case 'key':
      return (
        <LuKey
          className={iconClass}
          title="Mechanical Backup Key"
        />
      );

    default:
      return null;
  }
};

/* ---------------------------------
   PRODUCT CARD
---------------------------------- */

const ProductCard: React.FC<{
  product: Product;
  onBuyNow?: (id: string) => void;
}> = ({ product, onBuyNow }) => {
  return (
    <div
      className="
        w-full
        bg-white
        border border-slate-200
        rounded-2xl
        p-1.5
        flex flex-col
        shadow-sm
        hover:shadow-lg
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* Product Image */}
      <div
        className="
          relative
          w-full
          aspect-square
          bg-[#000b2f]/10
          rounded-xl
          p-4
          flex items-center justify-center
          group
          overflow-hidden
        "
      >
        {/* Best Seller */}
        {product.isBestSeller && (
          <span
            className="
              absolute top-3 right-3
              bg-blue-500
              text-white
              text-[10px]
               font-medium
              px-2.5 py-1
              rounded-full
              shadow-sm
              z-10
            "
          >
            Best Seller
          </span>
        )}
        {product.isOnStock && (
          <span
            className="
              absolute top-3 right-3
              bg-green-400
              text-white
              text-[10px]
              font-medium
              px-2.5 py-1
              rounded-full
              shadow-sm
              z-10
            "
          >
            In Stock
          </span>
        )}

        {product.isComingSoon && (
          <span
            className="
              absolute top-3 right-3
              bg-red-500
              text-white
              text-[10px]
              font-medium
              px-2 py-1
              rounded-full
              shadow-sm
              z-10
            "
          >
            Coming Soon..
          </span>
        )}

        <img
          src={product.imageUrl}
          alt={product.title}
          className="
            w-full h-full
            object-contain
            mix-blend-multiply
            group-hover:scale-105
            transition-transform duration-300
            pointer-events-none
          "
        />
      </div>

      {/* Product Details */}
      <div className="px-2 pt-3 pb-2 flex flex-col flex-grow">

        {/* Brand */}
        <div className="h-7 flex items-center mb-1">
          {product.brandImageUrl ? (
            <img
              src={product.brandImageUrl}
              alt={product.brand}
              className="h-full max-w-[100px] object-contain"
            />
          ) : (
            <span className="text-blue-500 font-medium text-sm tracking-wide">
              {product.brand}
            </span>
          )}
        </div>

        {/* Product Name */}
        <h3
          className="
            text-slate-800
            font-extrabold
            text-base
            leading-tight
            tracking-tight
            line-clamp-2
          "
        >
          {product.title}
        </h3>

        <h2
          className="
            text-slate-700
            font-semibold
            text-sm
            leading-tight
            line-clamp-2
          "
        >
          {product.title_2}
        </h2>

        {/* Features */}
        <div className="flex flex-wrap items-center gap-0.5 mt-3">
          {product.features.map((feature, index) => (
            <FeatureIcon
              key={`${product.id}-${feature}-${index}`}
              type={feature}
            />
          ))}
        </div>

        {/* Price */}
        {/* <div className="mt-3">
          <span className="text-xs text-slate-500">Price</span>

          <div className="text-lg font-extrabold text-[#000b2f]">
            MVR {product.price.toLocaleString()}
          </div>
        </div> */}

        {/* Buy Button */}
        {onBuyNow && (
          <button
            onClick={() => onBuyNow(product.id)}
            className="
              mt-3
              w-full
              rounded-lg
              bg-[#000b2f]
              text-white
              py-2
              text-sm
              font-semibold
              hover:bg-blue-900
              transition-colors
            "
          >
            View Product
          </button>
        )}
      </div>
    </div>
  );
};

/* ---------------------------------
   MAIN PRODUCT GRID
---------------------------------- */

export const ItemCard: React.FC<ProductCardProps> = ({
  products,
  onBuyNow,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  /* Create category list automatically */
  const categories = useMemo<string[]>(() => {
    const uniqueCategories = Array.from(
      new Set(
        products
          .map((product) => product.category)
          .filter((category): category is string => Boolean(category))
      )
    );

    return ['All', ...uniqueCategories];
  }, [products]);

  /* Filter products */
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return products;
    }

    return products.filter(
      (product) => product.category === selectedCategory
    );
  }, [products, selectedCategory]);

  return (
    <div className="w-full">

      {/* ---------------------------------
          MOBILE CATEGORY BAR
      ---------------------------------- */}

      <div className="lg:hidden mb-6">
        <div
          className="
            flex items-center
            gap-2
            overflow-x-auto
            pb-2
            scrollbar-hide
          "
        >
          <div className="flex items-center mr-1 text-slate-600">
            <LuSlidersHorizontal className="w-5 h-5" />
          </div>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                whitespace-nowrap
                px-4 py-2
                rounded-full
                text-sm
                font-medium
                transition-all
                ${selectedCategory === category
                  ? 'bg-[#000b2f] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* ---------------------------------
          MAIN LAYOUT
      ---------------------------------- */}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[220px_minmax(0,1fr)]
          gap-6
          items-start
        "
      >

        {/* ---------------------------------
            LEFT CATEGORY SIDEBAR
        ---------------------------------- */}

        <aside
          className="
            hidden
            lg:block
            sticky
            top-6
            bg-amber-400
            mx-5
            my-5
          "
        >
          <div
            className="
              bg-white
              border border-slate-200
              rounded-2xl
              p-4
              shadow-sm
            "
          >

            <div className="flex items-center gap-2 mb-4">
              <LuSlidersHorizontal className="w-5 h-5 text-[#000b2f]" />

              <h2 className="font-bold text-slate-800">
                Categories
              </h2>
            </div>

            <div className="space-y-1">

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    w-full
                    text-left
                    px-3
                    py-2.5
                    rounded-lg
                    text-sm
                    font-medium
                    transition-all
                    ${selectedCategory === category
                      ? 'bg-[#000b2f] text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">

                    <span>
                      {category}
                    </span>

                    <span
                      className={`
                        text-xs
                        ${selectedCategory === category
                          ? 'text-white/70'
                          : 'text-slate-400'
                        }
                      `}
                    >
                      {category === 'All'
                        ? products.length
                        : products.filter(
                          (p) => p.category === category
                        ).length}
                    </span>

                  </div>
                </button>
              ))}

            </div>
          </div>
        </aside>

        {/* ---------------------------------
            RIGHT PRODUCT AREA
        ---------------------------------- */}

        <section className="min-w-0 mx-5 my-5">

          {/* Product Header */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-2
              mb-5
              mx-5
              
            "
          >
            <div>
              <h1 className="text-xl font-bold text-slate-900">
                {selectedCategory === 'All'
                  ? 'All Products'
                  : selectedCategory}
              </h1>

              <p className="text-sm text-slate-500">
                {filteredProducts.length} products
              </p>
            </div>
          </div>

          {/* ---------------------------------
              PRODUCT GRID
          ---------------------------------- */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-3
              2xl:grid-cols-4
              gap-6
              w-6xl
              items-center
            "
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onBuyNow={onBuyNow}
              />
            ))}
          </div>

          {/* No Products */}
          {filteredProducts.length === 0 && (
            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                py-20
                text-center
              "
            >
              <p className="text-lg font-semibold text-slate-700">
                No products found
              </p>

              <p className="text-sm text-slate-500 mt-1">
                Try selecting another category.
              </p>
            </div>
          )}

        </section>
      </div>
    </div>
  );
};