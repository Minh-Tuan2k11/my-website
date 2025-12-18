const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-nav');
const overlay = document.querySelector('.overlay');
const themeBtn = document.querySelector('.theme-btn');

// kích hoạt menu-btn
menuBtn.addEventListener('click',() =>{
    nav.classList.toggle('active');
    overlay.classList.toggle('active')
});

// xóa giá trị active khi nhấn vào lớp div. overlay
overlay.addEventListener('click',()=>{
    nav.classList.remove('active');
    overlay.classList.remove('active')
});

// thêm giá trị active cho main-nav a => xuất hiện menu
document.querySelectorAll('.main-nav a')
    .forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            overlay.classList.remove('active');
        });
    });

// gia diện sáng tối
themeBtn.addEventListener('click', () => {
    themeBtn.textContent = document.body.classList.toggle('dark')? '☀️' : '🌙';
});

// tăng độ mượt cho chuyển dạng pc => mobile
window.addEventListener('resize',()=>{
    if(window.innerWidth > 600){
        nav.classList.remove('active');
        overlay.classList.remove('active');
    }
});

// mô tả dự án
document.querySelectorAll('.skill-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
