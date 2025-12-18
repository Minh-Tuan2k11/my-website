const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-nav');
const overlay = document.querySelector('.overlay');
const themeBtn = document.querySelector('.theme-btn');
const elements = document.querySelectorAll('[data-reveal]');

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

// hiệu ứng lướt các mục
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[data-reveal]');

  if (elements.length > 0) {
    elements[0].classList.add('active');
    elements[0].dataset.state = 'active';
  }

  const T = { hide: 0.15, fade: 0.25, active: 0.65 };

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const el = entry.target;
        const ratio = entry.intersectionRatio;
        const state = el.dataset.state || 'hidden';

        if (state === 'hidden' && ratio >= T.fade) {
          el.dataset.state = 'fade';
          el.classList.add('fade');
        } 
        else if (state === 'fade' && ratio >= T.active) {
          el.dataset.state = 'active';
          el.classList.add('active');
          el.classList.remove('fade');
        } 
        else if (state === 'active' && ratio < T.fade) {
          el.dataset.state = 'fade';
          el.classList.remove('active');
          el.classList.add('fade');
        } 
        else if (state === 'fade' && ratio < T.hide) {
          el.dataset.state = 'hidden';
          el.classList.remove('fade');
        }
      });
    },
    { threshold: [T.hide, T.fade, T.active] }
  );

  elements.forEach(el => observer.observe(el));
});
const observer = new IntersectionObserver(callback, {
  threshold: [T.hide, T.fade, T.active],
  rootMargin: '-20% 0px'
});


document.querySelector('.logo').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.location.reload();
});
