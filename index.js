function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list');
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i]) + n;
  }
}

function deepestChild() {
  var list = document.querySelector('div#grand-node');
  list = list.querySelectorAll('div');
  while (list.length > 1) {
    list = list[0].querySelectorAll('div');
  }
  return list[0];
}
