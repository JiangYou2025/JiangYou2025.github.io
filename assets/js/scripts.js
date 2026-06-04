// Smooth-scroll for in-page anchor links (About / News / Publications / Teaching).
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"], a[href*="/#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var hash = this.hash;
      if (hash && document.querySelector(hash)) {
        e.preventDefault();
        document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", hash);
      }
    });
  });
});
