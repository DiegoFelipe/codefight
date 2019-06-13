function alternatingSums(a) {

    team1Array = filterTeam1(a) 
    team2Array = filterTeam2(a) 
    return [team1Array.length ? sumArray(team1Array) : 0, team2Array.length ? sumArray(team2Array) : 0]
        
}

const filterTeam1 = arr => arr.filter((el, index) => {
    let result = !(index % 2)
    return (result || 0)
})

const filterTeam2 = arr => arr.filter((el, index) => {
    let result = index % 2
    return (result || 0)
})
// EU SOU UM MERDA:
// alternatingSums = a => a.reduce((p,v,i) => (p[i&1]+=v,p), [0,0])
