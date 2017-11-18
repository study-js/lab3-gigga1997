var striqoni = prompt('sheitane striqoni');
var arr = ["reklama", "marketingi", "virusi"];
for (var i = arr.length - 1; i >= 0; --i) {
    if (striqoni.indexOf(arr[i]) != -1) {
        alert('Text sheicavs akrzalul sityvebs');
    }
}