export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.ico","images/arena.svg","images/backdrop.jpg","images/barn.svg","images/dressage.svg","images/equestrian-center.jpg","images/horseshoe.png","images/pasture.svg","images/tack.svg","images/velvet-acres.svg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.51b1e3b9.js","imports":["_app/immutable/entry/start.51b1e3b9.js","_app/immutable/chunks/index.321563f4.js","_app/immutable/chunks/singletons.a845fb68.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.33fdaeb6.js","imports":["_app/immutable/entry/app.33fdaeb6.js","_app/immutable/chunks/index.321563f4.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/facility",
				pattern: /^\/facility\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/horses",
				pattern: /^\/horses\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
