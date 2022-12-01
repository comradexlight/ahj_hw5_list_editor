import './css/style.css';
import ListEditorWidget from './js/listEditorWidget';

document.addEventListener('DOMContentLoaded', () => {
  const listEditor = new ListEditorWidget('.list-editor');
  listEditor.readTable();
});
