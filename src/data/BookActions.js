import BookActionTypes from './BookActionTypes';
import BookDispatcher from './BookDispatcher';

const BookActions = {

    loadBooks() {
      let books = [
            { name: 'Wasif', age: 21 },
            { name: 'Ali', age: 19 },
            { name: 'Saad', age: 16 },
            { name: 'Asad', age: 25 }
         ]

         BookDispatcher.dispatch({
            actionType: BookActionTypes.INIT_BOOKS,
            books: books,
          });

         
     },  

  updateBooks(books) {
      console.log('calling actions...', books);
    BookDispatcher.dispatch({
        actionType: BookActionTypes.UPDATE_BOOKS,
      books: books,
      
    });
    console.log('dispatching', books);
  },
};

export default BookActions;
