import React, { useState } from 'react';
import cctv from '../assets/cctv_p.webp'
import automation from '../assets/automation.jpg'
import access from '../assets/access_control_2.jpg'
import acService from '../assets/acservices.jpg'
import acservice_3 from '../assets/acservice_3.jpg'

// Define structures for our type safety
interface PostCard {
    id: number;
    title: string;
    date: string;
    commentsCount: number;
    description: string;
    category: 'Automation' | 'Access Control' | 'Surveillance & Monitoring' | 'AC Services';
    imagePlaceholderColor: string;
    customOverlayText?: string;
    hashTag?: string;
    imageurl: string;
}

const CATEGORIES = ['All', 'Automation', 'Access Control', 'Surveillance & Monitoring', 'AC Services'] as const;

export const ProjectCard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<typeof CATEGORIES[number]>('All');

    // Seed mock data mimicking the cards in the layout image
    const postItems: PostCard[] = [
        {
            id: 1,
            title: 'We want to rule the world',
            date: '10 September 2026',
            commentsCount: 12,
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.',
            category: 'Automation',
            imagePlaceholderColor: 'bg-zinc-200',
            customOverlayText: '⭐ NEW YEAR',
            imageurl: automation
        },
        {
            id: 2,
            title: 'Create your own playlist',
            date: '26 August 2026',
            commentsCount: 0,
            description: 'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante.',
            category: 'Access Control',
            imagePlaceholderColor: 'bg-neutral-800',
            customOverlayText: 'VIEW POST',
            imageurl: access
        },
        {
            id: 3,
            title: 'Your online buddie',
            date: '30 December 2013',
            commentsCount: 23,
            description: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.',
            category: 'Surveillance & Monitoring',
            imagePlaceholderColor: 'bg-sky-900',
            customOverlayText: '82° ☀️',
            imageurl: cctv
        },
        {
            id: 4,
            title: 'A man with a true style',
            date: '5 January 2014',
            commentsCount: 111,
            description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.',
            category: 'AC Services',
            imagePlaceholderColor: 'bg-indigo-900',
            hashTag: 'Most Recent Project',
            imageurl: acService
        },
        {
            id: 5,
            title: "Here's a quick breakdown",
            date: '14 January 2014',
            commentsCount: 94,
            description: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
            category: 'Access Control',
            imagePlaceholderColor: 'bg-yellow-400',
            customOverlayText: '09:30 AM',
            imageurl: cctv
        },
        {
            id: 6,
            title: 'We believe in leaders',
            date: '8 January 2014',
            commentsCount: 1,
            description: 'Voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.',
            category: 'AC Services',
            imagePlaceholderColor: 'bg-amber-500',
            customOverlayText: '👤 Profile',
            imageurl: acservice_3
        }
    ];

    // Logic to filter the grid content based on selection
    const filteredPosts = activeTab === 'All'
        ? postItems
        : postItems.filter(post => post.category === activeTab);

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8 bg-white font-sans text-neutral-600">

            {/* Dynamic Tab Filter Bar */}
            <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-blue-700 pb-8">
                {CATEGORIES.map((category) => {
                    const isActive = activeTab === category;
                    return (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-4 py-2 text-sm rounded font-medium transition-all duration-200 ${isActive
                                ? 'bg-blue-900 text-white shadow-sm'
                                : 'bg-neutral-50 text-neutral-500 hover:bg-neutral-100 border border-neutral-200'
                                }`}
                        >
                            {category}
                            <span className={`ml-1 text-xs opacity-75`}>
                                ({category === 'All' ? postItems.length : postItems.filter(p => p.category === category).length})
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Grid Canvas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                {filteredPosts.map((post) => (
                    <article key={post.id} className="group flex flex-col space-y-4">

                        {/* Aspect Ratio Container for Thumbnails */}
                        <div className="relative w-full aspect-16/10 bg-neutral-100 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer shadow-sm group-hover:shadow-md transition-all duration-300">
                            <img
                                src={post.imageurl}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Top-left Badge Indicator */}
                            {post.hashTag && (
                                <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                                    {post.hashTag}
                                </span>
                            )}
                        </div>

                        {/* Text Content Block */}
                        <div className="flex flex-col space-y-2">
                            <span className="text-xs font-bold text-blue-500 tracking-wide uppercase">
                                {post.category}
                            </span>

                            <h3 className="text-lg font-semibold text-neutral-800 hover:text-blue-900 cursor-pointer transition-colors leading-tight">
                                {post.title}
                            </h3>

                            <span className="text-xs text-neutral-400 font-medium">
                                {post.date}
                            </span>

                            <p className="text-sm text-neutral-500 leading-relaxed line-clamp-3 pt-1">
                                {post.description}
                            </p>
                        </div>

                    </article>
                ))}
            </div>

        </div>
    );
};

export default ProjectCard;
