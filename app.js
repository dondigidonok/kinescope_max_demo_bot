(function () {
  var tabs = document.querySelectorAll(".tab");
  var panels = {
    drm: document.getElementById("panel-drm"),
    open: document.getElementById("panel-open"),
  };

  function activate(name) {
    tabs.forEach(function (btn) {
      var active = btn.getAttribute("data-tab") === name;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
    Object.keys(panels).forEach(function (key) {
      var el = panels[key];
      if (!el) return;
      var on = key === name;
      el.classList.toggle("is-active", on);
      el.hidden = !on;
    });
  }

  tabs.forEach(function (btn) {
    btn.addEventListener("click", function () {
      activate(btn.getAttribute("data-tab"));
    });
  });

  if (window.WebApp && typeof window.WebApp.ready === "function") {
    window.WebApp.ready();
  }
})();
