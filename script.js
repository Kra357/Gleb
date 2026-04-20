// Функция создания фото при клике на кнопку
function showPhotoWithBorder() {
  // Создаём новый элемент img
  const photo = document.createElement("img");

  // Берём ту же фотографию
  photo.src = "img/Group 7.jpg";
  photo.className = "photo-container";

  // Случайная позиция на экране
  const randomX = Math.random() * (window.innerWidth - 200);
  const randomY = Math.random() * (window.innerHeight - 200);

  photo.style.left = randomX + "px";
  photo.style.top = randomY + "px";

  // Добавляем на страницу
  document.body.appendChild(photo);

  // Удаляем фото через 2 секунды
  setTimeout(() => {
    photo.remove();
  }, 2000);
}

// Находим кнопку
const button = document.querySelector(".morning button");

// Вешаем обработчик клика на кнопку
if (button) {
  button.addEventListener("click", function (event) {
    event.stopPropagation(); // Чтобы ничего не мешало
    showPhotoWithBorder(); // Показываем 1 фото с обводкой
  });
}
