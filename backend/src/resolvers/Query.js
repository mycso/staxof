const { forwardTo } = require ('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
	items: forwardTo('db'),
	item: forwardTo('db'),
	itemsConnection: forwardTo('db'),

	ratings: forwardTo('db'),
	rating: forwardTo('db'),
	ratingsConnection: forwardTo('db'),

	async me(parent, args, ctx, info) {
		let { userId, guestId } = ctx.request;

	    if (!userId && !guestId) {
	      return null;
	    }

	    if (!userId && guestId) {
	      userId = guestId;
	    }
			
		return ctx.db.query.user(
		    {
		        where: { id: userId },
		    },
		    info
	    );
	   
  	},

	async users(parent, args, ctx, info){
		// 1. Check if they are logged in 
		if(!ctx.request.userId) {
			throw new Error('You must be logged in!');
		}
		// 2. Check if the user has the permissions to query all the users
		hasPermission(ctx.request.user, ['ADMIN', ' PERMISSIONUPDATE']);
		// 2. if they do, query all the users!
		return ctx.db.query.users({}, info)
	},

	// async guests(parent, args, ctx, info){
	// 	// 1. Check if they are logged in 
	// 	if(!ctx.request.guestId) {
	// 		throw new Error('You must be logged in!');
	// 	}
		
	// 	// 2. if they do, query all the users!
	// 	return ctx.db.query.guests({}, info)
	// },

	async order(parent, args, ctx, info){
		// 1. Make Sure they are logged in
		if(!ctx.request.userId) {
			// const { guestId } = ctx.request;
			throw new Error('You must be logged in!');
		}
		// 2. Query the current order
		const order = await ctx.db.query.order({
			where: { id: args.id },
		}, info);
		// 3. Check if they have the permissions to see this order
		const ownsOrder = order.user.id === ctx.request.userId;
		// const ownsOrder2 = order.guest.id === ctx.request.guestId;

		const hasPermissionToSeeOrder = ctx.request.user.permissions.includes('ADMIN');
		if(!ownsOrder || !hasPermission) {
			throw new Error('You cant see this page.');
		}
		// 4. Return the order
		return order;
	},

	async orders(parent, args, ctx, info){
		const { userId } = ctx.request;
		if(!userId) {
			// const { guestId } = ctx.request;
			throw new Error('You must be logged in!');
		}
		return ctx.db.query.orders({
			where: {
				user: { id: userId },
				// guest: { id: guestId }
			}
		}, info)
	},

};

module.exports = Query;