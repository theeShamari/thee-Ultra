
// load navigation bar/menu
fetch("../templates/nav.html")
.then(response => response.text())
.then(data => document.getElementById("nav").innerHTML = data);

// load footer
fetch("../templates/footer.html")
.then(response => response.text())
.then(data => {document.getElementById("footer").innerHTML = data});
