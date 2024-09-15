document.addEventListener("turbo:load", () => {
  // ストップウォッチ部分を取得
  const stop_watch = document.getElementById("number_field");

  // ストップウォッチの時間を加算する関数
  let addNumber = function () {
    stop_watch.innerHTML = (parseFloat(stop_watch.textContent) + 0.01).toFixed(
      2
    );
  };

  // 関数をセット
  const timer = setInterval(addNumber, 5);

  // ストップボタンを取得
  let stop_btn = document.getElementById("submit_button");

  // ストップボタンがクリックされた時、タイマーストップ
  stop_btn.addEventListener(
    "click",
    function () {
      console.log("クリックされました！");
      clearInterval(timer);
    },
    false
  );
});
