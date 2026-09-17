import React, { useEffect, useState } from 'react';
import lock_3 from '../assets/1.jpg';
import lock_2 from '../assets/2.jpg';
import lock from '../assets/lock.jpg';
import customer_1 from '../assets/people_1.jpg';
import customer_2 from '../assets/people_2.avif';
import customer_3 from '../assets/people_3.webp';

interface Review {
    id: number;
    name: string;
    username: string;
    avatarUrl: string;
    productImageUrl: string;
    productAltText: string;
    reviewText: string;
}

const reviewsData: Review[] = [
    {
        id: 1,
        name: 'Ayesha Shah',
        username: '@ayesha__12',
        avatarUrl: customer_1,
        productImageUrl: lock,
        productAltText: 'Beige quilted handbag with gold chain',
        reviewText: 'This product has exceeded my expectations in every way. The quality is outstanding, and it has made my daily routine so much easier and more efficient.',
    },
    {
        id: 2,
        name: 'Jignesh Patel',
        username: '@_jignesh_',
        avatarUrl: customer_2,
        productImageUrl: lock_2,
        productAltText: 'Black smartwatch',
        reviewText: "I've been using this product for a while now, and it has made a significant difference in my daily routine. It's efficient, durable, and easy to use.",
    },
    {
        id: 3,
        name: 'Sanjay Mehta',
        username: '@sanjay06',
        avatarUrl: customer_3,
        productImageUrl: lock_3,
        productAltText: 'Black over-ear headphones',
        reviewText: 'This product is amazing! It performs exceptionally well, is very reliable, and user-friendly. I highly recommend it to anyone looking for a high-quality solution.',
    },
    {
        id: 4,
        name: 'Jignesh Patel',
        username: '@_jignesh_',
        avatarUrl: customer_2,
        productImageUrl: lock_2,
        productAltText: 'Black smartwatch',
        reviewText: "I've been using this product for a while now, and it has made a significant difference in my daily routine. It's efficient, durable, and easy to use.",
    },
];

export const CustomerReviews: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>(reviewsData);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, [reviews]); // Re-run effect when the array order shifts to preserve timing

    function handleNextSlide() {
        if (isTransitioning) return;

        setIsTransitioning(true);

        setTimeout(() => {
            setReviews((prevReviews) => {
                const [firstItem, ...restItems] = prevReviews;
                return [...restItems, firstItem];
            });
            setIsTransitioning(false);
        }, 500);
    }

    function handlePrevSlide() {
        if (isTransitioning) return;

        setIsTransitioning(true);

        setReviews((prevReviews) => {
            const lastItem = prevReviews[prevReviews.length - 1];
            const restItems = prevReviews.slice(0, -1);
            return [lastItem, ...restItems];
        });

        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    }
    return (
        <div className='bg-slate-50'>
            <section className="bg-slate-50 pt-12 pb-10 px-6 max-w-7xl mx-auto font-sans overflow-hidden">
                {/* Split Screen Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Grid 1: Left Text Block */}
                    <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-full">
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl mb-4">
                            Customer Reviews
                        </h2>
                        <p className="text-base text-gray-500 max-w-sm">
                            Explore the experiences of our clients with our work, showing our dedication to delivering exceptional results.
                        </p>
                    </div>

                    {/* Grid 2: Carousel Container */}
                    <div className="lg:col-span-8 w-full overflow-hidden relative">
                        <div
                            // 2. CSS-driven slide movement: shifts exactly one card width + gap leftward
                            className={`flex flex-row gap-8 pb-4 items-stretch select-none ${isTransitioning ? 'transition-transform duration-500 ease-in-out -translate-x-86' : 'transition-none'
                                }`}
                            style={{ width: `${reviews.length * 352}px` }}
                        >
                            {reviews.map((review) => (
                                <div
                                    key={review.id}
                                    // w-[320px] + gap-6 (24px) = exactly 344px total movement per card
                                    className="w-[320px] shrink-0 border border-white rounded-2xl p-6 bg-white shadow-sm flex flex-col justify-between"
                                >
                                    <div>
                                        {/* User Profile Info */}
                                        <div className="flex items-center gap-3 mb-5">
                                            <img
                                                src={review.avatarUrl}
                                                alt={review.name}
                                                className="w-10 h-10 rounded-full object-cover bg-gray-100 border-[0.5px] p-0.5 border-blue-900"
                                            />
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-900 leading-none mb-1">
                                                    {review.name}
                                                </h3>
                                                <p className="text-xs text-gray-400 leading-none mb-1">
                                                    {review.username}
                                                </p>
                                                <div className="flex items-center gap-0.5 mt-1">
                                                    {[...Array(5)].map((_, starIndex) => (
                                                        <svg
                                                            key={starIndex}
                                                            className="w-3.5 h-3.5 text-amber-400 fill-current"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://w3.org"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Uniform Product Image Container */}
                                        <div className="rounded-xl mb-5 flex items-center justify-center h-48 w-full bg-white p-4">
                                            <img
                                                src={review.productImageUrl}
                                                alt={review.productAltText}
                                                className="h-full w-full object-contain mix-blend-multiply transition-transform duration-200 hover:scale-105"
                                            />
                                        </div>
                                    </div>

                                    {/* Structural text box spacing */}
                                    <div className="mt-auto pt-2 border-t border-blue-900/50">
                                        <p className="text-sm text-gray-600 leading-relaxed min-h-18 line-clamp-3">
                                            {review.reviewText}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Optional: Add your original control layout structure here mapped to manual functions */}
                        <div className="flex gap-5 mt-4 justify-center items-center mb-1">
                            <button
                                onClick={handlePrevSlide}
                                className=" hidden w-10 h-10  items-center justify-center rounded-full  border-blue-900 text-blue-900 bg-white shadow-sm hover:bg-blue-900 hover:text-white active:scale-95 transition-all"
                                aria-label="Previous review"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNextSlide}
                                className="w-10 h-10 hidden items-center justify-center rounded-full  border-blue-900 bg-white text-blue-900 shadow-sm hover:bg-blue-900 hover:text-white active:scale-95 transition-all"
                                aria-label="Next review"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default CustomerReviews;
