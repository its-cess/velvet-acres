import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'horse',
  title: 'Horse',
  type: 'document',
  fields: [
    defineField({
      name: 'registeredName',
      title: 'Registered Name',
      type: 'string',
    }),
    defineField({
      name: 'barnName',
      title: 'Barn Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'birthday',
      title: 'Birthday',
      type: 'date',
    }),
    defineField({
      name: 'sex',
      title: 'Sex',
      type: 'string',
      initialValue: 'mare',
      options: {
        list: [
          {title: 'Mare', value: 'Mare'},
          {title: 'Gelding', value: 'Gelding'},
          {title: 'Stallion', value: 'Stallion'},
        ],
      },
    }),
    defineField({
      name: 'breed',
      title: 'Breed',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
  ],
})
