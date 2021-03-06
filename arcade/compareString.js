function commonCharacterCount(s1, s2) {
	let hash1 = createHashTable(s1)
	let hash2 = createHashTable(s2)

	const result = 0;
	Object.keys(hash1).forEach(key => hash2[key] ? result++ : 0)

	return result
}

const createHashTable = arrayToMap => {

	const hashObject = {}
	arrayToMap.map(word => {
		if(!hashObj[word]) hashObj[word] = 0
		hashObj[word]++
	})
	return hashObject
}
