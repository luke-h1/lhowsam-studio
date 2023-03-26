import {defineField, defineType} from 'sanity'

const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Site description',
      type: 'text',
    }),
  ],
})
export default siteSettings
