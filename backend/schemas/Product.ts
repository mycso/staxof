import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Product = list({
    ui: {
        listView: {
            initialColumns: ['name', 'description', 'author', 'inStock', 'photo', 'price']
        }
    },

    // TODO
    // access: 
    fields: {
        name: text({ isRequired: true }),
        ageRange: text({ isRequired: true }),
        author: text({ isRequired: true }),
        inStock: text({ isRequired: true }),
        description: text({
            ui: {
                displayMode: 'textarea',
            },
        }),
        photo: relationship({
            ref: 'ProductImage.product',
            ui: {
                displayMode: 'cards',
                cardFields: ['image', 'altText'],
                inlineCreate: { fields: ['image', 'altText'] },
                inlineEdit: { fields: ['image', 'altText'] },
            }
        }),
        photo2: relationship({
            ref: 'ProductImage.product2',
            ui: {
                displayMode: 'cards',
                cardFields: ['image', 'altText'],
                inlineCreate: { fields: ['image', 'altText'] },
                inlineEdit: { fields: ['image', 'altText'] },
            }
        }),
        photo3: relationship({
            ref: 'ProductImage.product3',
            ui: {
                displayMode: 'cards',
                cardFields: ['image', 'altText'],
                inlineCreate: { fields: ['image', 'altText'] },
                inlineEdit: { fields: ['image', 'altText'] },
            }
        }),
        photo4: relationship({
            ref: 'ProductImage.product4',
            ui: {
                displayMode: 'cards',
                cardFields: ['image', 'altText'],
                inlineCreate: { fields: ['image', 'altText'] },
                inlineEdit: { fields: ['image', 'altText'] },
            }
        }),
        review: relationship({
            ref: 'ProductReview.review',
            ui: {
                displayMode: 'cards',
                cardFields: ['reviewTitle', 'stars', 'comment', 'review'],
                inlineCreate: { fields: ['reviewTitle', 'stars', 'comment', 'review'] },
                inlineEdit: { fields: ['reviewTitle', 'stars', 'comment', 'review'] },
            }
        }),
        status: select({
            options: [
                { label: 'Draft', value: 'DRAFT' },
                { label: 'Available', value: 'AVAILABLE' },
                { label: 'Unavailable', value: 'UNAVAILABLE' },
            ],
            defaultValue: 'DRAFT',
            ui: {
                displayMode: 'segmented-control',
                createView: { fieldMode: 'hidden' },
            }
        }),
        price: integer(),
        // TODO: Photo
    },
});