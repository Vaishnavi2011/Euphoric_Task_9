function Action() {
	var cmd = document.getElementById("input-box").value;
	var xhr = new XMLHttpRequest();
    
    	xhr.open("GET","http://192.168.99.102/cgi-bin/sample.py?cmd=" + cmd,true);
    	xhr.send();
	xhr.onload = function() {
		var output = xhr.responseText;
		document.getElementById("output").innerHTML=output;
    }
}
