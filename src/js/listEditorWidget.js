import Popup from './createUpdatePopup';

export default class ListEditorWidget {
  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    this._element = element;

    this._popup = new Popup();

    this._btnCreate = this._element.querySelector('.list-editor-head_create');
    this._btnsUpdate = this._element.querySelectorAll('.list-editor-table_update');
    this._btnsDelete = this._element.querySelectorAll('.list-editor-table_delete');

    this._btnCreate.addEventListener('click', this.btnCreateOnClick);
    this._btnsUpdate.forEach((el) => el.addEventListener('click', this.btnUpdateOnClick));
    this._btnsDelete.forEach((el) => el.addEventListener('click', this.btnDeleteOnClick));

    console.log('List Editor Widget starts');
  }

  btnCreateOnClick = (el) => {
    el.preventDefault();
    console.log(el);
    this._popup.showPopup();
  };

  btnUpdateOnClick = (el) => {
    el.preventDefault();
    console.log(el);
  };

  btnDeleteOnClick = (el) => {
    el.preventDefault();
    console.log(el);
  };
}
