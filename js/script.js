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

    const observer = new IntersectionObserver(
        entries => {
        entries.forEach(entry => {
            const el = entry.target;
            const ratio = entry.intersectionRatio;

            // RÕ NÉT NHẤT
            if (ratio >= 0.65) {
            el.classList.add('active');
            el.classList.remove('fade');
            }

            // MỜ NHẸ
            else if (ratio >= 0.25 && ratio < 0.65) {
            el.classList.add('fade');
            el.classList.remove('active');
            }

            // NGOÀI VIEWPORT → ẨN
            else if (ratio < 0.15) {
            el.classList.remove('active', 'fade');
            }
            // vùng đệm 0.15 → 0.25: KHÔNG LÀM GÌ
        });
        },
        {
        threshold: [0.15, 0.25, 0.65]
        }
    );

    elements.forEach(el => observer.observe(el));
});

document.querySelector('.logo').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.location.reload();
});
