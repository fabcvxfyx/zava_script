var MyTodo = document.getElementsByTagName("LI");
var i;
for (i = 0; i < MyTodo.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "open";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var open = document.getElementsByClassName("open");
var i;
for (i = 0; i < open.length; i++) {
  open[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "open";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < open.length; i++) {
    open[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
