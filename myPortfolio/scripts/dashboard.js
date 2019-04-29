var tunnels = 0;

function tunnelClick(number){
  tunnels = tunnels + number;
  document.getElementById("tunnels").innerHTML = tunnels;
};

var miners = 0;

function buyMiner(){
    var minerCost = Math.floor(10 * Math.pow(1.1,miners));
    if(tunnels >= minerCost){ 
      miners = miners + 1;
    	tunnels = tunnels - minerCost;
      document.getElementById('miners').innerHTML = miners;
      document.getElementById('tunnels').innerHTML = tunnels;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,miners));
    document.getElementById('minerCost').innerHTML = nextCost;
};
window.setInterval(function(){	
	tunnelClick(miners);	
}, 1750);

var shovels = 0;

function buyShovel(){
    var shovelCost = Math.floor(20 * Math.pow(1.1,shovels));
    if(tunnels >= shovelCost){ 
      shovels = shovels + 1;
    	tunnels = tunnels - shovelCost;
      document.getElementById('shovels').innerHTML = shovels;
      document.getElementById('tunnels').innerHTML = tunnels;
    };
    var nextCost = Math.floor(20 * Math.pow(1.1,shovels));
    document.getElementById('shovelCost').innerHTML = nextCost;
};
window.setInterval(function(){	
	tunnelClick(shovels);	
}, 1500);

var pickaxes = 0;

function buyPickaxe(){
    var pickaxeCost = Math.floor(30 * Math.pow(1.1,pickaxes));
    if(tunnels >= pickaxeCost){ 
      pickaxes = pickaxes + 1;
    	tunnels = tunnels - pickaxeCost;
      document.getElementById('pickaxes').innerHTML = pickaxes;
      document.getElementById('tunnels').innerHTML = tunnels;
    };
    var nextCost = Math.floor(30 * Math.pow(1.1,pickaxes));
    document.getElementById('pickaxeCost').innerHTML = nextCost;
};
window.setInterval(function(){	
	tunnelClick(pickaxes);	
}, 1250);

var excavators = 0;

function buyExcavator(){
    var excavatorCost = Math.floor(50 * Math.pow(1.1,excavators));
    if(tunnels >= excavatorCost){ 
      excavators = excavators + 1;
    	tunnels = tunnels - excavatorCost;
      document.getElementById('excavators').innerHTML = excavators;
      document.getElementById('tunnels').innerHTML = tunnels;
    };
    var nextCost = Math.floor(50 * Math.pow(1.1,excavators));
    document.getElementById('minerCost').innerHTML = nextCost;
};
window.setInterval(function(){	
	tunnelClick(excavators);	
}, 950);

//Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});

// Create a new list item when clicking on the "Add" button
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
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  };
};