const { db } = require('../src/firebase')

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
	const DBUsers = await (await db.collection('USUARIOS').get()).docs.map(user => ({ ...user.data() }))
	const existingUser = DBUsers.some(user => user.EMAIL === email)

	if (existingUser) {
		throw new Error('Email ya esta en uso')
	}
}

module.exports = {
	existeUsuarioPorId,
	emailExiste
}
