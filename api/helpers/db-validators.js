const { db } = require('../firebase')

const existeUsuarioPorId = async id => {
	// Verificar si el correo existe

	const existeUsuario = await (
		await db.collection('USUARIOS').doc(id).get()
	).data()
	if (!existeUsuario) {
		throw new Error(`El id no existe ${id}`)
	}
}
const emailExiste = async (email = '') => {
	const existingUser = await db.collection('USUARIOS').get({ email })

	if (existingUser) {
		throw new Error('Email ya esta en uso')
	}
}

module.exports = {
	existeUsuarioPorId,
	emailExiste
}
