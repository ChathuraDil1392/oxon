import React from 'react';
import customer_1 from '../assets/comment_1.jpg';
import customer_2 from '../assets/comments_2.webp';
import lock from '../assets/lock.jpg';
import lock_2 from '../assets/2.jpg';
import lock_3 from '../assets/1.jpg';

// Define the structure for a single review item
interface Review {
    id: number;
    name: string;
    username: string;
    avatarUrl: string;
    productImageUrl: string;
    productAltText: string;
    reviewText: string;
}

// Mock data matching the layout in the image
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
        avatarUrl: customer_1,
        productImageUrl: lock_3,
        productAltText: 'Black over-ear headphones',
        reviewText: 'This product is amazing! It performs exceptionally well, is very reliable, and user-friendly. I highly recommend it to anyone looking for a high-quality solution.',
    },
];

export const CustomerReviews: React.FC = () => {
    return (
        <section className="bg-white py-16 px-6 max-w-7xl mx-auto font-sans">
            {/* Header Section */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl mb-4">
                    Customer Reviews
                </h2>
                <p className="text-base text-gray-500 max-w-3xl">
                    Explore the experiences of our clients with our work, showing our dedication to delivering exceptional results.
                </p>
            </div>

            {/* Grid Layout for Reviews */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviewsData.map((review) => (
                    <div
                        key={review.id}
                        className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm flex flex-col justify-between"
                    >
                        <div>
                            {/* User Profile Info */}
                            <div className="flex items-center gap-3 mb-5">
                                <img
                                    src={review.avatarUrl}
                                    alt={review.name}
                                    className="w-10 h-10 rounded-full object-cover bg-gray-100 border-[0.5px] p-1 border-blue-900"
                                />
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 leading-none mb-1">
                                        {review.name}
                                    </h3>

                                    {/* 5-Star Row */}


                                    <p className="text-xs text-gray-400 leading-none">
                                        {review.username}
                                    </p>

                                    <div className="flex items-center gap-0.5 mb-1 mt-1">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
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

                            {/* Product Image Container */}
                            <div className="bg-gray-50/50 rounded-xl p-6 mb-5 flex items-center justify-center h-48 aspect-video border border-gray-100 hover:scale-105 transition-transform duration-200 ease-in-out">
                                <img
                                    src={review.productImageUrl}
                                    alt={review.productAltText}
                                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                                />
                            </div>
                        </div>

                        {/* Review Content */}
                        <p className="text-sm text-gray-600 leading-relaxed mt-auto">
                            {review.reviewText}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomerReviews;
