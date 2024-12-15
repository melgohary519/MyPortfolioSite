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
  {
    name: "Research Skills",
    precent: "95%"
  },
  {
    name: "Web and Social Skills",
    precent: "90%"
  },

  // Library Systems
  {
    name: "Koha Library System",
    precent: "90%"
  },
  {
    name: "DSpace",
    precent: "90%"
  },

  // ERP & Business Tools
  {
    name: "Erpnext",
    precent: "70%"
  },

  // Frontend Development
  {
    name: "html, css, JavaScript",
    precent: "90%"
  },
  {
    name: "React.js",
    precent: "60%"
  },

  // Backend Development
  {
    name: "Laravel",
    precent: "90%"
  },
  {
    name: "Php",
    precent: "90%"
  },
  {
    name: "perl",
    precent: "90%"
  },
  {
    name: "Python programming language",
    precent: "90%"
  },
  {
    name: "Reset APIs",
    precent: "90%"
  },
  {
    name: "Kotlin",
    precent: "70%"
  },
  {
    name: "C# programming language",
    precent: "90%"
  },
  {
    name: "Java Programming Language",
    precent: "80%"
  },
  {
    name: "Mongodb",
    precent: "60%"
  },
  {
    name: "Mysql",
    precent: "70%"
  },
  {
    name: "Mariadb",
    precent: "70%"
  },

  // System Administration & DevOps
  {
    name: "Linux Ubuntu",
    precent: "90%"
  },
  {
    name: "Unix Administration",
    precent: "80%"
  },
  {
    name: "Bash",
    precent: "80%"
  },
  {
    name: "DNS",
    precent: "90%"
  },
  {
    name: "Reqular Expressions",
    precent: "80%"
  },
  {
    name: "Git & Githup",
    precent: "90%"
  },
  {
    name: "vim",
    precent: "90%"
  },
  {
    name: "Linx Administration",
    precent: "80%"
  },

  // Media & Design Tools
  {
    name: "Adobe Photoshop",
    precent: "50%"
  },
  {
    name: "Adobe Illustrator",
    precent: "50%"
  },
  {
    name: "Camtasia",
    precent: "80%"
  },



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
let testimonialContainer = [{
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





const services = [{
    title: {
      arabic: "تصميم وبرمجة المواقع",
      english: "Web Development"
    },
    description: {
      arabic: "تطوير مواقع احترافية باستخدام HTML, CSS, JavaScript وأطر العمل مثل Laravel و LiveWire.",
      english: "Develop professional websites using HTML, CSS, JavaScript, and frameworks like Laravel and LiveWire."
    },
    icon: "bi bi-laptop"
  },
  {
    title: {
      arabic: "تطوير تطبيقات الهواتف",
      english: "Mobile App Development"
    },
    description: {
      arabic: "إنشاء تطبيقات الهواتف بنظامي Android و iOS باستخدام Flutter و Kotlin.",
      english: "Create mobile apps for Android and iOS using Flutter and Kotlin."
    },
    icon: "bi bi-phone"
  },
  {
    title: {
      arabic: "تصميم تجربة المستخدم",
      english: "UI/UX Design"
    },
    description: {
      arabic: "تصميم واجهات مستخدم حديثة وجذابة باستخدام أدوات مثل Figma و Adobe XD.",
      english: "Design modern and attractive user interfaces using tools like Figma and Adobe XD."
    },
    icon: "bi bi-palette"
  },
  {
    title: {
      arabic: "إدارة قواعد البيانات",
      english: "Database Management"
    },
    description: {
      arabic: "تصميم وإدارة قواعد البيانات باستخدام MySQL و MariaDB.",
      english: "Design and manage databases using MySQL and MariaDB."
    },
    icon: "bi bi-database"
  },
  {
    title: {
      arabic: "تطوير لوحات التحكم",
      english: "Admin Dashboards"
    },
    description: {
      arabic: "تصميم لوحات تحكم ديناميكية لإدارة التطبيقات والمواقع بسهولة.",
      english: "Design dynamic dashboards for managing applications and websites easily."
    },
    icon: "bi bi-ui-checks"
  },
  {
    title: {
      arabic: "تطوير واجهات برمجة التطبيقات",
      english: "API Development"
    },
    description: {
      arabic: "بناء واجهات برمجة تطبيقات APIs عالية الأداء باستخدام RESTful و GraphQL.",
      english: "Build high-performance APIs using RESTful and GraphQL."
    },
    icon: "bi bi-link-45deg"
  },
  {
    title: {
      arabic: "حلول التجارة الإلكترونية",
      english: "E-commerce Solutions"
    },
    description: {
      arabic: "تصميم وتطوير متاجر إلكترونية متكاملة مع أنظمة الدفع والشحن.",
      english: "Design and develop integrated e-commerce stores with payment and shipping systems."
    },
    icon: "bi bi-cart"
  },
  {
    title: {
      arabic: "تحسين أداء المواقع",
      english: "SEO and Optimization"
    },
    description: {
      arabic: "تحسين ظهور المواقع في محركات البحث (SEO) وزيادة سرعة التحميل.",
      english: "Optimize website visibility in search engines (SEO) and increase page load speed."
    },
    icon: "bi bi-search"
  },
  {
    title: {
      arabic: "إدارة السيرفرات",
      english: "Server Management"
    },
    description: {
      arabic: "إدارة السيرفرات وصيانتها باستخدام أنظمة Linux و Docker.",
      english: "Managing and maintaining servers using Linux and Docker systems."
    },
    icon: "bi bi-server"
  },
  {
    title: {
      arabic: "ERP تطوير حلول ",
      english: "Enterprise Resource Planning"
    },
    description: {
      arabic: "إنشاء وتخصيص أنظمة ERP لإدارة موارد الشركات باستخدام ERPNext.",
      english: "Create and customize ERP systems for managing business resources using Odoo and ERPNext."
    },
    icon: "bi bi-boxes"
  },
  {
    title: {
      arabic: "Koha خدمات ",
      english: "Koha Services"
    },
    description: {
      arabic: "تقديم حلول متكاملة لإدارة المكتبات باستخدام نظام Koha, بما في ذلك التخصيص والتطوير.",
      english: "Provide integrated library management solutions using Koha, including customization and development."
    },
    icon: "bi bi-book"
  },
  {
    title: {
      arabic: "DSpace خدمات ",
      english: "DSpace Services"
    },
    description: {
      arabic: "تطوير وتخصيص أنظمة DSpace لإدارة الأبحاث والمحتوى الرقمي.",
      english: "Develop and customize DSpace systems for managing research and digital content."
    },
    icon: "bi bi-database"
  },
  {
    title: {
      arabic: "خدمات أخرى حسب الطلب",
      english: "Custom Services"
    },
    description: {
      arabic: "خدمات مخصصة لتلبية احتياجات العملاء، سواء تطوير برمجيات أو تحسينات إضافية.",
      english: "Custom services to meet client needs, whether it's software development or additional improvements."
    },
    icon: "bi bi-sliders"
  },

];


const servicesContainer = document.getElementById("services-container");
services.forEach(service => servicesContainer.innerHTML += `
    <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
        <div class="icon flex-shrink-0"><i class="${service.icon}"></i></div>
        <div>
            <h4 class="title">
              <span href="" class="stretched-link">${service.title.english}</span>
              <br>
              <span href="" class="stretched-link arabic-title">${service.title.arabic}</span>
            </h4>
            <p class="description">${service.description.arabic}</p>
        </div>
    </div>
`);



// Courses
let courses = [
  {
    name: "Mobile Application Android Development",
    provider: "Russian Culture Center",
    url: "local"
  },
  {
    name: "Cyber Security",
    provider: "NTI",
    url: "local"
  },
  {
    name: "Programming using Python language",
    provider: "Edraak",
    url: "https://courses.edraak.org/certificates/53602a7092f84afeb08b19c340b74c77"
  },
  {
    name: "Front End Web Development Professional",
    provider: "Udacity",
    url: "https://confirm.udacity.com/DD9ZCWHV"
  },
  {
    name: "Perl 5 Essential Training",
    provider: "linkedin",
    url: "https://www.linkedin.com/learning/certificates/8bc1be6c643d3d3d0fcac687399d1f279d4978c56264c74520fedabc9aa69c68"
  },
  {
    name: "Web Scraping with Python",
    provider: "linkedin",
    url: "https://www.linkedin.com/learning/certificates/2dc150b7e9b8226a4768e6b365566eb0d7fc24aef519f025318b9bde1629888b"
  },
  {
    name: "Learning Regular Expressions",
    provider: "linkedin",
    url: "https://www.linkedin.com/learning/certificates/1ff6ac9467bea637905561f4cd9b1d5ab3f4dc690466806277601bc46f210cab"
  },
  {
    name: "Using Python for Automation",
    provider: "linkedin",
    url: "https://www.linkedin.com/learning/certificates/003302dad0ea0aa913bdceca512542f55386ac60ee85dc36aa548ad3c7541e78"
  },
  {
    name: "Building RESTful APIs in Laravel",
    provider: "linkedin",
    url: "https://www.linkedin.com/learning/certificates/108e8c5540cdfe9065bd8881ec8e0706a4ce7772c9cccd5535568bc4c5ff39f5"
  },
  {
    name: "Ubuntu Linux: Essential Commands",
    provider: "linkedin",
    url: "https://www.linkedin.com/learning/certificates/7c1e9fe47bfab4ca2d03bcbda0f7341a40112de720c9e5ffed244c941076e8c3"
  },
  {
    name: "Learning DNS",
    provider: "linkedin",
    url: "https://www.linkedin.com/learning/certificates/a8e01922b1650043f9f5d517f4dd8920f9dbf06f23fde121ec448c34d85417f0"
  },
  {
    name: "Learning Vim",
    provider: "linkedin",
    url: "https://www.linkedin.com/learning/certificates/49de1ab4247ae4d26c3b1f2c34415f82926c1d46cd9701fdd749a0d6247adc29"
  },
  {
    name: "Git Essential Training",
    provider: "linkedin",
    url: "https://www.linkedin.com/learning/certificates/a42d7b31cb5b322aa7e2033cc5872e1dda0871189dddb613edc6bb250e20e061"
  },
  {
    name: "React Hooks",
    provider: "linkedin",
    url: "https://www.linkedin.com/learning/certificates/73c313c7b17400106aa8b301cfff6ece847bf0a784b04aa259ad884b6fc906cc"
  },
  {
    name: "Building Modern Projects with React",
    provider: "linkedin",
    url: "https://www.linkedin.com/learning/certificates/84390c5183005615fefcade086f994afc21f867da63de6b43ae13da75b04af25"
  },
  {
    name: "Building Modern UIs with React Router v6",
    provider: "linkedin",
    url: "https://www.linkedin.com/learning/certificates/0e6ffbef8a29e3a7c201f1f85df88d3cf34292fe6d8f4de3ebbe02940248a4d8"
  },
  {
    name: "React: Testing and Debugging",
    provider: "linkedin",
    url: "https://www.linkedin.com/learning/certificates/14b8b6cb4fb4ff19b3a52a6a944a0dc6db5148e9d2c50c6eed42e94c5d2d4d63"
  },
  {
    name: "React.js: Building an Interface",
    provider: "linkedin",
    url: "https://www.linkedin.com/learning/certificates/cfda6bdf3e4491811b7e56b4f7d48ce603f715e7569f9f219bb5d7880622969e"
  },
  {
    name: "Php",
    provider: "Sololearn",
    url: "https://www.sololearn.com/certificates/CT-I2IL4PC8"
  },
  {
    name: "Introduction to JavaScript",
    provider: "Sololearn",
    url: "https://www.sololearn.com/certificates/CC-J07RYNFP"
  },
  {
    name: "The Complete 2022 Flutter & Dart Development Course",
    provider: "Udemy",
    url: "https://www.udemy.com/certificate/UC-24d784aa-ff92-4c39-92e7-24c33b3ade8f/"
  },
  {
    name: "CSS - Basics to Adv for front end development",
    provider: "Udemy",
    url: "https://www.udemy.com/certificate/UC-c9a6c3ec-bea1-4d2c-ae64-70f255f8ef05/"
  },
  {
    name: "PHP with Laravel for beginners",
    provider: "Udemy",
    url: "https://www.udemy.com/certificate/UC-a22c421a-f7e6-4acb-b429-60d977d1c644/"
  },
  {
    name: "The Complete HTML5 Course",
    provider: "Udemy",
    url: "https://www.udemy.com/certificate/UC-7a35ca8b-081f-44f4-a5cb-d083ca9efaec/"
  },
  {
    name: "jQuery for Absolute Beginners",
    provider: "Udemy",
    url: "https://www.udemy.com/certificate/UC-b230a6d0-e93c-4b4c-a856-08745b11dd26/"
  },
  {
    name: "Creating Video Lessons with Online Video Maker InVideo",
    provider: "Udemy",
    url: "https://www.udemy.com/certificate/UC-586c0b1f-52a2-411f-ac20-4e04240826de/"
  },
  {
    name: "How to Install a Free SSL Certificate using Let's Encrypt",
    provider: "Udemy",
    url: "https://www.udemy.com/certificate/UC-5aec72af-99bd-4e21-ac44-6a870869a17c/"
  },
  {
    name: "Linode: Foundations of Web Server Security",
    provider: "Udemy",
    url: "https://www.udemy.com/certificate/UC-a876abca-6b7c-4bd5-8496-dee888663978/"
  },
]

document.getElementById("coursesContainer").innerHTML = courses.map(course =>
  `
    <li>${course.name}</li>
  `
).join('');





// projects
let projectsCategory = [
  {
    title: "All",
    filter: "*",
  },
  {
    title: "WebSite",
    filter: ".filter-web",
  },
  {
    title: "Mobile Apps",
    filter: ".filter-mobile",
  },
  {
    title: "Erp",
    filter: ".filter-erp",
  },
  {
    title: "koha",
    filter: ".filter-koha",
  },
  {
    title: "dspace",
    filter: ".filter-dspace",
  }
]
document.querySelector("#projects-category").insertAdjacentHTML('beforeend',projectsCategory.map( cat => 
  `<li data-filter="${cat.filter}" >${cat.title}</li>`
).join(''));
document.querySelector("#projects-category li").classList.add("filter-active")


let projects = [
  {
    name: "ForSkin",
    desc: "",
    image: "",
    videoId: "SMA8t1jBexI",
    filter: "filter-mobile"
  }
]


const projectsContainer = document.querySelector("#projectsContainer");
projects.forEach(project =>{
  let content = ""
  if (project.image != "") {
    content = `
      <div class="col-lg-4 col-md-6 project-item isotope-item ${project.filter}">
        <div class="project-content h-100">
          <img src="${project.image}" class="img-fluid" alt="">
          <div class="project-info">
            <!-- <h4>App 1</h4> -->
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <a href="assets/img/projects/app-1.jpg" title="App 1" data-gallery="project-gallery-app"
              class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
            <!-- <a href="project-details.html" title="More Details" class="details-link"><i
                class="bi bi-link-45deg"></i></a> -->
          </div>
        </div>
      </div>
    `;
  } else {
    content = `
      <div class="col-lg-4 col-md-6 project-item isotope-item ${project.filter}">
        <div class="project-content h-100">
          <iframe class="img-fluid" width="100%" height="315" src="https://www.youtube.com/embed/${project.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `;
  }
  projectsContainer.innerHTML += content;
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
      if (isotopeItem.querySelector('.isotope-filters .filter-active') != null) {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
      }
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