function maxSub(arr){
  let maxCurrent = arr[0]
  const length = arr.length
  let maxGlobal = arr[0]
  for(let i = 1; i < length ; i++){
    maxCurrent = Math.max(maxCurrent + arr[i], arr[i])
    if(maxCurrent > maxGlobal){
      maxGlobal = maxCurrent
    }
  }
  return maxGlobal
}
const arr = [10,2,3,-2,4]
const result = maxSub(arr)
console.log(result)
