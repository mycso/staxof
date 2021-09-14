const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

//cookie parser
server.express.use(cookieParser());
	
// decode the JWT so we can get the user Id on each request
server.express.use((req, res, next) => {
	const { token } = req.cookies;
	if(token) {
		const { userId } = jwt.verify(token, process.env.APP_SECRET);
		// put the userId onto the request for future requests
		req.userId = userId;
	}

	next();
});

// 2. Create a middleware that populates the user on each request

server.express.use(async (req, res, next) => {
	// if they aren't logged in, skip this
	if (!req.userId) return next();
	const user = await db.query.user(
		{ where: { id: req.userId } },
		'{ id, permissions, email, name }'
	);
	req.user = user;
	next();
});


// server.express.use(async (req, res, next) => {
//   const { vag_uid, vag_gid } = req.cookies;
//   if (vag_uid) {
//     const { userId } = jwt.verify(vag_uid, process.env.APP_SECRET);
//     req.userId = userId;
//   }
//   if (vag_gid) {
//     const { guestId } = jwt.verify(vag_gid, process.env.APP_SECRET);
//     req.guestId = guestId;
//   }
//   next();
// });

// server.express.use(async (req, res, next) => {
//   if (!req.userId && !req.guestId) return next();
//   if (req.userId) {
//     const user = await db.query.user(
//       {
//         where: { id: req.userId },
//       },
//       `{id, email, permissions, cart {id quantity item {id title price}}}`
//     );
//     req.user = user;
//   }
//   if (req.guestId) {
//     const guest = await db.query.user(
//       {
//         where: { id: req.guestId },
//       },
//       `{id permissions cart {id quantity item {id title price}}}`
//     );
//     req.guest = guest;
//   }
//   return next();
// });


//start it!
server.start(
	{
		cors: {
			credentials: true,
			origin: [ process.env.FRONTEND_URL,'*' ]
		},
	}, 
	deets => {
		console.log(`Server is now running on port http:/localhost:${deets.port}`);
	}
);
