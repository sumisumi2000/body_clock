document.addEventListener("turbo:load", () => {
  // スタートボタンを取得
  let start_btn = document.getElementById("start_button");

  // スタートボタンがクリックされた時、タイマースタート
  start_btn.addEventListener(
    "click",
    function () {
      // ストップウォッチ部分を取得
      const stop_watch = document.getElementById("number_field");
      // ストップウォッチの時間を加算する関数
      let addNumber = function () {
        stop_watch.innerHTML = (
          parseFloat(stop_watch.textContent) + 0.01
        ).toFixed(2);
      };
      // タイマーに関数をセット
      const timer = setInterval(addNumber, 5);

      // DOMの変更を監視するためにMutationObserverを設定
      const observer = new MutationObserver((mutationsList, observer) => {
        // ストップボタンを取得
        const stop_btn = document.getElementById("stop_button");
        // ストップボタンにクリックイベントを追加
        stop_btn.addEventListener(
          "click",
          function () {
            // タイマーストップ
            stop_btn.href = `scorings/${stop_watch.textContent}`;
            clearInterval(timer);
          },
          false
        );
        // 監視を終了
        observer.disconnect();
      });

      // スタートボタンが消えてストップボタンが出現する要素を監視
      observer.observe(document.body, {
        childList: true,
      });
    },
    false
  );
});
