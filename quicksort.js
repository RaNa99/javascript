var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function quicksort(data) {
    if (data.length == 0) return [];
  
    var left = [], right = [], pivot = data[0];
  
    for (var i = 1; i < data.length; i++) {
        if(data[i] < pivot)
            left.push(data[i])
        else
            right.push(data[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
}

console.log(quicksort(a))