const catList = document.querySelectorAll(".cat-list");
let feedHistory = document.querySelectorAll(".feed-history-btn");
let cat = document.querySelector(".cat");
const catContainer = document.querySelector(".cat-container");
const id = document.getElementById("id1");
const firstCat = document.querySelector("#firstCat");
let selfCook = document.querySelectorAll(".self-cook");
let catFoodBtn = document.querySelectorAll(".catFoodBtn");
let detailPageBtn = document.querySelectorAll(".detail-page-btn");
let prevPageBtn = document.querySelectorAll(".previos-page-btn");

console.log(prevPageBtn);
let selfCookPage;
let catHistory;
const catHistoryInnerHTML = `<h2>餵食紀錄</h2>
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
const selfCookPageInnerHTML = `
<a href="" class="detail-page-btn"
><img src="img/pencil-square.svg" class="edit-btn" alt=""
/></a>
<div class="cat-head">
<div class="cat-info">
  <div class="cat-name">貓貓姓名</div>
  <div class="cat-weight">體重：5.2kg</div>
  <div class="cat-age">年齡：3歲</div>
</div>
<div class="cat-needed">
  貓貓今天還需要攝取<span class="green">200大卡</span>、<span
    class="blue"
    >150ml水分</span
  >
</div>
<div class="last-eating-time">
  上次吃飯：早上7點　 ＯＯ品牌飼料、130大卡
</div>

<div class="vaccine">
  <div class="last-vaccine">
    上次施打疫苗：2023/10/13 ＯＯ疫苗<br />
    下次施打疫苗：2024/02/20 ＯＯ疫苗
  </div>
  <div class="vaccine-page">
    <a href="">疫苗頁面</a>
  </div>
</div>

<div class="form">
  <form action="">
    <div class="ingredient">
      <label for="">食材</label>
      <input type="text" name="" id="" placeholder="輸入食材名稱" />
    </div>
    <div class="nutritions">
      <div class="protein">
        <p><label for="">蛋白質</label></p>
        <input
          type="number"
          name=""
          id=""
          placeholder="每100克蛋白質"
        />
      </div>
      <div class="fat">
        <p><label for="">脂肪</label></p>
        <input
          type="number"
          name=""
          id=""
          placeholder="每100克蛋白質"
        />
      </div>
    </div>
    <div class="last-nutrition">
      <div class="carbs">
        <p><label for="">碳水化合物</label></p>
        <input
          type="number"
          name=""
          id=""
          placeholder="每100克碳水化合物"
        />
      </div>
      <div class="nutrition-submit">
        <input type="submit" value="送出" />
      </div>
    </div>
  </form>
</div>
</div>
<div class="switch">
<a href="#" class='feed-history-btn'>餵食紀錄</a>
<a href="#" class='catFoodBtn'>切換飼料頁</a>
</div>`;
const firsCatInnerHTML = `<div class="cat" id="firstCat" style='padding-top: 30px'>
<a href="" class="detail-page-btn"
  ><img src="img/pencil-square.svg" class="edit-btn" alt=""
/></a>
<div class="cat-head">
  <div class="cat-info">
    <div class="cat-name">貓貓姓名</div>
    <div class="cat-weight">體重：5.2kg</div>
    <div class="cat-age">年齡：3歲</div>
  </div>
  <div class="cat-needed">
    貓貓今天還需要攝取<span class="green">200大卡</span>、<span
      class="blue"
      >150ml水分</span
    >
  </div>
  <div class="last-eating-time">
    上次吃飯：早上7點　 ＯＯ品牌飼料、130大卡
  </div>

  <div class="vaccine">
    <div class="last-vaccine">
      上次施打疫苗：2023/10/13 ＯＯ疫苗<br />
      下次施打疫苗：2024/02/20 ＯＯ疫苗
    </div>
    <div class="vaccine-page">
      <a href="">疫苗頁面</a>
    </div>
  </div>

  <div class="form">
    <form action="">
      <div class="select">
        <label for="">飼料</label>
        <select name="" id="">
          <option value="ＯＯ品牌飼料">ＯＯ品牌飼料</option>
          <option value="ＸＸ品牌飼料">ＸＸ品牌飼料</option>
          <option value="ＯＯ品牌主食罐">ＯＯ品牌主食罐</option>
        </select>
      </div>
      <div class="quantity">
        <label for="">份量</label>
        <input type="number" name="" id="" placeholder="請輸入克數" />
      </div>
      <div class="eating-time">
        <label for="">時間</label>
        <input type="time" name="" id="" placeholder="請輸入時間" />
      </div>
      <div class="submit">
        <input type="submit" value="送出" />
      </div>
    </form>
  </div>
