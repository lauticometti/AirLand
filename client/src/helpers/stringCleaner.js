export default function stringCleaner(string) {
	const trimed = string.trim()

	const blanksReplaced = trimed.replace(/\s+/g, '%20')

	return blanksReplaced
}
