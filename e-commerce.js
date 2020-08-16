var remove_btn;
function initialize(){
    remove_btn= document.getElementById("remove-btn")
    remove_btn.addEventListener("click", function(){
        document.getElementById("body").style.display="none";
    });
}

initialize(); 