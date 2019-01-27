function commonCharacterCount(s1, s2) {
	let hash1 = createHashTable(s1.split(''))
  console.log(hash1)
	let hash2 = createHashTable(s2.split(''))

    let result = 0
	Object.keys(hash1).forEach(key => {
    console.log(hash2[key])
    hash2[key] ? result++ : result
    })
  console.log(result)
	return result
}

const createHashTable = arrayToMap => {

	var hashObj = {}
	arrayToMap.map(word => {
		if(!hashObj[word]) hashObj[word] = 0
		hashObj[word]++
	})
	return hashObj
}

commonCharacterCount('asds','a878787')
