import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'facility',
  title: 'Facility',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Facility Features',
      type: 'blockContent',
    }),
  ],
})