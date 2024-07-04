document.addEventListener("DOMContentLoaded", function() {
    const dropbtnResearch = document.querySelector(".dropbtnResearch");
    const dropdownContentResearch = document.querySelector(".dropdown-contentResearch");

    dropbtnResearch.addEventListener("click", function() {
        dropdownContentResearch.style.display = dropdownContentResearch.style.display === "block" ? "none" : "block";
    });

    window.addEventListener("click", function(event) {
        if (!event.target.matches('.dropbtnResearch') && !event.target.matches('.dropbtnResearch .arrowResearch')) {
            dropdownContentResearch.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const dropbtnConsulting = document.querySelector(".dropbtnConsulting");
    const dropdownContentConsulting = document.querySelector(".dropdown-contentConsulting");

    dropbtnConsulting.addEventListener("click", function() {
        dropdownContentConsulting.style.display = dropdownContentConsulting.style.display === "block" ? "none" : "block";
    });

    window.addEventListener("click", function(event) {
        if (!event.target.matches('.dropbtnConsulting') && !event.target.matches('.dropbtnConsulting .arrowConsulting')) {
            dropdownContentConsulting.style.display = "none";
        }
    });
});



