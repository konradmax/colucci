// Full Documentation - https://docs.turbo360.co
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()


router.get('/', (req, res) => {

	const data = {
	greeting: 'Colucci'
	}

	res.render('index', data)
});

router.get('/shop', (req, res) => {

	const data = {
	greeting: 'Colucci'
	}

	res.render('shop-page', data)
});

module.exports = router
