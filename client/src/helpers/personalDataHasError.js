export default function personalDataHasError(inputName, value) {
	let error
	switch (inputName) {
		case 'lastName':
			if (value.match(!!/[^a-zA-Z\s]+/)) {
				error = 'Only letters!'
				break
			}
			if (value.length < 2) {
				error = 'Enter a valid lastname'
				break
			}
			break

		case 'firstName':
			if (value.match(!!/[^a-zA-Z\s]+/)) {
				error = 'Only letters!'
				break
			}
			if (value.length < 2) {
				error = 'Enter a valid name'
				break
			}
			break

		case 'birthMonth':
			if (value.length < 1) {
				error = 'Enter a valid month'
				break
			}
			if (value.match(!!/[^0-9\s]+/)) {
				error = 'Only numbers!'
				break
			}
			if (Number(value) < 1 || Number(value) > 12) {
				error = 'Month should be a number between 1 and 12'
				break
			}
			break
		case 'birthDay':
			if (value.length < 1) {
				error = 'Enter a valid day'
				break
			}
			if (value.match(!!/[^0-9\s]+/)) {
				error = 'Only numbers!'
				break
			}
			if (Number(value) > 31) {
				error = 'Days should be a number between 1 and 31'
				break
			}
			break
		case 'birthYear':
			if (value.length < 4) {
				error = 'Enter a valid year'
				break
			}
			if (value.match(!!/[^0-9\s]+/)) {
				error = 'Only numbers!'
				break
			}
			if (Number(value) < 1910 || Number(value) > 2009) {
				error = 'Year should be a number between 1910 and 2009'
				break
			}
	}

	return error
}
