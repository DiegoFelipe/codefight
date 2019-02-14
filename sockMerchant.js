const sockMerchant = arr => {
	hashArr = createHashTable(arr)
  let result = 0
	Object.entries(hashArr).forEach( el => {
    let resultDivision = Math.floor(el[1]/2)
		if ( resultDivision > 0) result += resultDivision
	})
  return result

}

const createHashTable = arr => {
	const hashObj = {}
	arr.map(el => {
		if(!hashObj[el]) hashObj[el] = 0
		hashObj[el]++
	})

	return hashObj
}
//10 20 20 10 10 30 50 10 20
sockMerchant([10,20,20,10,10,30,50,10,20])
