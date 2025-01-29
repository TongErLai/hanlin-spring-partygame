// 引入 Firebase SDK 模組
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"; // 確保正確引入



// Firebase 配置（從 Firebase Console 取得）
const firebaseConfig = {
  apiKey: "AIzaSyAsgZrgX5CuImEBq2b1r0p8uBkJCcoA1AI",
  authDomain: "hanlin-springpartygame.firebaseapp.com",
  databaseURL: "https://hanlin-springpartygame-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hanlin-springpartygame",
  storageBucket: "hanlin-springpartygame.firebasestorage.app",
  messagingSenderId: "317816684664",
  appId: "1:317816684664:web:c32d2f4f90633a38c8ed8d"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const rtdb = getDatabase(app);