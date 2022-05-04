var switcher_class = true;
var switcher_contrast = true;




function changeClass(){
    if (switcher_class){
        document.getElementById("form").className = "hidden";
        document.getElementById("classchanger").innerHTML = "Show Form"
        switcher_class = false;
    }else{
        document.getElementById("form").className = null;
        document.getElementById("classchanger").innerHTML = "Hide Form"
        switcher_class = true;

    }
}






function changeCon(){
    if(switcher_contrast){
        document.getElementById("style").href = "includes/stylesheet_contrast.css";
        switcher_contrast = false;
    }else{
        document.getElementById("style").href = "includes/stylesheet_screen.css";
        switcher_contrast = true;
    }

}