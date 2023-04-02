const nodemailer = require('nodemailer')
const homeURL = 'https://airland-9c55f.web.app/'

let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.email',
	port: 465,
	secure: true, // true for 465, false for other ports
	auth: {
		user: process.env.MAIL, // generated ethereal user
		pass: process.env.MAIL_PASSWORD // generated ethereal password
	}
})
// send mail with defined transport object
const welcomeEmail = async () => {
	let info = await transporter.sendMail({
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
}
const succesPurshare = async () => {
	let info = await transporter.sendMail({
		from: `Shopping succes ${process.env.MAIL}`, // sender address
		to: user.email, // list of receivers
		subject: 'Purchase successfully completed', // Subject line
		// text: "Hello world?", // plain text body
		html: `
        <h2> Hello ${user.displayName}</h2>
        <h3> You are receiving this email because your purchase at AirLand has been successfully completed.</h3>
        <h5> Thank you for shopping with us</h5>
        `
	})
}
module.export = {
	transporter,
	welcomeEmail,
	succesPurshare
}
