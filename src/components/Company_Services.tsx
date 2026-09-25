import React from 'react';
import { FiTruck, FiCreditCard } from 'react-icons/fi';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { LuMessageSquareText } from 'react-icons/lu';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Company_Services = () => {
  const features: FeatureItem[] = [
    {
      icon: <FiTruck className='w-8 h-8' strokeWidth={1.5} />,
      title: 'Free Shipping',
      description: 'Hassle Free Delivery',
    },
    {
      icon: <FiCreditCard className='w-8 h-8' strokeWidth={1.5} />,
      title: 'Quick Payment',
      description: '100% Secure Payment',
    },
    {
      icon: <LuMessageSquareText className='w-8 h-8' strokeWidth={1.5} />,
      title: '24/7 Support',
      description: 'Ready For You',
    },
    {
      icon: <IoShieldCheckmarkOutline className='w-8 h-8' strokeWidth={1.5} />,
      title: '1 Year Free Warranty',
      description: 'For your peace of mind',
    },
  ];

  return (
    <div className='w-full bg-[#000b2f] py-8 px-6 text-white'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4'>
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div className='flex items-center space-x-4 min-w-60 bg-white/40 px-5 py-6 rounded-md'>
              <div className='shrink-0 flex items-center justify-center  rounded-full'>
                {feature.icon}
              </div>
              <div className='flex flex-col justify-center'>
                <h3 className='font-bold leading-tight text-amber-400'>
                  {feature.title}
                </h3>
                <p className='text-sm mt-1 font-medium tracking-wide '>
                  {feature.description}
                </p>
              </div>
            </div>

            {/* White vertical divider line between services */}
            {index < features.length - 1 && (
              <div className='w-0.5 h-8 bg-white shrink-0 hidden lg:block self-center' />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Company_Services;
