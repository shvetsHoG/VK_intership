const listFloor = document.querySelector('.floor');
const listRoom = document.querySelector('.room');

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