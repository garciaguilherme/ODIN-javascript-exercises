const repeatString = function(string, num) {

    let finalMessage = "";
    for(let i = 0; i < num ; i++) {
        finalMessage = finalMessage + string + " ";
        
    }
    return finalMessage;
}
   
console.log(repeatString("hey", 12))

// Do not edit below this line
module.exports = repeatString;
