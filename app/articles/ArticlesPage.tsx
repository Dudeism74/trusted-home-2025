'use client';

import { useState } from 'react';
import PostCard from '../../components/PostCard';

interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    quickAnswer?: string;
    authorName?: string;
    categories?: string[];
}

interface Category {
    _id: string;
    title: string;
}

interface ArticlesPageProps {
    posts: Post[];
    categories: Category[];
}

export default function ArticlesPage({ posts, categories }: ArticlesPageProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredPosts = selectedCategory
        ? posts.filter(post => post.categories?.includes(selectedCategory))
        : posts;

    return (
        <main className="min-h-screen font-sans bg-slate-50">
            <section className="bg-white border-b border-gray-200 py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                        All Guides
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Browse our complete collection of expert home maintenance guides.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-12">
                {/* Category Filter */}
                {categories.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === null
                                    ? 'bg-[#1A3C2F] text-white shadow-md'
                                    : 'bg-white text-slate-600 border border-gray-200 hover:border-[#1A3C2F] hover:text-[#1A3C2F]'
                                }`}
                        >
                            All
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category._id}
                                onClick={() => setSelectedCategory(category.title)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === category.title
                                        ? 'bg-[#1A3C2F] text-white shadow-md'
                                        : 'bg-white text-slate-600 border border-gray-200 hover:border-[#1A3C2F] hover:text-[#1A3C2F]'
                                    }`}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>
                )}

                {/* Posts Grid */}
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <PostCard key={post._id} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 border-dashed">
                        <p className="text-xl text-slate-500 font-medium">No articles found for this category.</p>
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className="mt-4 text-[#1A3C2F] font-bold hover:underline"
                        >
                            View all guides
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}
