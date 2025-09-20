// لیست بخش دوره ها
// const coursesBtn = document.getElementById('coursesBtn');
// const coursesMenu = document.getElementById('coursesMenu');

// coursesBtn.addEventListener('click', () => {
//   // toggle نمایش یا پنهان کردن منو
//   if(coursesMenu.style.display === 'block'){
//     coursesMenu.style.display = 'none';
//   } else {
//     coursesMenu.style.display = 'block';
//   }
// });


//  جاوااسکریپت: انیمیشن‌ها، تعاملات 

/* ===== Promo bar ===== */
// const promo = document.getElementById('promoBar');
// document.getElementById('closePromo').addEventListener('click', ()=> promo.style.display='none');
// document.getElementById('promoCT').addEventListener('click', ()=> {
//   document.getElementById('courses').scrollIntoView({behavior:'smooth'});
// });

/* ===== account / notif (نمونه) ===== */
document.getElementById('accountBtn').addEventListener('click', (e)=>{
  alert('پنل حساب کاربری — اینجا می‌توانید سیستم ورود/ثبت‌نام را وصل کنید.');
});

/* ===== Blueprint line drawing هنگام اسکرول ===== */
const blueprint = document.getElementById('blueprintCanvas');
function drawBlueprint(){
  if(!blueprint) return;
  // ساده: اضافه کردن SVG خطوط (می‌توانید پیچیده‌تر کنید)
  blueprint.innerHTML = `
  <svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
    <defs>
      <linearGradient id="g1" x1="0" x2="1"><stop offset="0" stop-color="#d8eae2"/><stop offset="1" stop-color="#bfe0d4"/></linearGradient>
    </defs>
    <rect x="12" y="12" width="576" height="356" fill="transparent" stroke="rgba(15,91,72,.06)" stroke-width="1"/>
    <g stroke="#0f5b48" opacity="0.12" stroke-width="1.6">
      <path d="M18 40 L580 40" />
      <path d="M18 120 L580 120" />
      <path d="M18 200 L580 200" />
      <path d="M18 280 L580 280" />
      <path d="M150 12 L150 368" />
      <path d="M300 12 L300 368" />
      <path d="M450 12 L450 368" />
    </g>
    <!-- یک کمپس انیمیت‌شونده -->
    <g id="compass" transform="translate(460,260)">
      <circle r="36" fill="none" stroke="#0f5b48" stroke-width="1.2" opacity="0.12"/>
      <path d="M0 -20 L10 12 L-18 8 Z" fill="#0f5b48"/>
    </g>
  </svg>
  `;
  // انیمیشن چرخش کمپس:
  const compass = document.querySelector('#compass');
  if(compass) compass.animate([{transform:'translate(460px,260px) rotate(0deg)'},{transform:'translate(460px,260px) rotate(360deg)'}], {duration:12000, iterations:Infinity});
}
let blueprintDrawn=false;
window.addEventListener('scroll', ()=>{
  const rect = blueprint.getBoundingClientRect ? blueprint.getBoundingClientRect() : null;
  if(rect && rect.top < window.innerHeight - 120 && !blueprintDrawn){
    drawBlueprint(); blueprintDrawn=true;
  }
});

/* ===== Certificates carousel (auto-scroll) ===== */
const certs = document.getElementById('certCarousel');
if(certs){
  let pos = 0;
  setInterval(()=>{
    pos -= 220;
    if(Math.abs(pos) > certs.scrollWidth - certs.clientWidth) pos = 0;
    certs.scrollTo({ left: Math.abs(pos), behavior:'smooth' });
  }, 2800);
}

/* ===== Projects lightbox ===== */
const projects = document.querySelectorAll('.project');
const lightbox = document.getElementById('lightbox');
const lightImg = document.getElementById('lightImg');
const lightTitle = document.getElementById('lightTitle');
projects.forEach(p=>{
  p.addEventListener('click',()=>{
    const src = p.getAttribute('data-img') || p.querySelector('img').src;
    const title = p.querySelector('.overlay strong') ? p.querySelector('.overlay strong').innerText : 'پروژه';
    lightImg.src = src;
    lightTitle.innerText = title;
    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden','false');
  });
});
document.getElementById('closeLight').addEventListener('click', ()=> {
  lightbox.style.display='none';
  lightbox.setAttribute('aria-hidden','true');
});
lightbox.addEventListener('click', (e)=> { if(e.target === lightbox) { lightbox.style.display='none'; lightbox.setAttribute('aria-hidden','true'); } });

/* ===== Sticky-card keyboard accessibility & focus effects (نمایش جزئیات) ===== */
document.querySelectorAll('.sticky-card').forEach(card=>{
  card.addEventListener('click', ()=> {
    // باز کردن مودال یا هدایت به صفحهٔ دوره (نمونه سریع)
    alert('رفتن به صفحهٔ دوره: ' + card.closest('.sticky-wrap').dataset.course);
  });
  card.addEventListener('keydown', (e)=> { if(e.key === 'Enter') card.click(); });
});

/* ===== کوچک‌سازی header در اسکرول (حرفه‌ای) ===== */
let lastScroll=0;
const header = document.querySelector('header');
window.addEventListener('scroll', ()=>{
  const s = window.scrollY;
  if(s > 80) header.style.transform = 'translateY(-8px) scale(.995)';
  else header.style.transform = 'none';
  lastScroll = s;
});


// question
 const buttons = document.querySelectorAll(".accordion-button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      const icon = btn.querySelector(".accordion-icon");
      const isActive = btn.classList.contains("active");

      // بستن همه
      document.querySelectorAll(".accordion-button").forEach((b) => {
        b.classList.remove("active");
        b.nextElementSibling.classList.remove("show");
        b.querySelector(".accordion-icon").textContent = "+";
      });

      // باز کردن همونی که کلیک شد
      if (!isActive) {
        btn.classList.add("active");
        panel.classList.add("show");
        icon.textContent = "−";
      }
    });
  });




const heroEnroll = document.getElementById("heroEnroll"); // دکمه داخل Hero
const closeBtn = document.getElementById("closeFormBtn"); // دکمه ✕
const formSection = document.getElementById("registerForm"); // مودال

// باز کردن فرم
heroEnroll.addEventListener("click", () => {
  formSection.classList.remove("hidden");
});

// بستن فرم
closeBtn.addEventListener("click", () => {
  formSection.classList.add("hidden");
});

// بستن با کلیک روی بک‌گراند تاریک
formSection.addEventListener("click", (e) => {
  if (e.target === formSection) {
    formSection.classList.add("hidden");
  }
});




function showModal() {
  document.getElementById("modalOverlay").style.display = "flex";
}

function openWeb() {
  window.open("https://mail.google.com/mail/?view=cm&fs=1&to=youremail@gmail.com", "_blank");
  document.getElementById("modalOverlay").style.display = "none";
}

function openApp() {
  window.location.href = "mailto:youremail@gmail.com";
  document.getElementById("modalOverlay").style.display = "none";
}

// دکمه بستن فرم سوال ایمیل
function closeModal() {
 document.getElementById("modalOverlay").style.display = "none";
}
document.getElementById("closeBtn").addEventListener("click", closeModal);


