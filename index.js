module.exports = function percentOfArray(array){
//1 + 2 + 3 + 4
const sumOfArray = array.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);


let arrOfPercentages = []
const percentageOfEach = array1.forEach((el, indx)=>{
    arrOfPercentages.push(`element${indx}-${el/sumOfArray*100}%`)
})

return arrOfPercentages

}
