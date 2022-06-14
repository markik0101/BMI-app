let button = document.querySelector('#btn')

button.addEventListener('click', () => {
	const height = parseInt(document.querySelector('#height').value)
	const weight = parseInt(document.querySelector('#weight').value)
	const result = document.querySelector('#output')

	let height_status = false, weight_status = false

	if (height === '' || isNaN(height) || (height <= 0)) {
		document.querySelector('#height_error').innerHTML = 'Please provide a valid height'
	} else {
		document.querySelector('#height_error').innerHTML = ''
		height_status = true
	}

	if (weight === '' || isNaN(weight) || (weight <= 0)) {
		document.querySelector('#weight_error').innerHTML = 'Please provide a valid weight'
	} else {
		document.querySelector('#weight_error').innerHTML = ''
		weight_status = true
	}

	if (height_status && weight_status) {
		const bmi = (weight / ((height * height) / 10000)).toFixed(2)

		if (bmi < 18.6) {
			result.innerHTML = 'Under weight: ' + bmi
			result.style.color = 'red'
		} else if (bmi >= 18.6 && bmi < 24.9) {
			result.innerHTML = 'Normal: ' + bmi
			result.style.color = 'yellow'
		} else {
			result.innerHTML = 'Over weight: ' + bmi
			result.style.color = 'red'
		}
	} else {
		// alert('The form has error')
		result.innerHTML = ''
	}
})