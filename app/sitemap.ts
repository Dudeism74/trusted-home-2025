import { MetadataRoute } from 'next'
import { client } from '../sanity/client'

const POSTS_QUERY = `*[_type == "post"] { slug, publishedAt }`

interface SitemapPost {
    slug: { current: string }
    publishedAt: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://trustedhomeessentials.com'

    // FIX: Added "|| []" to prevent crash if fetch returns null
    const posts = (await client.fetch(POSTS_QUERY)) || []

    const postUrls = posts.map((post: SitemapPost) => ({
        url: `${baseUrl}/${post.slug.current}`,
        lastModified: post.publishedAt || new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
        {
            url: `${baseUrl}/articles`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        ...postUrls,
    ]
}