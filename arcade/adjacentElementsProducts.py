# Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
# Example
#
# For inputArray = [3, 6, -2, -5, 7, 3], the output should be
# adjacentElementsProduct(inputArray) = 21.
#
# 7 and 3 produce the largest product.

def adjacentElementsProduct(inputArray):
    sumArray = []
    aux = 0
    while aux < len(inputArray)-1:
        sumArray.append(inputArray[aux] * inputArray[aux+1])
        aux += 1
    higher = max(sumArray)
    return higher