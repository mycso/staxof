import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';
import { Product } from './schemas/Product';
import { User } from './schemas/User';
import { ProductImage } from './schemas/ProductImage';
import { ProductReview } from './schemas/ProductReview';
import { CartItem } from './schemas/CartItem';
import 'dotenv/config';
import { insertSeedData } from './seed-data';
import { sendPasswordResetEmail } from './lib/mail';
import { extendGraphqlSchema } from './mutations';

const databaseURL =
    process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360,
    secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    protectIdentities: false,
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
        //TODO: Add in initial notes here
    },
    passwordResetLink: {
        async sendToken(args) {
            // send the email
            await sendPasswordResetEmail(args.token, args.identity);
        },
    },
});

export default withAuth(
    config({
        // @ts-ignore
        server: {
            cors: {
                origin: [process.env.FRONTEND_URL],
                credentials: true,
            },
        },
        db: {
            adapter: 'mongoose',
            url: databaseURL,
            async onConnect(keystone) {
                console.log('Connected to the Database!');
                if (process.argv.includes('--seed-data')) {
                    await insertSeedData(keystone);
                }
            },
        },
        lists: createSchema({
            //Schema items go in here
            User,
            Product,
            ProductImage,
            ProductReview,
            CartItem,
        }),
        extendGraphqlSchema: extendGraphqlSchema,
        ui: {
            // Show the ui only for people who pass this test.
            isAccessAllowed: ({ session }) => {
                // console.log(session);
                return !!session?.data;
            },
        },
        session: withItemData(statelessSessions(sessionConfig), {
            // Graph ql query
            User: `id name email`

        })
    })
);