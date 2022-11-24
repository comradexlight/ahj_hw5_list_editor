export default class Popup {
  constructor() {
    this._popup = document.createElement('form');
    this._popup.classList.add('popup-item');
    this._popup.innerHTML = `
    <div class="popup-item-main"></div>
        <div class="popup-item-main-title">Название</div>
        <input type="text" name="popup-item-main-title-input" class="popup-item-main-title-input">
        <div class="popup-item-main-cost">Стоимость</div>
        <input type="text" name="popup-item-main-cost-input" class="popup-item-main-cost-input">
    </div>
    <div class="popup-item-btn">
        <button class="popup-item-btn-save">Сохранить</button>
        <button class="popup-item-btn-cancel">Отмена</button>
    </div>
    `;
  }

  showPopup(el) {
    document.body.appendChild(this._popup);
  }

  removePopup(el) {
    console.log('remove');
  }
}
