
function showHide(name){
    var element = document.getElementById(name);
    if(element.style.display === "none"){
        element.style.display = "block";
        
    } else{
        element.style.display = "none";
    }
}
// function viewCertificate(name){
//     var image = document.getElementsById(name);
//     var source = image.src;
//     window.open(source);
// }
