/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
*/


function isLucky(n) {
    let nString = n.toString()

		let firstHalf = getFirstHalf(nString)
		let secondHalf = getSecondHalf(nString)

		return sumDigitsOfNumber(firstHalf) === sumDigitsOfNumber(secondHalf)
}

const getFirstHalf = str => str.slice(0, str.length / 2)
const getSecondHalf = str => str.slice(str.length/2)
const getSum = (total, num) => +total + +num

const sumDigitsOfNumber = num => {

	num = num.split("")
	num.reduce(getSum)

	return num

}
