export default class Popup {
  constructor() {
    this._popup = document.createElement('div');
    this._popup.classList.add('popup');
    this._popup.innerHTML = `
    <form class="popup-item">
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
    </form>
    <div class="popup-overlay"></div>
    `;

    this.btnSaveOnClick = this.btnSaveOnClick.bind(this);
    this.btnCancelOnClick = this.btnCancelOnClick.bind(this);
    this._btnSave = this._popup.querySelector('.popup-item-btn-save');
    this._btnCancel = this._popup.querySelector('.popup-item-btn-cancel');
    this._btnSave.addEventListener('click', this.btnSaveOnClick);
    this._btnCancel.addEventListener('click', this.btnCancelOnClick);
    this.rows = [];
  }

  showPopup() {
    document.body.appendChild(this._popup);
  }

  btnSaveOnClick(el) {
    el.preventDefault();
    const id = performance.now();
    const itemTitle = this._popup.querySelector('.popup-item-main-title-input').value.trim();
    const itemCost = this._popup.querySelector('.popup-item-main-cost-input').value.trim();
    const popupData = {
      id,
      title: itemTitle,
      cost: itemCost,
    };
    this.rows.push(popupData);
    this.btnCancelOnClick(el);
    this.createTableRow(popupData);
  }

  createTableRow(data) {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <td class="list-editor-table-title">title1</td>
    <td class="list-editor-table-cost">1000</td>
    <td>
        <button class="list-editor-table_update">&#9998;</button>
        <button class="list-editor-table_delete">&times;</button>
    </td>
    `;
    const rowTitleElement = tableRow.querySelector('.list-editor-table-title');
    const rowCostElement = tableRow.querySelector('.list-editor-table-cost');
    const table = document.querySelector('tbody');
    rowTitleElement.textContent = data.title;
    rowCostElement.textContent = data.cost;
    table.appendChild(tableRow);
  }

  btnCancelOnClick(el) {
    el.preventDefault();
    document.body.removeChild(this._popup);
  }
}
