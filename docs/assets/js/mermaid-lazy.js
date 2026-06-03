// 折り畳み(details)内の Mermaid を、開いた瞬間に描画する遅延レンダラ。
// 表示中の図は Material が描画済み(svg あり)なのでスキップし、
// 閉じた details 内で未描画の .mmlazy だけを data-graph から描画する。
(function () {
  function renderLazy(scope) {
    var root = scope || document;
    root.querySelectorAll(".mmlazy").forEach(function (w) {
      if (w.querySelector("svg")) return;      // 既に描画済み(Material or 自前)
      if (w.dataset.rendering) return;
      if (w.offsetParent === null) return;      // まだ非表示(閉じた details 内)
      if (!window.mermaid) return;
      w.dataset.rendering = "1";
      var src = w.getAttribute("data-graph");
      var id = "mm" + Math.random().toString(36).slice(2);
      window.mermaid
        .render(id, src)
        .then(function (r) {
          w.innerHTML = r.svg;
        })
        .catch(function () {
          w.removeAttribute("data-rendering");
        });
    });
  }

  function attach() {
    renderLazy(document);
    document.querySelectorAll("details").forEach(function (d) {
      if (d.dataset.mmHook) return;
      d.dataset.mmHook = "1";
      d.addEventListener("toggle", function () {
        if (d.open) renderLazy(d);
      });
    });
  }

  // Material の instant navigation にも追従（document$ が無ければ DOMContentLoaded）
  if (window.document$ && window.document$.subscribe) {
    window.document$.subscribe(function () {
      setTimeout(attach, 100);
    });
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(attach, 100);
    });
  }
})();
