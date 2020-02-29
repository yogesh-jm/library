import EventEmitter from 'events';
import BookDispatcher from './BookDispatcher';
import BookActionTypes from './BookActionTypes';

let books = {};

const CHANGE_EVENT = 'change';
const BookStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  getBooks() {
    return books;
  },
});

BookDispatcher.register((action) => {
  switch (action.actionType) {
    case BookActionTypes.INIT_BOOKS:
      ({ books } = action);
      BookStore.emitChange();
      break;
    case BookActionTypes.UPDATE_BOOKS:
        ({ books } = action);
        BookStore.emitChange();
        break; 
    default:
      // no op
  }
});

BookStore.setMaxListeners(0);

export default BookStore;
