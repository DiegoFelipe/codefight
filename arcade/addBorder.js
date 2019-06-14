function addBorder(picture) {
    const arrLength = picture[0].length
    picture = picture.map(pic => `*${pic}*`)
    
    picture.push('*'.repeat(arrLength+2))
    picture.splice(0,0,('*'.repeat(arrLength+2)))
    return picture
    
}


addBorder(["abc","ded"])