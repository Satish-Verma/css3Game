(function() { 
    document.addEventListener("DOMContentLoaded", function(){
        debugger;
        document.getElementById("div1").innerText = "Hi.. from index1.js";
    });
})();

(function(){
    console.log(window);
    debugger;
    document.getElementById("div1").innerText = "Hi.. from index1.js";
})();

