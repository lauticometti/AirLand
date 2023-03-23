import { useEffect } from 'react'

export function GoogleMap() {
	useEffect(() => {
		const ifameData = document.getElementById('iframeId')
		const lat = -34.60376
		const lon = -58.38162
		ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
	})
	return <iframe id='iframeId' height='400px' width='100%'></iframe>
}
