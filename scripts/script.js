window.onload = function() {

    if (window.location.href.includes("theeshamari.github.io")) {
        // load navigation bar/menu
        fetch("https://theeshamari.github.io/thee-Ultra/templates/nav.html")
        .then(response => response.text())
        .then(data => {document.getElementById("nav").innerHTML = data});

        // load footer
        fetch("https://theeshamari.github.io/thee-Ultra/templates/footer.html")
        .then(response => response.text())
        .then(data => {document.getElementById("footer").innerHTML = data});
    } else {
        // load navigation bar/menu
        fetch("../templates/nav.html")
        .then(response => response.text())
        .then(data => {document.getElementById("nav").innerHTML = data});
    
        // load footer
        fetch("../templates/footer.html")
        .then(response => response.text())
        .then(data => {document.getElementById("footer").innerHTML = data});
    }
}