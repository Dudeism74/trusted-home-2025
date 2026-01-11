import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import author from './author'
import category from './category'
import subscriber from './subscriber' // <--- Added this import

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, subscriber], // <--- Added subscriber here
}