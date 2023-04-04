export default function addressDataHasError(inputName, value) {
	let error
	switch (inputName) {
		case 'streetName':
			if (value.match(!!/[^a-zA-Z\s]+/)) {
				error = 'Only letters!'
				break
			}
			if (value.length < 2) {
				error = 'Enter a valid street'
				break
			}
			break

		case 'streetNumber':
			if (value.match(!!/[^0-9]+/)) {
				error = 'Only numbers!'
				break
			}
			if (!value.length) {
				error = 'Enter a street number'
				break
			}
			break

		case 'city':
			if (value.match(/[^a-zA-Z\s]+/)) {
				error = 'Only letters!'
				break
			}
			if (value.length < 2) {
				error = 'Enter a valid city'
				break
			}
			break

		case 'zipCode':
			if (value.match(/[^a-zA-Z0-9\s]+/)) {
				error = 'Only letters and numbers!'
				break
			}
			if (!value.length) {
				error = 'Enter a valid zip code'
				break
			}
			break

		case 'phone':
			if (value.match(/[^0-9]+/)) {
				error = 'Only numbers!'
				break
			}
			if (value.length < 8 || value.length > 15) {
				error = 'Phone number should be a number between 8 and 15'
				break
			}
			break
	}

	return error
}
