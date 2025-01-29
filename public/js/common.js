/* ================================
   js/common.js
   放一些通用小工具函式
================================ */

/**
 * 顯示 loading 畫面，並隱藏 id=main-content
 */
export function showLoading() {
  const loading = document.getElementById("loading-screen");
  if (loading) loading.style.display = "flex";

  const main = document.getElementById("main-content");
  if (main) main.style.display = "none";
}

/**
 * 隱藏 loading 畫面，並顯示 id=main-content
 */
export function hideLoading() {
  const loading = document.getElementById("loading-screen");
  if (loading) loading.style.display = "none";

  const main = document.getElementById("main-content");
  if (main) main.style.display = "block";
}
