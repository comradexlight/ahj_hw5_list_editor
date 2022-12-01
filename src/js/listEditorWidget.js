export default class ListEditorWidget {
  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    this._element = element;

    this._tableData = [{
      id: 1,
      title: 'iphone',
      cost: 1000,
    },
    {
      id: 2,
      title: 'ipad',
      cost: 1500,
    }];

    this._table = this._element.querySelector('tbody');

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

    this._btnCreate = this._element.querySelector('.list-editor-head_create');
    this._btnCreate.addEventListener('click', this.showPopup);
  }

  showPopup(el) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    if (el.target.classList.contains('list-editor-head_create')) {
      popup.innerHTML = `
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
    }
    else {
      console.log(el.taget);
    }
    document.body.appendChild(popup);
  }

  readTable() {
    for (const row of this._tableData) {
      this.addItem(row);
    }
  }

  addItem(data) {
    const item = document.createElement('tr');
    item.id = data.id;
    item.innerHTML = `
    <td class="list-editor-table-title">${data.title}</td>
    <td class="list-editor-table-cost">${data.cost}</td>
    <td>
        <button class="list-editor-table_update">&#9998;</button>
        <button class="list-editor-table_delete">&times;</button>
    </td>
    `;
    this._table.appendChild(item);
  }
}
