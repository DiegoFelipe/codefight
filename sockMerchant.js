const sockMerchan = arr => {
	hashArr = createHashTable(arr)

	hashArr.map()

}

const createHashTable = arr => {
	const hashObj = {}
	arr.map(el => {
		if(!hashObj[el]) hashObj[el] = 0
		hashObj[el]++
	})

	return hashObj
}
