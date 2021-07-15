import 'dotenv/config';
import { integer, relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const ProductReview = list({
    fields: {
        reviewTitle: text({ isRequired: true }),
        stars: integer({ isRequired: true }),
        comment: text({
            ui: {
                displayMode: 'textarea',
            },
        }),
        review: relationship({ ref: 'Product.review' }),
    },
    ui: {
        listView: {
            initialColumns: ['reviewTitle', 'comment', 'review', 'stars']
        }
    }
});