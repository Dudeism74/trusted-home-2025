import Link from "next/link";

interface BreadcrumbsProps {
    items: {
        label: string;
        href: string;
    }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="flex items-center text-sm text-slate-500 mb-6 overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
            <Link href="/" className="hover:text-[#1A3C2F] transition-colors font-medium">
                Home
            </Link>
            {items.map((item, index) => (
                <div key={item.href} className="flex items-center">
                    <span className="mx-2 text-slate-300">/</span>
                    {index === items.length - 1 ? (
                        <span className="text-slate-900 font-semibold">{item.label}</span>
                    ) : (
                        <Link
                            href={item.href}
                            className="hover:text-[#1A3C2F] transition-colors font-medium"
                        >
                            {item.label}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    );
}
