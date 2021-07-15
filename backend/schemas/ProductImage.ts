import 'dotenv/config';
import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';

export const cloudinary = {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: 'stax',
}

export const ProductImage = list({
    fields: {
        image: cloudinaryImage({
            cloudinary,
            label: 'Source'
        }),
        altText: text(),
        product: relationship({ ref: 'Product.photo' }),
        product2: relationship({ ref: 'Product.photo2' }),
        product3: relationship({ ref: 'Product.photo3' }),
        product4: relationship({ ref: 'Product.photo4' }),
    },
    ui: {
        listView: {
            initialColumns: ['image', 'altText', 'product'

                // 'product2', 'product3', 'product4'
            ]
        }
    }
});