/*
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

*/

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
