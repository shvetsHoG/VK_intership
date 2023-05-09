const listFloor = document.querySelector('.floor');
const listRoom = document.querySelector('.room');
const buttonClear = document.querySelector('.wrapper__btns__clear');
const buttonConfirm = document.querySelector('.wrapper__btns__confirm');
const dropdowns = document.querySelectorAll('.dropdown__btn');
const comment = document.querySelector('.wrapper__comment');

function clear() {
  dropdowns.forEach(dropdown => {
    dropdown.innerText = '';
    dropdown.dataset.value = null;
  });
  comment.value = '';
  dropdowns[0].innerText = "Выберите башню";
  dropdowns[1].innerText = "Выберите этаж";
  dropdowns[2].innerText = "Выберите комнату";
  dropdowns[3].innerText = "Выберите дату";
}

for (let floor = 3; floor < 28; ++floor) {
  const item = document.createElement('li');
  item.classList.add("dropdown__list-item");
  item.dataset.value = floor;
  listFloor.appendChild(item);
  item.innerText = floor;
}

for (let room = 1; room < 11; ++room) {
  const item = document.createElement('li');
  item.classList.add("dropdown__list-item");
  item.dataset.value = room;
  listRoom.appendChild(item);
  item.innerText = room;
}

buttonClear.addEventListener("click", clear());

buttonConfirm.addEventListener("click", function() {
  dropdowns.forEach(dropdown => {
    console.log(dropdown.dataset.value);
  });
  console.log(comment.value);
  clear();
})