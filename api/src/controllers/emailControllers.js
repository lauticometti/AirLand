const nodemailer = require('nodemailer')
const homeURL = 'https://airland-9c55f.web.app/'

let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false, // true for 465, false for other ports
	auth: {
		user: process.env.MAIL, // generated ethereal user
		pass: process.env.MAIL_PASSWORD // generated ethereal password
	},
	tls: {
		rejectUnauthorized: false
	}
})
// send mail with defined transport object
const welcomeEmail = async (email, displayName) => {
	try {
		let info = await transporter.sendMail({
			from: `Welcome user ${process.env.MAIL}`, // sender address
			to: email, // list of receivers
			subject: 'Welcome to AirLand', // Subject line
			// text: "Hello world?", // plain text body
			html: `
			<h2> Welcome to AirLand's family ${displayName} </h2>
			<h3> We are very happy that you choose us for your future purshares </h3>
			<h4> Go to our website by clicking here ${homeURL}</h4>
			`
		})

		return info
	} catch (error) {
		throw new Error(error.message)
	}
}
const successPurchase = async (email, displayName) => {
	try {
		let info = await transporter.sendMail({
			from: `Shopping succes ${process.env.MAIL}`, // sender address
			to: email, // list of receivers
			subject: 'Purchase successfully completed', // Subject line
			// text: "Hello world?", // plain text body
			html: `
			<h2> Hello ${displayName}</h2>
			<h3> You are receiving this email because your purchase at AirLand has been successfully completed.</h3>
			<h5> Thank you for shopping with us</h5>
			`
		})
		return info
	} catch (error) {
		throw new Error(error.message)
	}
}
module.exports = {
	transporter,
	welcomeEmail,
	successPurchase
}
