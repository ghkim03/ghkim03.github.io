(function () {
  var root = document.documentElement;
  var titleEl = document.querySelector("title");
  var buttons = document.querySelectorAll("[data-set-lang]");

  function apply(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    if (titleEl && titleEl.dataset[lang]) document.title = titleEl.dataset[lang];
    for (var i = 0; i < buttons.length; i++) {
      var on = buttons[i].getAttribute("data-set-lang") === lang;
      buttons[i].setAttribute("aria-pressed", on ? "true" : "false");
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      var lang = this.getAttribute("data-set-lang");
      apply(lang);
      try { localStorage.setItem("lang", lang); } catch (e) {}
      try {
        var url = new URL(window.location.href);
        if (url.searchParams.has("lang")) {
          url.searchParams.set("lang", lang);
          history.replaceState(null, "", url);
        }
      } catch (e) {}
    });
  }

  apply(root.getAttribute("data-lang") === "ko" ? "ko" : "en");
})();
