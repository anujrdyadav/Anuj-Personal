a = [1, 2, 3]
b = [3, 2, 1]
function compareTriplets(a,b) {
    let alicescore = 0, bobscore = 0;
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            alicescore++;
        }
        else if (a[i] < b[i]) {
            bobscore++;
        }

    }
    return[alicescore,bobscore]
}
console.log(compareTriplets(a,b))

function printStar(){
    for(let i = 0; i < 3; i++){
        let star = ""
        for(let j = 0; j <=i; j++){
            star += "*"
        }
        console.log(star)
    }
}
printStar()