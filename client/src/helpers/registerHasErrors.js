export default function registerHasError(inputName, value, originalPassword) {
	let error
	switch (inputName) {
		case 'displayName':
			if (value.match(!!/[^a-zA-Z\s]+/)) {
				error = 'Only letters!'
				break
			}
			if (value.length < 2) {
				error = 'Enter a valid name'
				break
			}
			if (value.length > 35) {
				error = 'The maximum name length allowed is 35'
				break
			}
			break

		case 'email':
			if (!value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) || value.length < 2) {
				error = 'Email should look like this some@address.com'
				break
			}
			break

		case 'password':
			if (value.length < 2) {
				error = 'Password should contain at least 8 characters'
				break
			}
			if (value.includes(' ')) {
				error = "Password can't contain a space"
				break
			}

			if (
				!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/g)
			) {
				error =
					'Password should contain at least 8 characters, a minus, a mayus, a number and a special character.'
				break
			}
			break

		case 'repeatPassword':
			if (value !== originalPassword) {
				error = 'Passwords should match!'
			}
			if (value.length < 2) {
				error = 'Password should contain at least 8 characters'
				break
			}
			if (value.includes(' ')) {
				error = "Password can't contain a space"
				break
			}

			if (
				!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/g)
			) {
				error =
					'Password should contain at least 8 characters, a minus, a mayus, a number and a special character.'
				break
			}
			break
	}

	return error
}
