function $(id) {
  return typeof(id) === 'string' ? document.getElementById(id) : id;
}

var num = 100;  //方块数量
var m = 190;  //RGB上限
var n = 80;  //RGB下限
var speed = 1000;  //动画时间

for (var i = 0; i < num; i++) {
  var div = document.createElement('div');
  div.style.transition = speed + 'ms';
  document.body.appendChild(div);
}

var divs = document.querySelectorAll('div');

var timer = setInterval(function () {
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.background = color();
    divs[i].style.zIndex = zIndex(num);
    divs[i].style.top = y(document.body.offsetHeight,divs[i].offsetHeight) + 'px';
    divs[i].style.left = x(document.body.offsetWidth,divs[i].offsetWidth) + 'px';
    divs[i].style.opacity = .5;
    divs[i].style.transform = 'translate(-50%,-50%) scale('+ 2*a() +')';
  }
  // 重置
  setTimeout(function () {
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.top = 50 + '%';
      divs[i].style.left = 50 + '%';
      divs[i].style.opacity = 0;
      divs[i].style.transform = 'translate(-50%,-50%)';
    }
  }, speed)
}, speed*2)


// left
function x(bodyX,thisX) {
  return Math.floor((bodyX - thisX) * Math.random() + thisX/2);
}
// top
function y(bodyY,thisY) {
  return Math.floor((bodyY - thisY) * Math.random() + thisY/2);
}
// 背景颜色
function color() {
  return 'rgba(' + rgb(m,n) + ',' + rgb(m,n) + ',' + rgb(m,n) + ',' + a() + ')';
}
function rgb(m,n) {
  return Math.floor((m - n) * Math.random() + n);
}
function a() {
  return Math.floor(10 * Math.random() + 1)/10;
}
// 圆角
function br() {
  return Math.floor(50 * Math.random() + 1);
}
// zIndex
function zIndex(num) {
  return Math.floor((num + 1) * Math.random() + 2);
}