</div>
<div class="switch">
  <a href="#" class="feed-history-btn">餵食紀錄</a>
  <a href="#" class="self-cook">切換自煮頁</a>
</div>
</div>`;
const detailPageInnerHTML = `<div class="cat" style='padding: 30px 0'>
<div class="cat-head">
  <div class="cat-info">
    <div class="cat-name">貓貓姓名 詳細資料</div>
  </div>

  <div class="detail">
    <div class="detail-flex">
      <div>體重：8.7公斤</div>
      <div>生日：不確定</div>
      <div>已結紮：是</div>
    </div>

    <div class="detail-flex">
      <div>年齡：10歲</div>
      <!-- <div>品種：別人家的貓</div> -->
      <div>活動量：懶懶貓</div>
      <div>特殊情形：過胖</div>
      <div class="edit-detail-btn"><a href="">編輯</a></div>
    </div>
  </div>
</div>
<div class="switch">
  <a href="" class="previos-page-btn">上一頁</a>
  <!-- <a href="">紀錄飲食</a> -->
</div>
</div>`;

console.log(cat);
console.log(feedHistory);

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
      item.innerHTML = firstCat.innerHTML;
      item.setAttribute("class", "cat");
      console.log(item);
      feedHistory = document.querySelectorAll(".feed-history-btn");
      selfCook = document.querySelectorAll(".self-cook");
      detailPageBtn = document.querySelectorAll(".detail-page-btn");
      prevPageBtn = document.querySelectorAll(".previos-page-btn");
      console.log(detailPageBtn);
      feedHistoryToggle();
      selfCookSwitch();
      detailPageSwitch();
      console.log(prevPageBtn);
      // catFoodSwitch();
      console.log(selfCook);
    }
  });
});

function feedHistoryToggle() {
  feedHistory = document.querySelectorAll(".feed-history-btn");
  feedHistory.forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log(item);
      console.log(catHistory);
      event.preventDefault();
      if (typeof catHistory == "undefined") {
        console.log(catHistory);
        catHistory = document.createElement("div");
        catHistory.className = "feed-history";
        catHistory.innerHTML = catHistoryInnerHTML;
      }
      console.log(item.parentElement.parentElement);
      item.parentElement.parentElement.parentElement.append(catHistory);
      const closeButton = document.querySelector(".close-button");
      console.log(closeButton);
      closeButton.addEventListener("click", (event) => {
        event.preventDefault();
        closeButton.parentElement.remove();
      });
    });
  });
}

function selfCookSwitch() {
  selfCook.forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log(item);
      event.preventDefault();
      if (typeof selfCookPage == "undefined") {
        selfCookPage = document.createElement("div");
        selfCookPage.className = "cat";
        selfCookPage.innerHTML = selfCookPageInnerHTML;
      }
      item.parentElement.parentElement.innerHTML = selfCookPage.innerHTML;
      catFoodBtn = document.querySelectorAll(".catFoodBtn");
      feedHistoryToggle();
      catFoodSwitch();
      detailPageSwitch();
    });
  });
}

let catFoodPage;
function catFoodSwitch() {
  catFoodBtn.forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log(item);
      event.preventDefault();
      console.log(item.parentElement.parentElement);
      if (typeof catFoodPage == "undefined") {
        item.parentElement.parentElement.innerHTML = firstCat.innerHTML;
      }
      selfCook = document.querySelectorAll(".self-cook");
      console.log(selfCook);
      selfCookSwitch();
      feedHistoryToggle();
      detailPageSwitch();
    });
  });
}

function detailPageSwitch() {
  detailPageBtn = document.querySelectorAll(".detail-page-btn");
  detailPageBtn.forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log(item.parentElement);
      event.preventDefault();
      item.parentElement.parentElement.innerHTML = detailPageInnerHTML;
      prevPageBtn = document.querySelectorAll(".previos-page-btn");
      console.log(prevPageBtn);
      prevPageSwitch();
    });
  });
}

function prevPageSwitch() {
  prevPageBtn.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(item.parentElement.parentElement.parentElement);
      item.parentElement.parentElement.innerHTML = firstCat.innerHTML;
      selfCook = document.querySelectorAll(".self-cook");
      catFoodBtn = document.querySelectorAll(".catFoodBtn");
      detailPageBtn = document.querySelectorAll(".detail-page-btn");
      prevPageBtn = document.querySelectorAll(".previos-page-btn");
      console.log(detailPageBtn);
      catFoodSwitch();
      selfCookSwitch();
      feedHistoryToggle();
      detailPageSwitch();
    });
  });
}
