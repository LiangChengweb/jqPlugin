var drawLuck = (function () {
  var arr = [];
  var count = 0;
  return function(num) {
    if (count === 0) {
      for (var i = 0; i < num; i++) arr[i] = i + 1;
    }
    var indexRom = Math.floor(Math.random() * arr.length);
    var drawNum = arr[indexRom];
    if (count === (num + 1)|| arr.length === 0) {
      alert('你的抽奖机会用完了');
    } else {
      ++count;
      arr.splice(indexRom, 1);
      alert(drawNum);
      return drawNum;
    }
  };
})();