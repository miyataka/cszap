// ワーシャルフロイド法のステップ実行ビジュアライザ。
// 「中継点 k を 1 つずつ許可しながら距離行列 dist[i][j] を更新する」過程を、
// 距離行列のハイライト + 比較式 + グラフ頂点の強調で見せる。
//
// Material for MkDocs の navigation.instant 対応:
//   - このファイルは extra_javascript で全ページに読み込まれる。
//   - document$.subscribe() で「各ページ表示時」に初期化が走る。
//   - #floyd-viz が無いページでは即 return する(element guard)。
//   - 前ページの setInterval が残らないよう、毎回 clearInterval する。

(function () {
  const INF = Infinity;
  let timer = null; // モジュールスコープ: 再初期化時に確実に止める

  // --- 例グラフ(プリセット) -------------------------------------------------
  // edges: [from, to, weight] の有向辺。
  const PRESETS = {
    nonneg: {
      label: "非負の重み(4頂点)",
      n: 4,
      names: ["A", "B", "C", "D"],
      edges: [
        [0, 1, 3], [0, 3, 7],
        [1, 0, 8], [1, 2, 2],
        [2, 0, 5], [2, 3, 1],
        [3, 0, 2], [3, 2, 3],
      ],
    },
    neg: {
      // 負の辺ありでも(負閉路が無ければ)フロイドは正しく解ける、を見せる例。
      label: "負の辺あり(4頂点)",
      n: 4,
      names: ["A", "B", "C", "D"],
      edges: [
        [0, 1, 4], [0, 2, 5],
        [1, 2, -3],
        [2, 3, 4],
        [3, 1, 6],
      ],
    },
  };

  // 頂点の描画座標(SVG, 360x260 のビュー内)。
  const POS = [
    { x: 80, y: 60 },
    { x: 280, y: 60 },
    { x: 280, y: 200 },
    { x: 80, y: 200 },
  ];

  // --- 距離行列とフレーム(各ステップのスナップショット)を構築 ---------------
  function buildFrames(preset) {
    const { n, edges } = preset;
    const dist = Array.from({ length: n }, (_, i) =>
      Array.from({ length: n }, (_, j) => (i === j ? 0 : INF))
    );
    for (const [u, v, w] of edges) dist[u][v] = w;

    const frames = [];
    frames.push({ kind: "init", matrix: clone(dist) });

    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          const dik = dist[i][k];
          const dkj = dist[k][j];
          const old = dist[i][j];
          const sum = dik === INF || dkj === INF ? INF : dik + dkj;
          const updated = sum < old;
          if (updated) dist[i][j] = sum;
          frames.push({
            kind: "step",
            k, i, j, dik, dkj, old, sum, updated,
            matrix: clone(dist),
          });
        }
      }
    }
    return frames;
  }

  function clone(m) {
    return m.map((row) => row.slice());
  }

  function fmt(v) {
    return v === INF ? "∞" : String(v);
  }

  // --- 初期化(ページ表示ごと) -----------------------------------------------
  function init() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    const root = document.querySelector("#floyd-viz");
    if (!root) return; // このページにビジュアライザは無い

    // 二重初期化ガード(同一ページで複数回 subscribe が来た場合)
    if (root.dataset.fwReady === "1") return;
    root.dataset.fwReady = "1";

    const els = {
      matrix: root.querySelector("#fw-matrix"),
      graph: root.querySelector("#fw-graph"),
      formula: root.querySelector("#fw-formula"),
      header: root.querySelector("#fw-header"),
      progress: root.querySelector("#fw-progress"),
      btnReset: root.querySelector("#fw-reset"),
      btnPrev: root.querySelector("#fw-prev"),
      btnPlay: root.querySelector("#fw-play"),
      btnNext: root.querySelector("#fw-next"),
      speed: root.querySelector("#fw-speed"),
      presetBtns: root.querySelectorAll("[data-fw-preset]"),
    };

    let presetKey = "nonneg";
    let preset = PRESETS[presetKey];
    let frames = buildFrames(preset);
    let cur = 0;
    let playing = false;

    function stopPlay() {
      playing = false;
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
      els.btnPlay.textContent = "▶ 再生";
    }

    function startPlay() {
      if (cur >= frames.length - 1) cur = 0; // 末尾なら頭から
      playing = true;
      els.btnPlay.textContent = "⏸ 停止";
      const interval = 1300 - Number(els.speed.value); // スライダー大=速い
      timer = setInterval(() => {
        if (cur >= frames.length - 1) {
          stopPlay();
          render();
          return;
        }
        cur++;
        render();
      }, Math.max(120, interval));
    }

    function loadPreset(key) {
      stopPlay();
      presetKey = key;
      preset = PRESETS[key];
      frames = buildFrames(preset);
      cur = 0;
      els.presetBtns.forEach((b) =>
        b.classList.toggle("fw-preset-on", b.dataset.fwPreset === key)
      );
      render();
    }

    // --- 描画 ---------------------------------------------------------------
    function render() {
      const f = frames[cur];
      renderMatrix(f);
      renderGraph(f);
      renderText(f);
      els.progress.textContent = `ステップ ${cur} / ${frames.length - 1}`;
      els.btnPrev.disabled = cur === 0;
      els.btnNext.disabled = cur >= frames.length - 1;
    }

    function renderMatrix(f) {
      const { n, names } = preset;
      const isStep = f.kind === "step";
      let html = '<table class="fw-table"><thead><tr><th class="fw-corner">i\\j</th>';
      for (let j = 0; j < n; j++) {
        const cls = isStep && j === f.k ? "fw-pivot-head" : "";
        html += `<th class="${cls}">${names[j]}</th>`;
      }
      html += "</tr></thead><tbody>";
      for (let i = 0; i < n; i++) {
        const rowPivot = isStep && i === f.k ? "fw-pivot-head" : "";
        html += `<tr><th class="${rowPivot}">${names[i]}</th>`;
        for (let j = 0; j < n; j++) {
          const classes = [];
          if (isStep) {
            if (i === f.k || j === f.k) classes.push("fw-pivot");
            if (i === f.i && j === f.k) classes.push("fw-read");
            if (i === f.k && j === f.j) classes.push("fw-read");
            if (i === f.i && j === f.j)
              classes.push(f.updated ? "fw-write-on" : "fw-write");
          }
          html += `<td class="${classes.join(" ")}">${fmt(f.matrix[i][j])}</td>`;
        }
        html += "</tr>";
      }
      html += "</tbody></table>";
      els.matrix.innerHTML = html;
    }

    function renderGraph(f) {
      const { n, names, edges } = preset;
      const isStep = f.kind === "step";
      const NS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(NS, "svg");
      svg.setAttribute("viewBox", "0 0 360 260");
      svg.setAttribute("class", "fw-svg");

      // 矢印マーカー定義
      const defs = document.createElementNS(NS, "defs");
      defs.innerHTML =
        '<marker id="fw-arrow" viewBox="0 0 10 10" refX="9" refY="5" ' +
        'markerWidth="7" markerHeight="7" orient="auto-start-reverse">' +
        '<path d="M0,0 L10,5 L0,10 z" fill="#90a4ae"/></marker>';
      svg.appendChild(defs);

      // 辺(直線 + 重み)。双方向の重複は少しずらして両方描く。
      for (const [u, v, w] of edges) {
        const a = POS[u], b = POS[v];
        const dx = b.x - a.x, dy = b.y - a.y;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len, ny = dx / len; // 法線方向
        const bend = hasReverse(edges, u, v) ? 9 : 0; // 逆向きがあれば曲げる
        const r = 22; // 頂点半径ぶん端点を縮める
        const sx = a.x + (dx / len) * r + nx * bend;
        const sy = a.y + (dy / len) * r + ny * bend;
        const ex = b.x - (dx / len) * r + nx * bend;
        const ey = b.y - (dy / len) * r + ny * bend;

        const line = document.createElementNS(NS, "line");
        line.setAttribute("x1", sx); line.setAttribute("y1", sy);
        line.setAttribute("x2", ex); line.setAttribute("y2", ey);
        line.setAttribute("stroke", w < 0 ? "#e53935" : "#90a4ae");
        line.setAttribute("stroke-width", "1.6");
        line.setAttribute("marker-end", "url(#fw-arrow)");
        svg.appendChild(line);

        const tx = (sx + ex) / 2 + nx * 9;
        const ty = (sy + ey) / 2 + ny * 9;
        const t = document.createElementNS(NS, "text");
        t.setAttribute("x", tx); t.setAttribute("y", ty);
        t.setAttribute("class", "fw-edge-w" + (w < 0 ? " fw-neg" : ""));
        t.textContent = String(w);
        svg.appendChild(t);
      }

      // 頂点
      for (let v = 0; v < n; v++) {
        const c = document.createElementNS(NS, "circle");
        c.setAttribute("cx", POS[v].x);
        c.setAttribute("cy", POS[v].y);
        c.setAttribute("r", "20");
        let role = "fw-node";
        if (isStep) {
          if (v === f.k) role = "fw-node fw-node-k";
          else if (v === f.i) role = "fw-node fw-node-i";
          else if (v === f.j) role = "fw-node fw-node-j";
        }
        c.setAttribute("class", role);
        svg.appendChild(c);

        const t = document.createElementNS(NS, "text");
        t.setAttribute("x", POS[v].x);
        t.setAttribute("y", POS[v].y + 5);
        t.setAttribute("class", "fw-node-label");
        t.textContent = names[v];
        svg.appendChild(t);
      }

      els.graph.replaceChildren(svg);
    }

    function hasReverse(edges, u, v) {
      return edges.some(([a, b]) => a === v && b === u);
    }

    function renderText(f) {
      const { names } = preset;
      if (f.kind === "init") {
        els.header.innerHTML =
          "<strong>初期状態</strong>：自分自身=0、直接辺があればその重み、なければ ∞";
        els.formula.textContent =
          "中継点をまだ 1 つも許可していない状態。これから k を増やしていく。";
        return;
      }
      const K = names[f.k], I = names[f.i], J = names[f.j];
      els.header.innerHTML =
        `中継点 <span class="fw-tag-k">${K}</span> を許可 ` +
        `― 経路 <span class="fw-tag-i">${I}</span> → ` +
        `<span class="fw-tag-j">${J}</span> を見直す`;
      const sumStr =
        f.dik === INF || f.dkj === INF
          ? `${fmt(f.dik)} + ${fmt(f.dkj)} = ∞`
          : `${f.dik} + ${f.dkj} = ${f.sum}`;
      const verdict = f.updated
        ? `<span class="fw-upd">更新！ ${fmt(f.old)} → ${fmt(f.sum)}</span>`
        : `<span class="fw-keep">据え置き(${fmt(f.old)} のまま)</span>`;
      els.formula.innerHTML =
        `dist[${I}][${J}] = min( <b>${fmt(f.old)}</b>, ` +
        `dist[${I}][${K}] + dist[${K}][${J}] = ${sumStr} ) &nbsp; ${verdict}`;
    }

    // --- イベント ----------------------------------------------------------
    els.btnReset.addEventListener("click", () => {
      stopPlay();
      cur = 0;
      render();
    });
    els.btnPrev.addEventListener("click", () => {
      stopPlay();
      if (cur > 0) cur--;
      render();
    });
    els.btnNext.addEventListener("click", () => {
      stopPlay();
      if (cur < frames.length - 1) cur++;
      render();
    });
    els.btnPlay.addEventListener("click", () => {
      if (playing) stopPlay();
      else startPlay();
      render();
    });
    els.presetBtns.forEach((b) =>
      b.addEventListener("click", () => loadPreset(b.dataset.fwPreset))
    );

    loadPreset("nonneg");
  }

  // Material の instant navigation 対応。document$ が無い環境では DOMContentLoaded。
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(init);
  } else if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
