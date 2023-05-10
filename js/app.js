const listFloor = document.querySelector('.floor');
const listRoom = document.querySelector('.room');
const buttonClear = document.querySelector('.wrapper__btns__clear');
const buttonConfirm = document.querySelector('.wrapper__btns__confirm');
const dropdowns = document.querySelectorAll('.dropdown__btn');
const comment = document.querySelector('.wrapper__comment');
const dateBtn = document.querySelector('.date__btn');

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

buttonClear.addEventListener("click", function() {
  dropdowns.forEach(dropdown => {
    dropdown.innerText = '';
    dropdown.dataset.value = null;
  });

  dateBtn.value = '';
  comment.value = '';

  dropdowns[0].innerText = "Выберите башню";
  dropdowns[1].innerText = "Выберите этаж";
  dropdowns[2].innerText = "Выберите комнату";
});

buttonConfirm.addEventListener("click", function() {
  const result = {
    tower: dropdowns[0].dataset.value,
    floor: dropdowns[1].dataset.value,
    room: dropdowns[2].dataset.value,
    date: dateBtn.value,
    text: comment.value,
  }

  console.log(JSON.stringify(result));
})