// ==UserScript==
// @name         Isaac web: swap Command/Control
// @match        https://chiikabu.github.io/the-browsing-of-isaac/*
// @run-at       document-start
// @grant        none
// ==/UserScript==
(() => {
  // 以撒网页版：把 Command 和 Control 在游戏里互换（和 macOS「修饰键」里的互换保持一致）
  // 物理 Command -> 游戏里的 Ctrl；物理 Control -> 不发给游戏
  if (window.__isaacSwapCmdCtrl) { alert("Command/Control 互换已经开着了"); return; }
  window.__isaacSwapCmdCtrl = true;
  const SWAP = { MetaLeft: "ControlLeft", MetaRight: "ControlRight", ControlLeft: "MetaLeft", ControlRight: "MetaRight" };
  const KEY = { ControlLeft: "Control", ControlRight: "Control", MetaLeft: "Meta", MetaRight: "Meta" };
  let forwarding = false;
  // Chrome 在 Mac 上按住 Command 时，其他键松开不会发 keyup；记下这期间按下的键，Command 松开时补发
  const heldDuringCmd = new Map();
  const fire = (type, code, src) => {
    forwarding = true;
    try {
      (document.activeElement || window).dispatchEvent(new KeyboardEvent(type, {
        code, key: KEY[code] || src.key, bubbles: true, cancelable: true,
        ctrlKey: type === "keydown" && code.startsWith("Control"), repeat: src.repeat,
      }));
    } finally { forwarding = false; }
  };
  const handler = (ev) => {
    if (forwarding) return;
    const to = SWAP[ev.code];
    const cmdDown = ev.metaKey && !SWAP[ev.code];
    if (cmdDown && ev.type === "keydown") heldDuringCmd.set(ev.code, ev);
    if (!to) return;
    ev.stopImmediatePropagation();
    ev.preventDefault();
    fire(ev.type, to, ev);
    if (ev.type === "keyup" && ev.code.startsWith("Meta")) {
      for (const [code, src] of heldDuringCmd) {
        forwarding = true;
        try { (document.activeElement || window).dispatchEvent(new KeyboardEvent("keyup", { code, key: src.key, bubbles: true })); }
        finally { forwarding = false; }
      }
      heldDuringCmd.clear();
    }
  };
  window.addEventListener("keydown", handler, true);
  window.addEventListener("keyup", handler, true);
  console.log("[isaac] Command/Control 已互换（刷新页面后失效）");
})();
