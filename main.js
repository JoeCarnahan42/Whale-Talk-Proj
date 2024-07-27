let input = "turpentine and turtles"

const vowels = ["a", "e", "i", "o", "u"]

let resultArray = []

for (let i = 0; i < input.length; i++) {
    let letters = input[i];
    // console.log(input[i])
    if (letters === "e") {
        resultArray.push(letters)
    }
    if (letters === "u") {
        resultArray.push(letters)
    }
    
    
    for (let j = 0; j < vowels.length; j++) {
        let whaleLetters = vowels[j]
        if (letters === whaleLetters) {
            resultArray.push(letters)
        }
    }
}

let resultString = resultArray.join(resultArray)
console.log(resultString.toUpperCase())
