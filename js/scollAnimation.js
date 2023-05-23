document.addEventListener('DOMContentLoaded', function () {

  // skill section 스크롤시 텍스트 전환 애니메이션
  const activeElements = () => {
    let contents = document.querySelectorAll('.skill-left-area div');
    let skills = document.querySelectorAll('.skill-right-area div');
    let Scroll = window.scrollY;

    skills.forEach((skill, i) => {
      let Offset = skill.offsetTop - 100;

      if (Scroll > Offset) {
        Scroll > Offset + innerHeight ?
          contents[i].style.opacity = 0
          : contents[i].style.opacity = 1;
      } else {
        contents[i].style.opacity = 0
      }
    });
  };

  window.addEventListener('scroll', activeElements);

  // mobile skill section 스크롤 애니메이션
  const mobObserver = new IntersectionObserver((e) => {
    e.forEach((mobSkill) => {
      if (mobSkill.isIntersecting) {
        mobSkill.target.style.opacity = 1;
        mobSkill.target.style.transform = 'translateX(0)';
      }
    });
  });

  const mobSkill = document.querySelectorAll('.m-skill-left-area div');
  for (let i = 0; i < 4; i++) {
    mobObserver.observe(mobSkill[i]);
  };

  // project section 스크롤 애니메이션
  const observer1 = new IntersectionObserver((e) => {
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
  };

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
  const perTitle = document.querySelector('.key-text');
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
