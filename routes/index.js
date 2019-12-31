// Full Documentation - https://docs.turbo360.co
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()


router.get('/', (req, res) => {

	const data = {
	title: 'Colucci'
	}

	res.render('index', data)
});

router.get('/shop', (req, res) => {

	const data = {
	title: 'Sklep'
	}

	res.render('shop-page', data)
});

router.get('/shopping-cart', (req, res) => {

	const data = {
	title: 'Koszyk'
	}

	res.render('shopping-cart', data)
});

router.get('/product-detail', (req, res) => {

	const data = {
	title: 'Szczegóły Produktu'
	}

	res.render('product-detail', data)
});

router.get('/o-nas', (req, res) => {

	const data = {
	title: 'O nas'
	}

	res.render('o-nas', data)
});
module.exports = router
