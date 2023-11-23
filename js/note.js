const catList = document.querySelectorAll(".cat-list");
const editCatBtn = document.querySelectorAll(".feed-history-btn");
const cat = document.querySelector("#cat");
const catContainer = document.querySelector('.cat-container');

console.log(cat);

console.log(catList);

catContainer.addEventListener('click', (event) => {
  var clickedCatList = event.target.closest('.cat-list');
  console.log(clickedCatList.outerHTML);
  if (clickedCatList) {
    clickedCatList.outerHTML = cat.innerHTML;
  }
})

// catList.forEach((item) => {
//   item.addEventListener("click", () => {
//     const catHistory = document.createElement("div");
//     catHistory.className = "feed-history";
//   });
// });

editCatBtn.forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log(item);
    event.preventDefault();
    const catHistory = document.createElement("div");
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
        console.log(item.parentElement.parentElement);
        item.parentElement.parentElement.parentElement.append(catHistory);
        
  const closeButton = document.querySelector(".close-button");
  console.log(closeButton);
    closeButton.addEventListener('click', (event) => {
      event.preventDefault();
      console.log(closeButton.parentElement);
      closeButton.parentElement.remove();
    })
  });
});

