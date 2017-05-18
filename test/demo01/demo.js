//假设我抽取9个数字，且这个就数字分别是123456789，
//每次抽取的数字不与上一次抽取的数字相同
//不许设全局变量

var numRom = function(num) {
    var arr = [];
    var count = 0;
    for(var i = 0; i < num; i++){
        arr[i] = i+1;
    }
    return function () {
        count++;
        var indexRom = Math.floor(Math.random()*arr.length);
        var arrEle = arr[indexRom];
        delete arr[indexRom];
        arr.sort(function(a,b){return a - b}).pop();
        console.log(arr.length); //输出数组
        if(count == (num+1)){
            alert('你的抽奖机会用完了');
        } else {
            return arrEle;
        }

    }
}
var drawLuck = numRom(9);
console.log(drawLuck());
console.log(drawLuck());
console.log(drawLuck());

console.log(drawLuck());
console.log(drawLuck());
console.log(drawLuck());

console.log(drawLuck());
console.log(drawLuck());
console.log(drawLuck());

//第十次，不将抽取
console.log(drawLuck());





