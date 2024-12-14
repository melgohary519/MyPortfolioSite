/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function (direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();



let professional_skills = [

  // Research & Soft Skills
  { name: "Research Skills", precent: "95%" },
  { name: "Web and Social Skills", precent: "90%" },

  // Library Systems
  { name: "Koha Library System", precent: "90%" },
  { name: "DSpace", precent: "90%" },

  // ERP & Business Tools
  { name: "Erpnext", precent: "70%" },

  // Frontend Development
  { name: "html, css, JavaScript", precent: "90%" },
  { name: "React.js", precent: "60%" },

  // Backend Development
  { name: "Laravel", precent: "90%" },
  { name: "Php", precent: "90%" },
  { name: "perl", precent: "90%" },
  { name: "Python programming language", precent: "90%" },
  { name: "Reset APIs", precent: "90%" },
  { name: "Kotlin", precent: "70%" },
  { name: "C# programming language", precent: "90%" },
  { name: "Java Programming Language", precent: "80%" },
  { name: "Mongodb", precent: "60%" },
  { name: "Mysql", precent: "70%" },
  { name: "Mariadb", precent: "70%" },

  // System Administration & DevOps
  { name: "Linux Ubuntu", precent: "90%" },
  { name: "Unix Administration", precent: "80%" },
  { name: "Bash", precent: "80%" },
  { name: "DNS", precent: "90%" },
  { name: "Reqular Expressions", precent: "80%" },
  { name: "Git & Githup", precent: "90%" },
  { name: "vim", precent: "90%" },
  { name: "Linx Administration", precent: "80%" },

  // Media & Design Tools
  { name: "Adobe Photoshop", precent: "50%" },
  { name: "Adobe Illustrator", precent: "50%" },
  { name: "Camtasia", precent: "80%" },



];



const containers = [
  document.getElementById("skills-container"),
  document.getElementById("skills-container2")
];
const createSkillHTML = (item) => `
  <div class="progress">
    <span class="skill"><span>${item.name}</span> <i class="val">${item.precent}</i></span>
    <div class="progress-bar-wrap">
      <div class="progress-bar" role="progressbar" aria-valuenow="${item.precent}" aria-valuemin="0" aria-valuemax="100" style="width: ${item.precent};"></div>
    </div>
  </div>
`;
professional_skills.forEach((skill, index) => {
  const targetContainer = containers[index % 2];
  targetContainer.innerHTML += createSkillHTML(skill);
});



// Testimonial
let testimonialContainer = [
  {
    name: "Ahmed Alnaasan",
    evaluation: "عمل رائع واحترافي يعكس خبرته ويحترم المواعيد انصح الجميع بالتعامل معه ، انا سعيد جدا بتجرتبي معه ، وسوف يكون هناك اعمال اخرى بالمستقبل القريب",
    raing: 5,
    evaluationUrl: "https://mostaql.com/u/elgohary_0/reviews/8292546"
  },
  {
    name: "محمد فرحان شوك",
    evaluation: "يستحق ان يكون رفيق نجاحك في مشروعك شخص مميز طموح يجعل من نفسه مميز بكل شي صبور متعاون والاهم من ذلك امين وصادق شكراً لك على كل شي",
    raing: 5,
    evaluationUrl: "https://mostaql.com/u/elgohary_0/reviews/6887791"
  },
  {
    name: "Mostafa Samir",
    evaluation: "تسلم حضرتك وان شاء نتشرف في العمل مره اخري",
    raing: 5,
    evaluationUrl: "https://mostaql.com/u/elgohary_0/reviews/6868705"
  },
  {
    name: "Abo Soliman",
    evaluation: "ممتاز جزاه الله خيرا...انصح بالتعامل معه",
    raing: 5,
    evaluationUrl: "https://mostaql.com/u/elgohary_0/reviews/6626621"
  },
  {
    name: "Ahmed Emad",
    evaluation: "بشمهندس محمد شاطر جدا و متابع جيد جدا معاك خطوه ب خطوه وبيحل كل المشكلات ب بساطه انصح بالتعامل معه",
    raing: 5,
    evaluationUrl: "https://mostaql.com/u/elgohary_0/reviews/6331782"
  },
  // {
  //   name: "",
  //   evaluation: "",
  //   raing: 5
  // },

]
document.getElementById("testimonial-container").innerHTML = testimonialContainer.map(item =>
  `
  <div class="swiper-slide">
      <div class="testimonial-item">
      <img src="assets/img/testimonials/personal-mail-svgrepo-com.svg" class="testimonial-img" alt="">
      <h3>${item.name}</h3>
      <p>
        <i class="bi bi-quote quote-icon-left"></i>
        <span>${item.evaluation}</span>
        <i class="bi bi-quote quote-icon-right"></i>
        <br>
        <a href="${item.evaluationUrl}">Click here to valideate evaluation</a>
      </p>
      
      <!-- <h4>Ceo &amp; Founder</h4> -->
    </div>
  </div>
  `
).join('');