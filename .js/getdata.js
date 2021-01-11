 function getData() {
  var a1 = parseFloat(document.getElementById("input_id1").value);
  var b1 =   parseFloat(document.getElementById("input_id2").value);
  var c1 =   -parseFloat(document.getElementById("input_id3").value);
  var a2 =   parseFloat(document.getElementById("input_id4").value);
  var b2 =   parseFloat(document.getElementById("input_id5").value);
  var c2 =   -parseFloat(document.getElementById("input_id6").value);
 var x = (c2*b1-b2*c1)/(a1*b2 - a2* b1);
 var y = (c2*a1-a2*c1)/(a2*b1 - a1* b2);
document.getElementById("a").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspx = "+x+"<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspy = "+y;
}