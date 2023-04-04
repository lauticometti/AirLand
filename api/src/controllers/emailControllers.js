const nodemailer = require('nodemailer')
const homeURL = 'https://airland-9c55f.web.app/'

let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true, // true for 465, false for other ports
	auth: {
		user: process.env.MAIL, // generated ethereal user
		pass: process.env.MAIL_PASSWORD // generated ethereal password
	}
})

// send mail with defined transport object
const welcomeEmail = async () => {
	try {
		await transporter.sendMail({
			from: `Welcome user ${process.env.MAIL}`, // sender address
			to: user.email, // list of receivers
			subject: 'Welcome to AirLand', // Subject line
			// text: "Hello world?", // plain text body
			html: `
			<h2> Welcome to AirLand's family ${user.displayName} </h2>
			<h3> We are very happy that you choose us for your future purshares </h3>
			<h4> Go to our website by clicking here ${homeURL}$ </h4>
			`
		})
	} catch (error) {
		throw new Error(error.message)
	}
}
const successPurchase = async () => {
	try {
		await transporter.sendMail({
			from: `Shopping success ${process.env.MAIL}`, // sender address
			to: email, // list of receivers
			subject: 'Purchase successfully completed', // Subject line
			// text: "Hello world?", // plain text body
			html: `
			<h2> Hello ${user.displayName}</h2>
			<h3> You are receiving this email because your purchase at AirLand has been successfully completed.</h3>
			<h5> Thank you for shopping with us</h5>
			`
		})
	} catch (error) {
		throw new Error(error.message)
	}
}
const failPurchase = async (email, displayName) => {
	try {
		await transporter.sendMail({
			from: `Shopping fail ${process.env.MAIL}`, // sender address
			to: email, // list of receivers
			subject: 'There has been a problem with your payment', // Subject line
			// text: "Hello world?", // plain text body
			html: `
			<h2> Hello ${displayName}</h2>
			<h3> You are receiving this email because we were unable to receive your payment, please try again in a few minutes.</h3>
			<h5> If Your problem continues please contact us.</h5>
			`
		})
	} catch (error) {
		throw new Error(error.message)
	}
}
module.export = {
	transporter,
	welcomeEmail,
	successPurchase,
	failPurchase
}
