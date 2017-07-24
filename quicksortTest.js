function sortDsc(arr){
    if(arr.length<1) return []

    var left = [], right=[], pivot=arr[0]

    for(var i=1; i<arr.length; i++) {
        if(arr[i]>pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return sortDsc(left).concat(pivot, sortDsc(right))

}

console.log(sortDsc([23,24,5,53,6,6,89,2,55,65,67,768,567,32,4567,0,4345,24,54,6756,45,21,546,87,435,23,7]))