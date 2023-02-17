// pages/Omikuji.jsx

//import { ActionButton } from "../components/ActionButton.jsx";
// 🔽 追加
import { useState } from "react";
import { ActionButton } from "../components/ActionButton";


export const Omikuji = () => {
  // 🔽 追加
  const [omikujiResult, setOmikujiResult] = useState("");

  // 🔽 追加
  const getOmikuji = () => {
    const result = ["大吉", "中吉", "小吉", "凶", "大凶"][
      Math.floor(Math.random() * 5)
    ];
    console.log(result);
    // 🔽 追加
    setOmikujiResult(result);
  };

  return (
    <>
      <p>おみくじの画面</p>
      {/* 🔽 編集 */}
      <ActionButton text="おみくじをひく" action={getOmikuji} />
     {/* 🔽 追加 */}
     <p>{omikujiResult}</p>
    </>
  );
};