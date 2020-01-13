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

router.get('/ekspresy', (req, res) => {

	const data = {
	title: 'Ekspresy do kawy'
	}

	res.render('ekspresy', data)
});



router.get('/o-nas', (req, res) => {

	const data = {
	title: 'O nas'
	}

	res.render('o-nas', data)
});

router.get('/kontakt', (req, res) => {

	const data = {
	title: 'Kontakt'
	}

	res.render('kontakt', data)
});

router.get('/automaty', (req, res) => {

	const data = {
	title: 'Automaty'
	}

	res.render('automaty', data)
});

router.get('/dystrybutory', (req, res) => {

	const data = {
	title: 'Dystrybutory wody'
	}

	res.render('dystrybutory', data)
});

router.get('/pd-xxoc', (req, res) => {

	const data = {
	title: 'XX OC'
	}

	res.render('pd-xxoc', data)
});

router.get('/pd-ec', (req, res) => {

	const data = {
	title: 'EC'
	}

	res.render('pd-ec', data)
});

router.get('/pd-xsgrande', (req, res) => {

	const data = {
	title: 'XS GRANDE'
	}

	res.render('pd-xsgrande', data)
});

router.get('/pd-larheaec', (req, res) => {

	const data = {
	title: 'LARHEA EC'
	}

	res.render('pd-larheaec', data)
});

router.get('/pd-larheagrande', (req, res) => {

	const data = {
	title: 'LARHEA GRANDE'
	}

	res.render('pd-larheagrande', data)
});

router.get('/pd-kalea', (req, res) => {

	const data = {
	title: 'KALEA'
	}

	res.render('pd-kalea', data)
});

router.get('/pd-kreatouch', (req, res) => {

	const data = {
	title: 'KREA TOUCH'
	}

	res.render('pd-kreatouch', data)
});

router.get('/pd-koroprime', (req, res) => {

	const data = {
	title: 'KORO PRIME'
	}

	res.render('pd-koroprime', data)
});

router.get('/pd-korintoprime', (req, res) => {

	const data = {
	title: 'KORINTO PRIME'
	}

	res.render('pd-korintoprime', data)
});

router.get('/pd-luce', (req, res) => {

	const data = {
	title: 'LUCE'
	}

	res.render('pd-luce', data)
});

router.get('/pd-lucex2', (req, res) => {

	const data = {
	title: 'LUCE X2'
	}

	res.render('pd-lucex2', data)
});

router.get('/pd-lucezero', (req, res) => {

	const data = {
	title: 'LUCE ZERO'
	}

	res.render('pd-lucezero', data)
});

router.get('/pd-lucesnack', (req, res) => {

	const data = {
	title: 'LUCE SNACK'
	}

	res.render('pd-lucesnack', data)
});


router.get('/pd-lucezerosnack', (req, res) => {

	const data = {
	title: 'LUCE ZERO SNACK'
	}

	res.render('pd-lucezerosnack', data)
});

router.get('/pd-gsnack', (req, res) => {

	const data = {
	title: 'G-SNACK'
	}

	res.render('pd-gsnack', data)
});

router.get('/pd-whp850', (req, res) => {

	const data = {
	title: 'WHP 850'
	}

	res.render('pd-whp850', data)
});

router.get('/pd-whp300', (req, res) => {

	const data = {
	title: 'WHP 300'
	}

	res.render('pd-whp300', data)
});

router.get('/pd-wfp2200', (req, res) => {

	const data = {
	title: 'WFP 2200'
	}

	res.render('pd-wfp2200', data)
});

router.get('/produkty', (req, res) => {

	const data = {
	title: 'PRODUKTY'
	}

	res.render('produkty', data)
});

module.exports = router
