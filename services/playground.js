for (var i=1; i<=4; i++){
    (function() {
        document.getElementById("item-" + i).addEventListener("click", function() {
            alert("it is item " + i);
        });
    })(i);
};