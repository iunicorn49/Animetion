var body = document.getElementById('colorBlocks');

create('div1');
create('div2');
create('div3');
create('div4');
create('div5');

var all = document.querySelectorAll('.colorBlocks > div');
var divs1 = document.getElementsByClassName('div1');
var divs2 = document.getElementsByClassName('div2');
var divs3 = document.getElementsByClassName('div3');
var divs4 = document.getElementsByClassName('div4');
var divs5 = document.getElementsByClassName('div5');
var speed = 1300;  //  过度时间和间隔时间
var m = 190;  //  rgb范围
var n = 60;  //  rgb范围

for (var i = 0; i < all.length; i++) {
  all[i].style.transition = speed + 'ms';
  all[i].style.top = 50 + '%';
  all[i].style.left = 50 + '%';
  all[i].style.transform = 'translate(-50%,-50%)';
}

setInterval(function () {
  go(divs1);
}, speed)

setTimeout(function () {
  setInterval(function () {
    go(divs2);
  }, speed)
},300)

setTimeout(function () {
  setInterval(function () {
    go(divs3);
  }, speed)
},600)

setTimeout(function () {
  setInterval(function () {
    go(divs4);
  }, speed)
},900)

setTimeout(function () {
  setInterval(function () {
    go(divs5);
  }, speed)
},1200)

function go(tag) {
  for (var i = 0; i < tag.length; i++) {
    tag[i].style.background = color();
    tag[i].style.left = log() + '%';
    tag[i].style.top = log() + '%';
    tag[i].style.transform = 'scale(' + size() + ')';
    tag[i].style.zIndex = zIndex();
    tag[i].style.borderRadius = br() + '%';
  }
}

function create(cla) {
  for (var i = 0; i < 10; i++) {
    var div = document.createElement('div');
    div.className = cla;
    body.appendChild(div);
  }
}

function br() {
  return parseInt(Math.random() * 100 + 5);
}

function color() {
  return 'rgba(' + rgb(m,n) + ',' + rgb(m,n) + ',' + rgb(m,n) + ',' + a() + ')';
}

function rgb(m,n) {
  return parseInt(Math.random() * (m - n + 1) + n);
}

function a() {
  return parseInt(Math.random() * 10 + 1)/10;
}

function log() {
  return parseInt(Math.random() * 108 - 7);
}

function size() {
  return parseInt(Math.random() * 20 + 1)/10;
}

function zIndex() {
  return parseInt(Math.random() * 52 + 2);
}
