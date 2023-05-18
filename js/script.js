document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelectorAll('nav p');
  const section1 = document.querySelector('#main');
  const section2 = document.querySelector('#skill');
  const section3 = document.querySelector('#projects');
  const section4 = document.querySelector('#about');
  const section5 = document.querySelector('#contact');
  const top1 = section1.offsetTop;
  const top2 = section2.offsetTop;
  const top3 = section3.offsetTop;
  const top4 = section4.offsetTop;
  const top5 = section5.offsetTop;

  const menuArr = [
    top1, top2, top3, top4, top5
  ]

  // 카테고리 메뉴 클릭시 해당 offsetTop값으로 이동
  menuArr.forEach((arr, i) => {
    menu[i].onclick = () => {
      window.scroll({ top: arr, behavior: "smooth" })
    };
  });


  // skill section 스크롤시 텍스트 전환 애니메이션
  const activeElements = () => {
    let contents = document.querySelectorAll('.skill-left-area div');
    let skills = document.querySelectorAll('.skill-right-area div');
    let Scroll = window.scrollY;

    skills.forEach((skill, i) => {
      let Offset = skill.offsetTop - 100;

      if (Scroll > Offset) {
        contents[i].style.opacity = 1;
        if (Scroll > Offset + innerHeight) {
          contents[i].style.opacity = 0;
        }
      } else {
        contents[i].style.opacity = 0
      }
    });
  };

  window.addEventListener('scroll', activeElements);

  // project section 스크롤 애니메이션
  const observer1 = new IntersectionObserver((e) => {
    console.log(e)
    e.forEach((project) => {
      if (project.isIntersecting) {
        project.target.style.opacity = 1;
        project.target.style.transform = 'translateX(0)';
      }
    });
  });

  const deviceImg = document.querySelectorAll('.project img');
  const proContent = document.querySelectorAll('.project div');
  for (let i = 0; i < 4; i++) {
    observer1.observe(deviceImg[i]);
    observer1.observe(proContent[i]);
  }

  // about section 스크롤 애니메이션
  const observer2 = new IntersectionObserver((e) => {
    e.forEach((about) => {
      if (about.isIntersecting) {
        about.target.style.opacity = 1;
        about.target.style.transform = 'translateX(0)';
      }
    });
  });

  const title = document.querySelectorAll('h5');
  const perTitle = document.querySelector('.per-title');
  const intro = document.querySelector('.intro');
  const leftKeyword = document.querySelector('.left-keyword');
  const rightKeyword = document.querySelector('.right-keyword');
  const education = document.querySelector('.education');
  const experience = document.querySelector('.experience');
  for (let i = 0; i < 4; i++) {
    observer2.observe(title[i]);
  }
  observer2.observe(perTitle);
  observer2.observe(intro);
  observer2.observe(leftKeyword);
  observer2.observe(rightKeyword);
  observer2.observe(education);
  observer2.observe(experience);
});

// emailjs
const sendEmail = () => {
  let templateParams  = {
      name : document.getElementById('name').value,
      email : document.getElementById('email').value,
      message : document.getElementById('message').value,
  }
  emailjs.send('service_9xiq6nr', 'template_rl9hnii', templateParams)
  .then(function(res){
    alert("메일이 성공적으로 발송되었습니다.");
  }, function(error){
    console.log(error)
    alert("메일 전송에 실패했습니다.");
  })
}


// jquery
$(document).ready(function () {
  // 카테고리 토글
  $('.category').click(function () {
    $('nav').toggleClass('active');
  });
});