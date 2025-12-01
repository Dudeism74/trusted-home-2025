import Link from "next/link";

export interface PostCardProps {
    post: {
        _id: string;
        title: string;
        slug: { current: string };
        publishedAt: string;
        quickAnswer?: string;
        authorName?: string;
        categories?: string[];
    };
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <article
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
        >
            <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-bold text-[#1A3C2F] uppercase tracking-wider">
                        {post.authorName || 'Trusted Expert'}
                    </p>
                    {post.categories && post.categories.length > 0 && (
                        <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                            {post.categories[0]}
                        </span>
                    )}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-[#1A3C2F] transition-colors">
                    <Link href={`/${post.slug.current}`} className="hover:underline decoration-2 decoration-[#1A3C2F]/20">
                        {post.title}
                    </Link>
                </h3>
            </div>

            {post.quickAnswer && (
                <div className="bg-slate-50 p-5 rounded-xl mb-8 border border-slate-100 flex-grow">
                    <p className="text-xs text-slate-500 font-bold uppercase mb-2 tracking-wide">
                        Quick Answer
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed line-clamp-4 font-medium">
                        {post.quickAnswer}
                    </p>
                </div>
            )}

            <Link
                href={`/${post.slug.current}`}
                className="inline-flex items-center justify-center w-full text-sm font-bold text-white bg-[#1A3C2F] hover:bg-[#142f25] py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg mt-auto"
            >
                Read Full Guide
            </Link>
        </article>
    );
}
