// 找到表單元素
const form = document.querySelector('form');

// 監聽表單提交事件
form.addEventListener('submit', (event) => {
  event.preventDefault(); // 阻止表單預設提交行為

  // 獲取表單中的值
  const startDate = document.getElementById('startDate').value;
  const timeRange = document.getElementById('timeRange').value;
  const starttime = document.getElementById('starttime').value;
  const starPeople = document.getElementById('starPeople').value;
  const starName = document.getElementById('starName').value;
  const starTel = document.getElementById('starTel').value;
  // ... 其他欄位的值

  // 組合要顯示在確認視窗中的訊息
  const message = `
    您確認以下訂位資訊嗎？<br><br>
    * 日期：${startDate}<br>
    * 分店：${timeRange}<br>
    * 時間：${starttime}<br>
    * 人數：${starPeople}<br>
    * 訂位姓名：${starName}<br>
    * 訂位電話：${starTel}
  `;

  // 使用 SweetAlert2 顯示確認視窗
  Swal.fire({
    title: '確認訂位',
    html: message,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: '確認',
    cancelButtonText: '取消',
    // customClass: {
    //   popup: 'my-popup'
    // }
  }).then((result) => {
    if (result.isConfirmed) {
      // 使用者按下確認，跳轉回首頁
      window.location.href = "https://www.google.co.uk/"; // 將 "/" 改為你的首頁網址
    }
  });
});



// 評論卡片



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



//招牌料理 

let prev = document.getElementById('prev');
let next = document.getElementById('next');
let image = document.querySelector('.images');
let items = document.querySelectorAll('.images .item');
let contents = document.querySelectorAll('.content .item');

let rotate = 0;
let active = 0;
let countItem = items.length;
let rotateAdd = 360 / countItem;

function nextSlider() {
  active = active + 1 > countItem - 1 ? 0 : active + 1;
  rotate = rotate + rotateAdd;
  show();
}
function prevSlider() {
  active = active - 1 < 0 ? countItem - 1 : active - 1;
  rotate = rotate - rotateAdd;
  show();

}
function show() {
  image.style.setProperty("--rotate", rotate + 'deg');
  image.style.setProperty("--rotate", rotate + 'deg');
  contents.forEach((content, key) => {
    if (key == active) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  })
}
next.onclick = nextSlider;
prev.onclick = prevSlider;
const autoNext = setInterval(nextSlider, 3000);


// 所有.smoove共用
$('.smoove').smoove({
  // offset整數預設為像素，不加引號，%要加。
  offset: '40%'
});