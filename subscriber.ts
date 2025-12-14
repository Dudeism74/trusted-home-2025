import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'subscriber',
  title: 'Subscribers',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'source',
      title: 'Signup Source',
      type: 'string',
      initialValue: 'maintenance-checklist',
    }),
    defineField({
      name: 'signupDate',
      title: 'Signup Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
