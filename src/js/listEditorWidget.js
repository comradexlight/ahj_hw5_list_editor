export default class ListEditorWidget {
  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    this._element = element;
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
    this.btnCreateOnClick = this.btnCreateOnClick.bind(this);
    this.btnSaveOnClick = this.btnSaveOnClick.bind(this);
    this.btnCancelOnClick = this.btnCancelOnClick.bind(this);
    this._btnCreate = this._element.querySelector('.list-editor-head_create');
    this._btnsUpdate = this._element.querySelectorAll('.list-editor-table_update');
    this._btnsDelete = this._element.querySelectorAll('.list-editor-table_delete');
    this._btnSave = this._popup.querySelector('.popup-item-btn-save');
    this._btnSave.addEventListener('click', this.btnSaveOnClick);
    this._btnCancel = this._popup.querySelector('.popup-item-btn-cancel');
    this._btnCancel.addEventListener('click', this.btnCancelOnClick);
    this._btnCreate.addEventListener('click', this.btnCreateOnClick);
    this._btnsUpdate.forEach((el) => el.addEventListener('click', this.btnUpdateOnClick));
    this._btnsDelete.forEach((el) => el.addEventListener('click', this.btnDeleteOnClick));
    console.log('List Editor Widget starts');
  }

  showPopup() {
    document.body.appendChild(this._popup);
  }

  closePopup() {
    document.body.removeChild(this._popup);
  }

  btnSaveOnClick(el) {
    el.preventDefault();
    const itemTitle = this._popup.querySelector('.popup-item-main-title-input').value.trim();
    const itemCost = this._popup.querySelector('.popup-item-main-cost-input').value.trim();
    const popupData = { title: itemTitle, cost: itemCost };
    this._popup.querySelector('.popup-item-main-title-input').value = '';
    this._popup.querySelector('.popup-item-main-cost-input').value = '';
    this.addRow(popupData);
  }

  btnCancelOnClick(el) {
    el.preventDefault();
    this.closePopup();
  }

  addRow(data) {
    const tableRowNew = document.createElement('tr');
    tableRowNew.innerHTML = `
    <td class="list-editor-table-title"></td>
    <td class="list-editor-table-cost"></td>
    <td>
        <button class="list-editor-table_update">&#9998;</button>
        <button class="list-editor-table_delete">&times;</button>
    </td>
    `;
    const rowTitleElement = tableRowNew.querySelector('.list-editor-table-title');
    const rowCostElement = tableRowNew.querySelector('.list-editor-table-cost');
    const table = this._element.querySelector('tbody');
    rowTitleElement.textContent = data.title;
    rowCostElement.textContent = data.cost;
    table.appendChild(tableRowNew);

    this.closePopup();
  }

  btnCreateOnClick(el) {
    el.preventDefault();
    this.showPopup();
  }
}
