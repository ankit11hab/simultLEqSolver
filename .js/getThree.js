 function getThree() {
  var a1 =   parseFloat(document.getElementById("input_id1").value);
  var b1 =   parseFloat(document.getElementById("input_id2").value);
  var c1 =   parseFloat(document.getElementById("input_id3").value);
  var d1 =   parseFloat(document.getElementById("input_id4").value);
  var a2 =   parseFloat(document.getElementById("input_id5").value);
  var b2 =   parseFloat(document.getElementById("input_id6").value);
  var c2 =   parseFloat(document.getElementById("input_id7").value);
  var d2 =   parseFloat(document.getElementById("input_id8").value);
  var a3 =   parseFloat(document.getElementById("input_id9").value);
  var b3 =   parseFloat(document.getElementById("input_id10").value);
  var c3 =   parseFloat(document.getElementById("input_id11").value);
  var d3 =   parseFloat(document.getElementById("input_id12").value);


var z = ((d3 - (d1*a3)/a1) - (b3 - (b1*a3)/a1)*(d2-(d1*a2)/a1)/(b2-(b1*a2)/a1))/((c3-(c1*a3)/a1) - (b3 - (b1*a3)/a1)*(c2 - (c1*a2)/a1)/(b2 - (b1*a2)/a1))
var y = ((d2 - d1*a2/a1)-(c2 - c1*a2/a1)*z)/(b2 - b1*a2/a1)
var x = d1 - c1*z - b1*y



document.getElementById("a").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspx = "+x+"<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspy = "+y
+"<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspz = "+z;
}