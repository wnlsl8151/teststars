function enterkey() {
    if (window.event.keyCode == 13) {
         document.getElementById("searchForm").submit();
    }
}

const images = document.querySelectorAll('.img');
let current = 0;

function showSlide() {
  for(let i=0; i<images.length; i++) {
    images[i].classList.remove('on');
  }
  current++;
  if(current > images.length) {
    current = 1;
  }
  images[current - 1].classList.add('on');
  setTimeout(showSlide, 7000);
}

showSlide();