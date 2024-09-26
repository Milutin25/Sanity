import {defineField, defineType} from 'sanity'

export const blogType = defineType({
    name: 'blog',
    title: 'Blog', 
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string'
        }),
        defineField({
            name: 'id',
            type: 'number',
        }),
        defineField({
            name: 'image',
            type: 'image'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {source: 'name'},
            validation: (rule) => rule
            .required()
            .error(`Required to generate a page on the website`),
            hidden: ({document}) => !document?.name
        }), 
        defineField({
            name: 'date',
            type: 'datetime'
        }),
        defineField({
            name: 'text',
            type: 'array',
            of: [{type: 'block'}]
        }),
        defineField({
            name: 'tags',
            type: 'array', 
            of: [{type: 'string'}]
        })
    ]
})