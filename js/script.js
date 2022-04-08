const searchHotelButton = document.querySelector('.open-form-button');
const searchHotelModal = document.querySelector('.hotel-search-modal');
const searchHotelForm = searchHotelModal.querySelector('.hotel-search-form');
const checkinDate = searchHotelModal.querySelector('[name="check-in-date"]');
const requiredItem = searchHotelModal.querySelector('[required]');

searchHotelButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchHotelModal.classList.add('modal-visible');
  checkinDate.focus();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchHotelModal.classList.contains('modal-visible')) {
      evt.preventDefault();
      searchHotelModal.classList.remove('modal-visible');
    }
  }

});

searchHotelForm.addEventListener("submit", function (evt) {
  if (requiredItem.value < 1) {
    evt.preventDefault();
    searchHotelModal.classList.toggle('modal-error');
  }
    });
