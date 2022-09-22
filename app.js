
function showHide(name) {
    var element = document.getElementById(name);
    if (element.style.display === "block") {
        element.style.display = "none";

    } else {
        element.style.display = "block";
    }
}
function showOptions(name) {
    var details = document.getElementById("details");
    var portfolio = document.getElementById("portfolio");
    if (name === "details") {
        portfolio.style.display = "none";
        details.style.display = "block";
    } else {
        portfolio.style.display = "block";
        details.style.display = "none";
    }
}
function showPortfolio(id1, id2){
    var element1 = document.getElementById(id1);
    var element2 = document.getElementById(id2);
    element1.style.display = "none";
    element2.style.display = "block";
}
