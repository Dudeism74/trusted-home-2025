import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'quickAnswer',
      title: 'GEO Quick Answer (TL;DR)',
      description: 'The 40-50 word direct answer for AI snippets. (Rule #3)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(280),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: [
          { title: 'Easy', value: 'Easy' },
          { title: 'Intermediate', value: 'Intermediate' },
          { title: 'Advanced', value: 'Advanced' },
        ],
      },
    }),
    defineField({
      name: 'estimatedTime',
      title: 'Estimated Time',
      type: 'string',
    }),
    defineField({
      name: 'problemIntro',
      title: 'Problem Intro',
      type: 'text',
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
    defineField({
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'url', type: 'url', title: 'URL' },
            { name: 'affiliateTag', type: 'string', title: 'Affiliate Tag' },
            { name: 'notes', type: 'text', title: 'Notes' },
          ],
        },
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', type: 'string', title: 'Question' },
            { name: 'answer', type: 'text', title: 'Answer' },
          ],
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' }
      ]
    }),
    // --- NEW FIELD ADDED BELOW ---
    defineField({
      name: 'schemaCode',
      title: 'Schema Markup (JSON-LD)',
      type: 'text',
      description: 'Auto-generated JSON-LD for SEO. Do not edit unless you know what you are doing.',
      readOnly: true, 
      rows: 10
    }),
  ],
})