var arr = [];
var x = prompt('SHEIYVANE CIFRI');
for (var f = 0; f < x; f++) {
    var y = prompt('sheiyvane studentebis gvarebi');
    arr.push(y);
}


var array = [];
var z = prompt('SHEIYVANE CIFRI');
for (var w = 0; w < z; w++) {
    var h = prompt('sheiyvane studentebis gvarebi');
    array.push(h);
}


doNotMatch = []; 

for(var i=0;i<arr.length;i++){
   if(array.indexOf(arr[i])==-1){doNotMatch.push(arr[i]);}
  
}
alert (doNotMatch);

 


/*
function getMatch(a, b) {
    var matches = [];

    for (var s = 0; s < a.length; s++) {
        for (var e = 0; e < b.length; e++) {
            if (a[s] === b[e]) matches.push(a[s]);
        }
    }
    return matches;
}

alert(getMatch(arr, array));
*/