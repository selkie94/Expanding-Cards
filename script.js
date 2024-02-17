const panels = document.querySelectorAll('.panel')



panels.forEach(panel => {
    panel.addEventListener("click", function () {
        removeActiveClasses();
        panel.classList.add("active")
  })
});

function removeActiveClasses() {
    panels.forEach (panel => {
        panel.classList.remove("active")
    })
}



// var panels = document.querySelectorAll('.panel')

// var panelsCount = panels.length;

// for (i = 0; i <= panelsCount; i += 1) {
//     panels[i].onclick = function() {
//         this.classList.add("active");
//     }
// }