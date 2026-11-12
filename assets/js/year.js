// Keeps the footer copyright year current for whoever is viewing the site.
(function () {
    var el = document.getElementById('year');
    if (el) {
        el.textContent = new Date().getFullYear();
    }
})();
