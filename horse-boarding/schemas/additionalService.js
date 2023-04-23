import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'additionalService',
  title: 'Additional Service',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description of Service',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
  ],
})