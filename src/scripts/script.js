const getEl  = (id) => document.getElementById(id);

let options = {
  root: null,
  rootMargin: '150px',
  threshold: 0.5
}

let callbeck = function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('_active');
    } else {
              if (! entry.target.classList.contains("anim-no-hide")) {
                entry.target.classList.remove("_active");
              }
            }
  })
}

let observer = new IntersectionObserver(callbeck, options);

let targets = document.querySelectorAll('._anim-items');
targets.forEach(target => {
  observer.observe(target)
})

//scroll
window.smoothScroll = function(target) {
  let scrollContainer = target;
  do {
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);
  
  let targetY = 0;
  do { 
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);
  
  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

getEl('workBtn').addEventListener("click", () => {
  smoothScroll(getEl('header'));
  getEl('active').checked = false;
})
getEl('aboutBtn').addEventListener("click", () => {
  smoothScroll(getEl('presentation'));
  getEl('active').checked = false;
})
getEl('resumeBtn').addEventListener("click", () => {
  smoothScroll(getEl('portfolio'));
  getEl('active').checked = false;
})
getEl('contactBtn').addEventListener("click", () => {
  smoothScroll(getEl('startProject'));
  getEl('active').checked = false;
})
getEl('workBtnFooter').addEventListener("click", () => {
  smoothScroll(getEl('header'))
})
getEl('aboutBtnFooter').addEventListener("click", () => {
  smoothScroll(getEl('presentation'))
})
getEl('resumeBtnFooter').addEventListener("click", () => {
  smoothScroll(getEl('portfolio'))
})
getEl('contactBtnFooter').addEventListener("click", () => {
  smoothScroll(getEl('startProject'))
})