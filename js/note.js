const catList = document.querySelectorAll(".cat-list");
let editCatBtn = document.querySelectorAll(".feed-history-btn");
const cat = document.querySelector(".cat");
const catContainer = document.querySelector(".cat-container");
const id = document.getElementById("id1");
const firstCat = document.querySelector("#firstCat");
const feedHistory = document.querySelector(".feed-history");
console.log(feedHistory);

console.log(cat);
console.log(id);

console.log(catList);

// catContainer.addEventListener('click', (event) => {
//   let clickedCatList = event.target.closest('.cat-list');
//   console.log(clickedCatList);
//   if (clickedCatList) {
//     clickedCatList.outerHTML = cat.innerHTML;
//     cat.style.height = "420px";
//     // id.style.height = "420px";
//     // id.style.borderBottom = "3px solid #888";
//     // id.innerHTML = firstCat.innerHTML;
//   }

// })

catList.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.className == "cat-list") {
      item.style.height = "460px";
      item.style.marginRight = "30px";
      item.innerHTML = firstCat.innerHTML;
      item.setAttribute("class", "cat");
      editCatBtn = document.querySelectorAll(".feed-history-btn");
      test();
    }
  });
});

function test() {
  editCatBtn.forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log(item);
      event.preventDefault();

      let catHistory = document.createElement("div");
      catHistory.className = "feed-history";
      catHistory.innerHTML = `<h2>餵食紀錄</h2>
        <a href="" class="close-button"><img src="img/x-lg.svg" alt=""/></a>
        <ul>
          <li>
            <div>ＯＯ品牌飼料</div>
            <div>10/20 早上八點</div>
          </li>
          <li>
            <div>ＯＯ品牌飼料</div>
            <div>10/20 早上八點</div>
          </li>
          <li>
            <div>ＯＯ品牌飼料</div>
            <div>10/20 早上八點</div>
          </li>
          <li>
            <div>ＯＯ品牌飼料</div>
            <div>10/20 早上八點</div>
          </li>
          <li>
            <div>ＯＯ品牌飼料</div>
            <div>10/20 早上八點</div>
          </li>
          <li>
            <div>ＯＯ品牌飼料</div>
            <div>10/20 早上八點</div>
          </li>
          <li>
            <div>ＯＯ品牌飼料</div>
            <div>10/20 早上八點</div>
          </li>
          <li>
            <div>ＯＯ品牌飼料</div>
            <div>10/20 早上八點</div>
          </li>
        </ul>`;
      console.log(catHistory);

      console.log(item.parentElement.parentElement);
      item.parentElement.parentElement.parentElement.append(catHistory);

      const closeButton = document.querySelector(".close-button");
      console.log(closeButton);
      closeButton.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(closeButton.parentElement);
        closeButton.parentElement.remove();
      });
    });
  });
}
