const { getShoppingCart } = require('./shoppingCartControllers')
const mercadopago = require('mercadopago')

mercadopago.configure({
	access_token: process.env.MERCADOPAGO_ACCESS_TOKEN
})

const createPreference = async (userId, form, totalPrice) => {
	let order

	try {
		order = await getShoppingCart(userId)
	} catch (error) {
		throw new Error(error.message)
	}

	const preference = {
		items: order.map(zapatilla => ({
			title: zapatilla.name,
			unit_price: Number(zapatilla.unityPrice),
			quantity: Number(zapatilla.quantity)
		})),

		shipments: {
			receiver_address: {
				zip_code: form.zipCode,
				street_name: form.streetName,
				street_number: Number(form.streetNumber),
				floor: '',
				apartment: '',
				city_name: form.cityName,
				state_name: form.stateName,
				country_name: form.countryName
			}
		},

		total_amount: totalPrice,

		back_urls: {
			success: `${process.env.LOCALHOST_URL}/payment-success`,
			failure: ``,
			pending: ''
		},
		auto_return: 'approved'
	}

	const response = mercadopago.preferences
		.create(preference)
		.then(res => {
			return {
				isApproved: res.body.auto_return === 'approved',
				paymentId: res.body.id,
				init_point: res.body.init_point,
				dateCreated: new Date(res.body.date_created).toLocaleDateString(),
				shipments: res.body.shipments.receiver_address,
				totalAmount: totalPrice,
				orderCode: Math.floor(Math.random() * 10000000000)
			}
		})
		.catch(error => {
			throw new Error(error)
		})

	return response
}

module.exports = {
	createPreference
}
