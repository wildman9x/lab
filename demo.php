<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Hello World</title>
<script type="text/javascript">function displayTime() {
var d = document.getElementById("demo");
d.innerHTML = " " + Date();
}
</script>

</head>
<body onload="displayTime()">
    <!--Print hello world and the current date and time and second-->
    Hello World! <span id="demo"></span>
</body>
</html>