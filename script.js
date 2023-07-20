const img = document.querySelector('.img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let count = 1;

prevNext();
function prevNext() {
  switch (count) {
    case 1:
      prev.style.display = 'none';
      break;
    case 4:
      next.style.display = 'none';
      break;
    default:
      next.style.display = 'block';
      prev.style.display = 'block';
  }
}

next.addEventListener('click', () => {
  ++count;
  img.src = `/images/image${count}.jpg`;
  prevNext();
});

prev.addEventListener('click', () => {
  --count;
  img.src = `/images/image${count}.jpg`;
  prevNext();
});
